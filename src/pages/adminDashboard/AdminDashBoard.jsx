import { useEffect, useState } from "react";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import StudentCard from "components/studentCard/StudentCard";
import restClient from "restClient";

function AdminDashBoard() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [studentData, setStudentData] = useState([]);

  const getAllStudent = async () => {
    try {
      setIsLoading(true);

      const { data } = await restClient({
        method: "GET",
        url: "/student/all",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") {
        setStudentData(data.students);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");

    toast.success("Logged out successfully");
  };

  useEffect(() => {
    getAllStudent();
  }, []);

  return (
    <div className="flex flex-col gap-[1rem] px-[2rem] py-[1rem]">
      <div className="flex items-center justify-between">
        <span className="text-primary-teal font-bold text-[1.8rem]">
          Admin Dashboard
        </span>
        <div className="flex gap-4 items-center">
          <ArrowRightEndOnRectangleIcon
            className="size-6 text-primary-red cursor-pointer"
            onClick={logout}
          />
        </div>
      </div>
      <div className="flex gap-[2rem] flex-wrap">
        {isLoading && (
          <div className="flex justify-center w-full pt-6">
            <ClipLoader color="#1dbbc3" size={40} />
          </div>
        )}
        {studentData.map((student) => {
          return (
            <StudentCard
              student={student}
              onClick={() =>
                navigate(`/student-profile/${student.instituteId}`)
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default AdminDashBoard;
