function ExamCard() {
  return (
    <div className="flex flex-col gap-[0.3rem] bg-primary-white rounded-[1rem] p-4 border-2 border-primary-violate">
      <h1 className="text-[1.2rem] font-semibold text-primary-black mb-2">
        Articulate structure of C++ and Java in Semester 1
      </h1>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-violate">Subject: </span>
        <span className="text-primary-black ">Network Engineerring</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-violate">
          Description:{" "}
        </span>
        <span className="text-primary-black">
          Quiz on basic programming concepts and introductory algorithms.
        </span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-violate">
          Maximum Marks:
        </span>
        <span className="text-primary-black">12:30</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-violate">
          Passing Marks:
        </span>
        <span className="text-primary-black">12:30</span>
      </div>
      <div className="flex gap-[0.5rem]">
        <span className="font-semibold text-primary-violate">Date:</span>
        <span className="text-primary-black">80</span>
      </div>
      <div className="flex gap-[0.5rem]">
        <span className="font-semibold text-primary-violate">
          Time Allowed:
        </span>
        <span className="text-primary-black">80</span>
      </div>
    </div>
  );
}

export default ExamCard;
