import arrow from "../../assets/images/arrow.png";

function AdminDashBoard() {
  return (
    <div className="flex flex-col gap-[1rem] px-[2rem] py-[1rem] ">
      <div className="flex items-center justify-between">
        <span className="text-primary-teal font-bold text-[1.8rem]">
          Admin Dashboard
        </span>

        <div className="flex gap-4 items-center">
          <span className="text-primary-teal font-semibold text-[1.2rem]">
            Go Back
          </span>
          <div className="rotate-180">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
