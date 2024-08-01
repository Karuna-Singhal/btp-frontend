import CircularProgressBar from "components/circularProgressBar/CircularProgressBar";

function AnalyticTab() {
  const analyticsData = {
    attendence: 60,
    assignment: 85,
    quiz: 20,
    exam: 30,
    grade: "A",
    gradePercentage: 80,
  };

  const aigenerativeData = {
    attendence: "attendance",
    assignment: "Lorem ipsum",
    quiz: "loremipsum",
    exam: "hashdahsd",
    message: "sajhasjadassah",
  };

  const getColor = (grade) => {
    if (grade === "A") return "#20c997";
    else if (grade === "B") return "#339af0";
    else if (grade === "C" || grade === "D") return "#fab005";
    else if (grade === "E" || grade === "F") return "#d9480f";
  };

  const getColor2 = (percentage) => {
    if (percentage >= 80) return "#20c997";
    else if (percentage >= 60 && percentage < 80) return "#339af0";
    else if (percentage >= 30 && percentage < 60) return "#fab005";
    else if (percentage >= 0 && percentage < 30) return "#d9480f";
  };

  return (
    <div className="flex gap-[2rem]">
      <div
        className={`flex flex-col gap-[2rem] w-fit rounded-[1rem] py-4 px-8 items-center`}
        style={{ border: `2.4px solid ${getColor(analyticsData.grade)} ` }}
      >
        <CircularProgressBar
          grade={analyticsData.grade}
          gradePercentage={analyticsData.gradePercentage}
          color={getColor(analyticsData.grade)}
        />

        <div className="flex flex-col gap-[1rem]">
          <div className="flex justify-between gap-[1rem] text-[1.4rem]">
            <span
              className="font-semibold "
              style={{
                color: getColor2(analyticsData.attendence),
              }}
            >
              Attendance
            </span>
            <span
              style={{
                color: getColor2(analyticsData.attendence),
              }}
            >
              {analyticsData.attendence}%
            </span>
          </div>
          <div className="flex justify-between gap-[1rem] text-[1.4rem]">
            <span
              className="font-semibold"
              style={{
                color: getColor2(analyticsData.assignment),
              }}
            >
              Assignment
            </span>
            <span
              style={{
                color: getColor2(analyticsData.assignment),
              }}
            >
              {analyticsData.assignment}%
            </span>
          </div>
          <div className="flex justify-between gap-[1rem] text-[1.4rem]">
            <span
              className="font-semibold"
              style={{
                color: getColor2(analyticsData.quiz),
              }}
            >
              Quiz
            </span>
            <span
              style={{
                color: getColor2(analyticsData.quiz),
              }}
            >
              {analyticsData.quiz}%
            </span>
          </div>
          <div className="flex justify-between gap-[1rem] text-[1.4rem]">
            <span
              className="font-semibold"
              style={{
                color: getColor2(analyticsData.exam),
              }}
            >
              Exam
            </span>
            <span
              style={{
                color: getColor2(analyticsData.exam),
              }}
            >
              {analyticsData.exam}%
            </span>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col gap-[2rem] w-full rounded-[1rem] py-4 px-8`}
        style={{ border: `2.4px solid ${getColor(analyticsData.grade)}` }}
      >
        <ul className="flex flex-col gap-[1rem]">
          <li>
            <div className="flex gap-[1rem] items-center">
              &#8226;{" "}
              <span
                className="font-semibold text-[1.2rem]"
                style={{ color: getColor(analyticsData.grade) }}
              >
                Grade Overview :
              </span>
              <span>{aigenerativeData.message}</span>
            </div>
          </li>
          <li>
            <div className="flex gap-[1rem] items-center">
              &#8226;{" "}
              <span
                className="font-semibold text-[1.2rem]"
                style={{ color: getColor2(analyticsData.assignment) }}
              >
                Assignment :
              </span>
              <span>{aigenerativeData.assignment}</span>
            </div>
          </li>
          <li>
            <div className="flex gap-[1rem] items-center">
              &#8226;{" "}
              <span
                className="font-semibold text-[1.2rem]"
                style={{ color: getColor2(analyticsData.attendence) }}
              >
                Attendance :
              </span>
              <span>{aigenerativeData.attendence}</span>
            </div>
          </li>
          <li>
            <div className="flex gap-[1rem] items-center">
              &#8226;{" "}
              <span
                className="font-semibold text-[1.2rem]"
                style={{ color: getColor2(analyticsData.quiz) }}
              >
                Quiz :
              </span>
              <span>{aigenerativeData.quiz}</span>
            </div>
          </li>
          <li>
            <div className="flex gap-[1rem] items-center">
              &#8226;{" "}
              <span
                className="font-semibold text-[1.2rem]"
                style={{ color: getColor2(analyticsData.exam) }}
              >
                Exam :
              </span>
              <span>{aigenerativeData.exam}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AnalyticTab;
