function SubjectCard() {
  return (
    <div className="flex flex-col gap-[0.3rem] bg-primary-white rounded-[1rem] p-4 border-2 border-primary-grape">
      <h1 className="text-[1.2rem] font-semibold text-primary-black mb-2">
        Articulate structure of C++ and Java in Semester 1
      </h1>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-grape">Subject: </span>
        <span className="text-primary-black ">Network Engineerring</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-grape">Description: </span>
        <span className="text-primary-black">
          Quiz on basic programming concepts and introductory algorithms.
        </span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-grape">Total Classes:</span>
        <span className="text-primary-black">12:30</span>
      </div>
    </div>
  );
}

export default SubjectCard;
