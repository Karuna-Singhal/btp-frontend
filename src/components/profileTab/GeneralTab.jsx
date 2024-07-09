function GeneralTab({ setValue }) {
  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="flex gap-[4.4rem] shadow-lg border-2 border-primary-teal text-primary-white px-[1.8rem] py-[1.2rem] rounded-[1.4rem] w-[60%] font-semibold">
        <div className="flex flex-col gap-[0.5rem]">
          <div className="flex gap-[1rem] text-primary-black">
            Course: <span className="text-primary-teal">IPG M.tech</span>
          </div>
          <div className="flex gap-[0.6rem] text-primary-black">
            Course Start Date:{" "}
            <span className="text-primary-teal">20 Nov 2021</span>
          </div>
          <div className="flex gap-[0.8rem] text-primary-black">
            Course End Date:{" "}
            <span className="text-primary-teal">30 May 2026 </span>
          </div>
          <div className="flex gap-[0.8rem] text-primary-black">
            Email: <span className="text-primary-teal">abc@gmail.com </span>
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem] text-primary-black">
          <div className="flex gap-[1rem]">
            Full Name: <span className="text-primary-teal">Karuna Singhal</span>
          </div>
          <div className="flex gap-[0.5rem] text-primary-black">
            Mother's Name:{" "}
            <span className="text-primary-teal">Mrs. Pratima Singhal</span>
          </div>
          <div className="flex gap-[1rem] text-primary-black">
            Father's Name:{" "}
            <span className="text-primary-teal">Mr. Rajkumar Singhal</span>
          </div>
          <div className="flex gap-[0.8rem] text-primary-black">
            Phone: <span className="text-primary-teal">1234567890 </span>
          </div>
        </div>
      </div>

      <div className="flex gap-[1rem] w-full">
        <div className="flex flex-col gap-[1rem] font-semibold w-1/4">
          <span className="text-primary-grape  text-[1.4rem]">Attendance</span>
          <div
            onClick={() => setValue("subjects")}
            className="flex flex-col gap-[0.4rem] shadow-lg border-2 border-primary-grape px-4 py-2 rounded-[1.2rem] cursor-pointer"
          >
            <div className="flex gap-[0.5rem] text-[1.2rem] text-primary-grape">
              Total Classes: <span>145</span>
            </div>
            <div className="flex gap-[0.5rem] text-primary-green">
              Attended: <span>120</span>
            </div>
            <div className="flex gap-[0.5rem] text-primary-red">
              Missed: <span>25</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] font-semibold w-1/4 ">
          <span className="text-[1.4rem] text-primary-pink">Quiz</span>
          <div
            onClick={() => setValue("quiz")}
            className="flex flex-col gap-[0.4rem] bg-primary-white shadow-lg border-2 border-primary-pink px-4 py-2 rounded-[1.2rem] cursor-pointer"
          >
            <div className="flex gap-[0.5rem] text-[1.2rem] text-primary-pink">
              Total Quizzes: <span>145</span>
            </div>

            <div className="flex gap-[0.3rem] text-primary-green">
              Attempted: <span>120</span>
            </div>
            <div className="flex gap-[0.3rem] text-primary-red">
              Missed: <span>120</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] font-semibold w-1/4">
          <span className="text-primary-violate text-[1.4rem]">Exams</span>
          <div
            onClick={() => setValue("exams")}
            className="flex flex-col gap-[0.4rem] bg-primary-white shadow-lg border-2 border-primary-violate px-4 py-2 rounded-[1.2rem] cursor-pointer"
          >
            <div className="flex gap-[0.5rem] text-[1.2rem] text-primary-violate">
              Total Exams: <span>145</span>
            </div>
            <div className="flex gap-[0.3rem] text-primary-green">
              Attempted: <span>120</span>
            </div>
            <div className="flex gap-[0.3rem] text-primary-red">
              Missed: <span>120</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1rem] font-semibold w-1/4">
          <span className="text-primary-orange text-[1.4rem]">Assignment</span>
          <div
            onClick={() => setValue("assignment")}
            className="flex flex-col gap-[0.4rem] bg-primary-white shadow-lg border-2 border-primary-orange px-4 py-2 rounded-[1.2rem] cursor-pointer"
          >
            <div className="flex gap-[0.5rem] text-[1.2rem] text-primary-orange">
              Total Assignment: <span>145</span>
            </div>
            <div className="flex gap-[0.3rem] text-primary-green">
              Attempted: <span>120</span>
            </div>
            <div className="flex gap-[0.3rem] text-primary-red">
              Missed: <span>120</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralTab;
