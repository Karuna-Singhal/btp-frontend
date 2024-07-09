import { useEffect, useState } from "react";
import { ClipLoader, PulseLoader } from "react-spinners";

import restClient from "restClient";
import formatYearstamp from "utils/dateFormat";

function GeneralTab({ setValue }) {
  const [userData, setUserData] = useState({});
  const [attendanceData, setAttendanceData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAttendance, setIsLoadingAttendance] = useState(false);
  const [isLoadingQuiz, setIsLoadingQuiz] = useState(false);
  const [isLoadingExam, setIsLoadingExam] = useState(false);
  const [isLoadingAssignment, setIsLoadingAssignment] = useState(false);

  const getUserDetails = async () => {
    try {
      setIsLoading(true);

      const { data } = await restClient({
        method: "GET",
        url: "/student",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") setUserData(data.student);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAllSubjects = async () => {
    try {
      setIsLoadingAttendance(true);

      const { data } = await restClient({
        method: "GET",
        url: "/subject",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") {
        setAttendanceData((prev) => ({
          ...prev,
          totalClasses: data.subjects.reduce(
            (accumulator, subject) => accumulator + subject.totalClasses,
            0
          ),
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingAttendance(false);
    }
  };

  useEffect(() => {
    getUserDetails();
    getAllSubjects();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex justify-center col-span-full pt-6">
          <PulseLoader color="#17ddd6" size={16} />
        </div>
      )}
      {!isLoading && (
        <div className="flex flex-col gap-[1rem]">
          <div className="flex gap-[4.4rem] shadow-lg border-2 border-primary-teal text-primary-white px-[1.8rem] py-[1.2rem] rounded-[1.4rem] font-semibold w-fit">
            <div className="flex flex-col gap-[0.5rem]">
              <div className="flex gap-[1rem] text-primary-black">
                Course:{" "}
                <span className="text-primary-teal">
                  {userData.course?.name}
                </span>
              </div>
              <div className="flex gap-[0.6rem] text-primary-black">
                Course Start Date:{" "}
                <span className="text-primary-teal">
                  {formatYearstamp(userData.courseStartDate)}
                </span>
              </div>
              <div className="flex gap-[0.8rem] text-primary-black">
                Course End Date:{" "}
                <span className="text-primary-teal">
                  {formatYearstamp(userData.courseEndDate)}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem] text-primary-black">
              <div className="flex gap-[0.5rem] text-primary-black">
                Student Id:{" "}
                <span className="text-primary-teal">
                  {userData.instituteId}
                </span>
              </div>
              <div className="flex gap-[0.8rem] text-primary-black">
                Email:{" "}
                <span className="text-primary-teal">
                  {userData.userId?.email}{" "}
                </span>
              </div>
              <div className="flex gap-[1rem]">
                Gender:{" "}
                <span className="text-primary-teal">{userData.gender}</span>
              </div>
            </div>
            <div className="flex flex-col gap-[0.5rem] text-primary-black">
              <div className="flex gap-[0.5rem] text-primary-black">
                Mother's Name:{" "}
                <span className="text-primary-teal">{userData.motherName}</span>
              </div>
              <div className="flex gap-[1rem] text-primary-black">
                Father's Name:{" "}
                <span className="text-primary-teal">{userData.fatherName}</span>
              </div>
              <div className="flex gap-[0.8rem] text-primary-black">
                Phone:{" "}
                <span className="text-primary-teal">{userData.phone} </span>
              </div>
            </div>
          </div>

          <div className="flex gap-[1rem] w-full">
            {isLoadingAttendance && (
              <div className="flex justify-center pt-6">
                <ClipLoader color="#be4bdb" size={16} />
              </div>
            )}
            {!isLoadingAttendance && (
              <div className="flex flex-col gap-[1rem] font-semibold w-1/4">
                <span className="text-primary-grape  text-[1.4rem]">
                  Attendance
                </span>
                <div
                  onClick={() => setValue("subjects")}
                  className="flex flex-col gap-[0.4rem] shadow-lg border-2 border-primary-grape px-4 py-2 rounded-[1.2rem] cursor-pointer"
                >
                  <div className="flex gap-[0.5rem] text-[1.2rem] text-primary-grape">
                    Total Classes: <span>{attendanceData.totalClasses}</span>
                  </div>
                  <div className="flex gap-[0.5rem] text-primary-green">
                    Attended: <span>120</span>
                  </div>
                  <div className="flex gap-[0.5rem] text-primary-red">
                    Missed: <span>25</span>
                  </div>
                </div>
              </div>
            )}
            {isLoadingQuiz && (
              <div className="flex justify-center pt-6">
                <ClipLoader color="#d6336c" size={16} />
              </div>
            )}
            {!isLoadingQuiz && (
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
            )}
            {isLoadingExam && (
              <div className="flex justify-center pt-6">
                <ClipLoader color="#7048e8" size={16} />
              </div>
            )}
            {!isLoadingExam && (
              <div className="flex flex-col gap-[1rem] font-semibold w-1/4">
                <span className="text-primary-violate text-[1.4rem]">
                  Exams
                </span>
                <div
                  onClick={() => setValue("exams")}
                  className="flex flex-col gap-[0.4rem] bg-primary-white shadow-lg border-2 border-primary-violate px-4 py-2 rounded-[1.2rem] cursor-pointer"
                >
                  <div className="flex gap-[0.5rem] text-[1.2rem] text-primary-violate">
                    Total Exams: <span>145</span>
                  </div>
                  <div className="flex gap-[0.3rem] text-primary-green">
                    Passed: <span>120</span>
                  </div>
                  <div className="flex gap-[0.3rem] text-primary-red">
                    Failed: <span>120</span>
                  </div>
                </div>
              </div>
            )}
            {isLoading && (
              <div className="flex justify-center pt-6">
                <ClipLoader color="#f76707" size={16} />
              </div>
            )}

            {!isLoadingAssignment && (
              <div className="flex flex-col gap-[1rem] font-semibold w-1/4">
                <span className="text-primary-orange text-[1.4rem]">
                  Assignment
                </span>
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
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default GeneralTab;
