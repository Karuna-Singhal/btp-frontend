import formatYearstamp from "utils/dateFormat";

function AssignmentCard({ assignment, studentAssignment }) {
  return (
    <div className="flex flex-col gap-[0.3rem] bg-primary-white rounded-[1rem] p-4 border-2 border-primary-orange">
      <h1 className="text-[1.2rem] font-semibold text-primary-black mb-2">
        {assignment.name}
      </h1>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-orange">Subject: </span>
        <span className="text-primary-black ">
          {assignment.subjectId?.name}
        </span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-orange">Description: </span>
        <span className="text-primary-black">{assignment.description}</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-orange"> Deadline:</span>
        <span className="text-primary-black">
          {formatYearstamp(assignment.deadline)}
        </span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-orange">
          {" "}
          Maximum Marks:
        </span>
        <span className="text-primary-black">{assignment.maximumMarks}</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-orange">
          {" "}
          Marks Obtained:
        </span>
        <span className="text-primary-black">
          {studentAssignment?.marksObtained || 0}
        </span>
      </div>
    </div>
  );
}

export default AssignmentCard;
