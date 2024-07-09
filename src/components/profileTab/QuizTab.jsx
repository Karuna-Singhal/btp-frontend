import QuizCard from "components/quizCard/QuizCard";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import restClient from "restClient";

function QuizTab() {
  const [isLoading, setIsLoading] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [totalQuizzes, setTotalQuizzes] = useState(0);
  const [attemptedQuiz, setAttemptedQuiz] = useState(0);
  const [studentQuizzes, setStudentQuizzes] = useState([]);

  const getAllQuizzes = async () => {
    try {
      setIsLoading(true);

      const { data } = await restClient({
        method: "GET",
        url: "/quiz",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") {
        setQuizData(
          data.quizzes.sort((a, b) => new Date(a.date) - new Date(b.date))
        );
        setTotalQuizzes(data.results);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStudentQuizzes = async () => {
    try {
      setIsLoading(true);

      const { data } = await restClient({
        method: "GET",
        url: "/studentQuiz",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") {
        setStudentQuizzes(data.studentQuizzes);
        setAttemptedQuiz(data.results);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllQuizzes();
    getStudentQuizzes();
  }, []);

  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="flex gap-[3rem]">
        <div className="flex gap-[0.6rem] text-primary-black font-semibold">
          Total Quizzes: <span>{totalQuizzes}</span>
        </div>
        <div className="flex gap-[0.6rem] text-primary-black font-semibold">
          Attempted: <span>{attemptedQuiz}</span>
        </div>
        <div className="flex gap-[0.6rem] text-primary-gray font-semibold">
          Unattempted: <span>{totalQuizzes - attemptedQuiz}</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {isLoading && (
          <div className="flex justify-center col-span-full pt-6">
            <PulseLoader color="#d6336c" size={16} />
          </div>
        )}
        {!isLoading &&
          quizData.map((quiz) => (
            <QuizCard
              quiz={quiz}
              studentQuiz={studentQuizzes.find(
                (sQuiz) => sQuiz.quizId === quiz._id
              )}
            />
          ))}
      </div>
    </div>
  );
}

export default QuizTab;
