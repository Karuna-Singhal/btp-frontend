import formatYearstamp from "utils/dateFormat";

function ExamCard({ exam, studentExam }) {
  return (
    <div className=" relative overflow-hidden flex flex-col gap-[0.3rem] bg-primary-white rounded-[1rem] p-4 border-2 border-primary-violate">
      <h1 className="text-[1.2rem] font-semibold text-primary-black mb-2">
        {exam.name}
      </h1>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-violate">Subject: </span>
        <span className="text-primary-black ">{exam.subjectId?.name}</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-violate">
          Description:{" "}
        </span>
        <span className="text-primary-black">
          {exam.subjectId?.description}
        </span>
      </div>
      <div className="flex gap-[0.5rem]">
        <span className="font-semibold text-primary-violate">Date:</span>
        <span className="text-primary-black">{formatYearstamp(exam.date)}</span>
      </div>
      <div className="flex gap-[0.5rem]">
        <span className="font-semibold text-primary-violate">
          Time Allowed:
        </span>
        <span className="text-primary-black">{exam.timeAllowed} minutes</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-violate">
          Maximum Marks:
        </span>
        <span className="text-primary-black">{exam.maximumMarks}</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-violate">
          Passing Marks:
        </span>
        <span className="text-primary-black">{exam.passingMarks}</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-violate">
          Marks Obtained:
        </span>
        <span className="text-primary-black">
          {studentExam?.marksObtained || 0}
        </span>
      </div>

      {studentExam?.marksObtained >= exam.passingMarks ? (
        <div className="absolute top-0 right-0 bg-secondary-green px-2 py-1">
          <span className="text-primary-green text-[0.8rem] font-semibold">
            Passed
          </span>
        </div>
      ) : (
        <div className="absolute top-0 right-0 bg-secondary-red px-2 py-1">
          <span className="text-primary-red text-[0.8rem] font-semibold">
            Failed
          </span>
        </div>
      )}
    </div>
  );
}

export default ExamCard;
