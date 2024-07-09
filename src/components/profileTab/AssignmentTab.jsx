import AssignmentCard from "components/assignmentCard/AssignmentCard";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import restClient from "restClient";

function AssignmentTab() {
  const [isLoading, setIsLoading] = useState(false);
  const [assignmentData, setAssignmentData] = useState([]);
  const [totalAssignments, setTotalAssignments] = useState(0);
  const [attemptedAssignment, setAttemptedAssignment] = useState(0);
  const [studentAssignments, setStudentAssignments] = useState([]);

  const getAllAssignments = async () => {
    try {
      setIsLoading(true);

      const { data } = await restClient({
        method: "GET",
        url: "/assignment",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") {
        setAssignmentData(data.assignments);
        setTotalAssignments(data.results);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStudentAssignments = async () => {
    try {
      setIsLoading(true);

      const { data } = await restClient({
        method: "GET",
        url: "/studentAssignment",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data.status === "success") {
        setStudentAssignments(data.studentAssignments);
        setAttemptedAssignment(data.results);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllAssignments();
    getStudentAssignments();
  }, []);

  return (
    <div className="flex flex-col gap-[1rem]">
      <div className="flex gap-[3rem]">
        <div className="flex gap-[0.6rem] text-primary-black font-semibold">
          Total Assignments: <span>{totalAssignments}</span>
        </div>
        <div className="flex gap-[0.6rem] text-primary-black font-semibold">
          Attempted: <span>{attemptedAssignment}</span>
        </div>
        <div className="flex gap-[0.6rem] text-primary-gray font-semibold">
          Unattempted: <span>{totalAssignments - attemptedAssignment}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {isLoading && (
          <div className="flex justify-center pt-6">
            <PulseLoader color="#f76707" size={16} />
          </div>
        )}
        {!isLoading &&
          assignmentData.map((assignment) => (
            <AssignmentCard
              assignment={assignment}
              studentAssignment={studentAssignments.find(
                (sAssignment) => sAssignment.assignmentId === assignment._id
              )}
            />
          ))}
      </div>
    </div>
  );
}

export default AssignmentTab;
