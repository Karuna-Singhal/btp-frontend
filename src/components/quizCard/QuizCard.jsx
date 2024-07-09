import formatYearstamp, { formatTimestamp } from "utils/dateFormat";

function QuizCard({ quiz, studentQuiz }) {
  return (
    <div className="flex flex-col gap-[0.3rem] bg-primary-white rounded-[1rem] p-4 border-2 border-primary-pink">
      <h1 className="text-[1.2rem] font-semibold text-primary-black mb-2">
        {quiz.name}
      </h1>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-pink">Subject: </span>
        <span className="text-primary-black ">{quiz.subjectId?.name}</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-pink">Description: </span>
        <span className="text-primary-black">{quiz.description}</span>
      </div>
      <div className="flex gap-[0.5rem]">
        <span className="font-semibold text-primary-pink">Date:</span>
        <span className="text-primary-black">{formatYearstamp(quiz.date)}</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-pink">Start Time:</span>
        <span className="text-primary-black">
          {formatTimestamp(quiz.startTime)}
        </span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-pink">End Time:</span>
        <span className="text-primary-black">
          {formatTimestamp(quiz.endTime)}
        </span>
      </div>

      <div className="flex gap-[0.5rem]">
        <span className="font-semibold text-primary-pink">Maximum Marks:</span>
        <span className="text-primary-black">{quiz.maximumMarks}</span>
      </div>
      <div className="flex gap-[0.5rem]">
        <span className="font-semibold text-primary-pink">Marks Obtained:</span>
        <span className="text-primary-black">
          {studentQuiz?.marksObtained || 0}
        </span>
      </div>
    </div>
  );
}

export default QuizCard;
