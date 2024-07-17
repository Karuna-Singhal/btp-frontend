import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import restClient from "restClient";
import formatYearstamp from "utils/dateFormat";

function GeneralTab({ setValue }) {
  const { instituteId } = useParams();
  const [userData, setUserData] = useState({});
  const [attendanceData, setAttendanceData] = useState({});
  const [quizData, setQuizData] = useState({});
  const [examData, setExamData] = useState({});
  const [assignmentData, setAssignmentData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAttendance, setIsLoadingAttendance] = useState(false);
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false);
  const [isLoadingExam, setIsLoadingExam] = useState(false);
  const [isLoadingAssignment, setIsLoadingAssignment] = useState(false);

  const getUserDetails = async () => {
    try {
      let url = "/student";

      if (instituteId) url = `/student/${instituteId}`;

      setIsLoading(true);

      const { data } = await restClient({
        method: "GET",
        url,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") setUserData(data.student);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllSubjects = async () => {
    try {
      let url = "/subject";

      if (instituteId) url = `/subject/${instituteId}`;

      setIsLoadingAttendance(true);

      const { data } = await restClient({
        method: "GET",
        url,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") {
        setAttendanceData((prev) => ({
          ...prev,
          totalClasses: data.subjects.reduce(
            (accumulator, subject) => accumulator + subject.totalClasses,
            0,
          ),
        }));
      }
    } catch (error) {
      console.error(error);
      setIsLoadingAttendance(false);
    }
  };

  const getStudentSubjects = async () => {
    try {
      let url = "/studentSubject";

      if (instituteId) url = `/studentSubject/${instituteId}`;

      const { data } = await restClient({
        method: "GET",
        url,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") {
        setAttendanceData((prev) => ({
          ...prev,
          classesAttended: data.studentSubjects.reduce(
            (accumulator, subject) =>
              accumulator + subject.totalClassesAttended,
            0,
          ),
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingAttendance(false);
    }
  };

  const getAllQuizzes = async () => {
    try {
      let url = "/quiz";

      if (instituteId) url = `/quiz/${instituteId}`;

      setIsLoadingQuiz(true);

      const { data } = await restClient({
        method: "GET",
        url,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success")
        setQuizData((prev) => ({
          ...prev,
          totalQuiz: data.results,
        }));
    } catch (error) {
      console.error(error);
      setIsLoadingQuiz(false);
    }
  };

  const getStudentQuizzes = async () => {
    try {
      let url = "/studentQuiz";

      if (instituteId) url = `/studentQuiz/${instituteId}`;

      const { data } = await restClient({
        method: "GET",
        url,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success")
        setQuizData((prev) => ({
          ...prev,
          quizzesAttended: data.results,
        }));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingQuiz(false);
    }
  };

  const getAllExams = async () => {
    try {
      let url = "/exam";

      if (instituteId) url = `/exam/${instituteId}`;

      setIsLoadingExam(true);

      const { data } = await restClient({
        method: "GET",
        url,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success")
        setExamData((prev) => ({
          ...prev,
          totalExams: data.results,
          allExams: data.exams,
        }));
    } catch (error) {
      console.error(error);
      setIsLoadingExam(false);
    }
  };

  const getStudentExams = async () => {
    try {
      let url = "/studentExam";

      if (instituteId) url = `/studentExam/${instituteId}`;

      const { data } = await restClient({
        method: "GET",
        url,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") {
        setExamData((prev) => ({
          ...prev,
          totalPassed: data.studentExams.reduce((accumulator, exam) => {
            const examDetails = examData.allExams.find(
              (e) => e._id === exam.examId,
            );

            const isPassed =
              examDetails && examDetails.passingMarks <= exam.marksObtained
                ? 1
                : 0;

            return accumulator + isPassed;
          }, 0),
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingExam(false);
    }
  };

  const getAllAssignments = async () => {
    try {
      let url = "/assignment";

      if (instituteId) url = `/assignment/${instituteId}`;

      setIsLoadingAssignment(true);

      const { data } = await restClient({
        method: "GET",
        url,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success")
        setAssignmentData((prev) => ({
          ...prev,
          totalAssignment: data.results,
        }));
    } catch (error) {
      console.error(error);
      setIsLoadingAssignment(false);
    }
  };

  const getStudentAssignments = async () => {
    try {
      let url = "/studentAssignment";

      if (instituteId) url = `/studentAssignment/${instituteId}`;

      const { data } = await restClient({
        method: "GET",
        url,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") {
        setAssignmentData((prev) => ({
          ...prev,
          assignmentAttended: data.results,
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingAssignment(false);
    }
  };

  useEffect(() => {
    getUserDetails();
    getAllSubjects();
    getStudentSubjects();
    getAllQuizzes();
    getStudentQuizzes();
    getAllExams();
    getAllAssignments();
    getStudentAssignments();
  }, []);

  useEffect(() => {
    if (examData.allExams?.length) getStudentExams();
  }, [examData.allExams]);

  return (
    <>
      <div className="flex flex-col gap-[1rem]">
        <div className="flex gap-[4.4rem] shadow-lg border-2 border-primary-teal text-primary-white px-[1.8rem] py-[1.2rem] rounded-[1.4rem] font-semibold w-fit min-w-[50%] items-center">
          {isLoading && (
            <div className="flex justify-center w-full items-center min-h-[4rem]">
              <ClipLoader color="#17ddd6" size={20} />
            </div>
          )}
          {!isLoading && (
            <>
              {instituteId && (
                <div className="flex gap-[1rem] text-primary-teal text-[1.8rem]">
                  Name:{" "}
                  <span className="text-primary-black">
                    {userData.userId?.name}
                  </span>
                </div>
              )}
              <div className="flex flex-col gap-[0.5rem]">
                <div className="flex gap-[1rem] text-primary-teal">
                  Course:{" "}
                  <span className="text-primary-black">
                    {userData.course?.name}
                  </span>
                </div>
                <div className="flex gap-[0.6rem] text-primary-teal">
                  Course Start Date:{" "}
                  <span className="text-primary-black">
                    {formatYearstamp(userData.courseStartDate)}
                  </span>
                </div>
                <div className="flex gap-[0.8rem] text-primary-teal">
                  Course End Date:{" "}
                  <span className="text-primary-black">
                    {formatYearstamp(userData.courseEndDate)}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[0.5rem] text-primary-teal">
                <div className="flex gap-[0.5rem] text-primary-teal">
                  Institue Id:{" "}
                  <span className="text-primary-black">
                    {userData.instituteId}
                  </span>
                </div>
                <div className="flex gap-[0.8rem] text-primary-teal">
                  Email:{" "}
                  <span className="text-primary-black">
                    {userData.userId?.email}{" "}
                  </span>
                </div>
                <div className="flex gap-[1rem]">
                  Gender:{" "}
                  <span className="text-primary-black">{userData.gender}</span>
                </div>
              </div>
              <div className="flex flex-col gap-[0.5rem]">
                <div className="flex gap-[0.5rem] text-primary-teal">
                  Mother's Name:{" "}
                  <span className="text-primary-black">
                    {userData.motherName}
                  </span>
                </div>
                <div className="flex gap-[1rem] text-primary-teal">
                  Father's Name:{" "}
                  <span className="text-primary-black">
                    {userData.fatherName}
                  </span>
                </div>
                <div className="flex gap-[0.8rem] text-primary-teal">
                  Phone:{" "}
                  <span className="text-primary-black">{userData.phone} </span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex gap-[1rem] w-full">
          <div className="flex flex-col gap-[1rem] font-semibold w-1/4">
            <span className="text-primary-grape  text-[1.4rem]">
              Attendance
            </span>

            <div
              onClick={() => setValue("subjects")}
              className="flex flex-col gap-[0.4rem] shadow-lg border-2 border-primary-grape px-4 py-2 rounded-[1.2rem] cursor-pointer"
            >
              {isLoadingAttendance && (
                <div className="flex justify-center items-center min-h-[4rem]">
                  <ClipLoader color="#be4bdb" size={20} />
                </div>
              )}
              {!isLoadingAttendance && (
                <>
                  <div className="flex gap-[0.5rem] text-[1.2rem] text-primary-grape">
                    Total Classes: <span>{attendanceData.totalClasses}</span>
                  </div>
                  <div className="flex gap-[0.5rem] text-primary-green">
                    Attended: <span>{attendanceData.classesAttended}</span>
                  </div>
                  <div className="flex gap-[0.5rem] text-primary-red">
                    Missed:{" "}
                    <span>
                      {attendanceData.totalClasses -
                        attendanceData.classesAttended}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-[1rem] font-semibold w-1/4 ">
            <span className="text-[1.4rem] text-primary-pink">Quiz</span>

            <div
              onClick={() => setValue("quiz")}
              className="flex flex-col gap-[0.4rem] bg-primary-white shadow-lg border-2 border-primary-pink px-4 py-2 rounded-[1.2rem] cursor-pointer"
            >
              {isLoadingQuiz && (
                <div className="flex justify-center min-h-[4rem] items-center">
                  <ClipLoader color="#d6336c" size={20} />
                </div>
              )}
              {!isLoadingQuiz && (
                <>
                  <div className="flex gap-[0.5rem] text-[1.2rem] text-primary-pink">
                    Total Quizzes: <span>{quizData.totalQuiz}</span>
                  </div>

                  <div className="flex gap-[0.3rem] text-primary-green">
                    Attempted: <span>{quizData.quizzesAttended}</span>
                  </div>
                  <div className="flex gap-[0.3rem] text-primary-red">
                    Missed:{" "}
                    <span>{quizData.totalQuiz - quizData.quizzesAttended}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-[1rem] font-semibold w-1/4">
            <span className="text-primary-violate text-[1.4rem]">Exams</span>

            <div
              onClick={() => setValue("exams")}
              className="flex flex-col gap-[0.4rem] bg-primary-white shadow-lg border-2 border-primary-violate px-4 py-2 rounded-[1.2rem] cursor-pointer"
            >
              {isLoadingExam && (
                <div className="flex justify-center min-h-[4rem] items-center">
                  <ClipLoader color="#7048e8" size={20} />
                </div>
              )}
              {!isLoadingExam && (
                <>
                  <div className="flex gap-[0.5rem] text-[1.2rem] text-primary-violate">
                    Total Exams: <span>{examData.totalExams}</span>
                  </div>
                  <div className="flex gap-[0.3rem] text-primary-green">
                    Passed: <span>{examData.totalPassed}</span>
                  </div>
                  <div className="flex gap-[0.3rem] text-primary-red">
                    Failed:{" "}
                    <span>{examData.totalExams - examData.totalPassed}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-[1rem] font-semibold w-1/4">
            <span className="text-primary-orange text-[1.4rem]">
              Assignment
            </span>

            <div
              onClick={() => setValue("assignment")}
              className="flex flex-col gap-[0.4rem] bg-primary-white shadow-lg border-2 border-primary-orange px-4 py-2 rounded-[1.2rem] cursor-pointer"
            >
              {isLoadingAssignment && (
                <div className="flex justify-center min-h-[4rem] items-center">
                  <ClipLoader color="#f76707" size={20} />
                </div>
              )}
              {!isLoadingAssignment && (
                <>
                  <div className="flex gap-[0.5rem] text-[1.2rem] text-primary-orange">
                    Total Assignment:{" "}
                    <span>{assignmentData.totalAssignment}</span>
                  </div>
                  <div className="flex gap-[0.3rem] text-primary-green">
                    Attempted: <span>{assignmentData.assignmentAttended}</span>
                  </div>
                  <div className="flex gap-[0.3rem] text-primary-red">
                    Missed:{" "}
                    <span>
                      {assignmentData.totalAssignment -
                        assignmentData.assignmentAttended}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralTab;
