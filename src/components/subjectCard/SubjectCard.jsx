function SubjectCard({ subject, studentSubject }) {
  return (
    <div className="flex flex-col gap-[0.3rem] bg-primary-white rounded-[1rem] p-4 border-2 border-primary-grape">
      <h1 className="text-[1.2rem] font-semibold text-primary-black mb-2">
        {subject.name}
      </h1>

      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-grape">Description: </span>
        <span className="text-primary-black">{subject.description}</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-grape">Total Classes:</span>
        <span className="text-primary-black">{subject.totalClasses}</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-grape">
          Classes Attended:
        </span>
        <span className="text-primary-black">
          {studentSubject?.totalClassesAttended || 0}
        </span>
      </div>
    </div>
  );
}

export default SubjectCard;
