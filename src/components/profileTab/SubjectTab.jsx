import SubjectCard from "components/subjectCard/SubjectCard";

function SubjectTab() {
  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="flex gap-[3rem]">
        <div className="flex gap-[0.6rem] text-primary-black font-semibold">
          <span className="font-semibold text-primary-grape">
            Total Subjects:
          </span>{" "}
          <span className="text-primary-black">245</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
      </div>
    </div>
  );
}

export default SubjectTab;
