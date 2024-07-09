import QuizCard from "components/quizCard/QuizCard";

function QuizTab() {
  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="flex gap-[3rem]">
        <div className="flex gap-[0.6rem] text-primary-black font-semibold">
          Total Quizzes: <span>245</span>
        </div>
        <div className="flex gap-[0.6rem] text-primary-black font-semibold">
          Attempted: <span>245</span>
        </div>
        <div className="flex gap-[0.6rem] text-primary-gray font-semibold">
          Unattempted: <span>245</span>
        </div>
        <div className="flex gap-[0.6rem] text-primary-green font-semibold">
          Passed: <span>245</span>
        </div>
        <div className="flex gap-[0.6rem] text-primary-red font-semibold">
          Failed: <span>245</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <QuizCard />
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </div>
    </div>
  );
}

export default QuizTab;
