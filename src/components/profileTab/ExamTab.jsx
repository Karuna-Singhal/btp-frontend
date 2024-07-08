import ExamCard from "components/examCard/ExamCard";

function ExamTab() {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="flex gap-[3rem]">
        <div className="flex gap-[0.6rem] text-primary-black font-semibold">
          Total Exams: <span>245</span>
        </div>
        <div className="flex gap-[0.6rem] text-primary-black font-semibold">
          Attempted: <span>245</span>
        </div>
        <div className="flex gap-[0.6rem] text-primary-gray font-semibold">
          Unattempt: <span>245</span>
        </div>
        <div className="flex gap-[0.6rem] text-primary-green font-semibold">
          Passed: <span>245</span>
        </div>
        <div className="flex gap-[0.6rem] text-primary-red font-semibold">
          Failed: <span>245</span>
        </div>
      </div>
      <div className="grid grid-cols-3  gap-4">
        <ExamCard />
        <ExamCard />
        <ExamCard />
        <ExamCard />
      </div>
    </div>
  );
}

export default ExamTab;
