import formatYearstamp from "utils/dateFormat";

function StudentCard({ student }) {
  return (
    <div className="flex flex-col gap-[0.3rem] bg-primary-white rounded-[1rem] p-4 border-2 border-primary-teal">
      <h1 className="text-[1.2rem] font-semibold text-primary-black mb-2">
        {student.userId?.name}
      </h1>
      <div className="flex gap-[0.5rem]">
        <span className="font-semibold text-primary-teal">Institue Id:</span>
        <span className="text-primary-black">{student.instituteId}</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-teal">Email:</span>
        <span className="text-primary-black"> {student.userId?.email}</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-teal">Gender:</span>
        <span className="text-primary-black">{student.gender}</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-teal">Mother's Name: </span>
        <span className="text-primary-black ">{student.motherName}</span>
      </div>
      <div className="flex gap-[0.5rem] ">
        <span className="font-semibold text-primary-teal">Father's Name: </span>
        <span className="text-primary-black">{student.fatherName}</span>
      </div>

      <div className="flex gap-[0.5rem]">
        <span className="font-semibold text-primary-teal">Phone:</span>
        <span className="text-primary-black">{student.phone}</span>
      </div>
      <div className="flex gap-[0.5rem]">
        <span className="font-semibold text-primary-teal">Course:</span>
        <span className="text-primary-black">{student.course?.name}</span>
      </div>
      <div className="flex gap-[0.5rem]">
        <span className="font-semibold text-primary-teal">
          Course Start Date:
        </span>
        <span className="text-primary-black">
          {formatYearstamp(student.courseStartDate)}
        </span>
      </div>
      <div className="flex gap-[0.5rem]">
        <span className="font-semibold text-primary-teal">
          Course End Date:
        </span>
        <span className="text-primary-black">
          {formatYearstamp(student.courseEndDate)}
        </span>
      </div>
    </div>
  );
}

export default StudentCard;
