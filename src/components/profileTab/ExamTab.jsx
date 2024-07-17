import ExamCard from "components/examCard/ExamCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import restClient from "restClient";

function ExamTab() {
  const { instituteId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [examData, setExamData] = useState([]);
  const [totalExams, setTotalExams] = useState(0);
  const [attemptedExam, setAttemptedExam] = useState(0);
  const [studentExams, setStudentExams] = useState([]);

  const getAllExams = async () => {
    try {
      let url = "/exam";

      if (instituteId) url = `/exam/${instituteId}`;

      setIsLoading(true);

      const { data } = await restClient({
        method: "GET",
        url,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") {
        setExamData(
          data.exams.sort((a, b) => new Date(a.date) - new Date(b.date)),
        );
        setTotalExams(data.results);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStudentExams = async () => {
    try {
      let url = "/studentExam";

      if (instituteId) url = `/studentExam/${instituteId}`;

      setIsLoading(true);

      const { data } = await restClient({
        method: "GET",
        url,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") {
        setStudentExams(data.studentExams);
        setAttemptedExam(data.results);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllExams();
    getStudentExams();
  }, []);

  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="flex gap-[3rem]">
        <div className="flex gap-[0.6rem] text-primary-black font-semibold">
          Total Exams: <span>{totalExams}</span>
        </div>
        <div className="flex gap-[0.6rem] text-primary-black font-semibold">
          Attempted: <span>{attemptedExam}</span>
        </div>
        <div className="flex gap-[0.6rem] text-primary-gray font-semibold">
          Unattempted: <span>{totalExams - attemptedExam}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {isLoading && (
          <div className="flex justify-center pt-6">
            <ClipLoader color="#7048e8" size={40} />
          </div>
        )}
        {!isLoading &&
          examData.map((exam) => (
            <ExamCard
              exam={exam}
              studentExam={studentExams.find(
                (sExam) => sExam.examId === exam._id,
              )}
            />
          ))}
      </div>
    </div>
  );
}

export default ExamTab;
