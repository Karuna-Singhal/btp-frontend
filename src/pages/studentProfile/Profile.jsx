import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";

import LabTabs from "components/profileTab/Tab";
import GeneralTab from "components/profileTab/GeneralTab";
import QuizTab from "components/profileTab/QuizTab";
import ExamTab from "components/profileTab/ExamTab";
import AssignmentTab from "components/profileTab/AssignmentTab";
import SubjectTab from "components/profileTab/SubjectTab";

function Profile() {
  const navigate = useNavigate();
  const [value, setValue] = useState("general");

  const logout = () => {
    localStorage.clear();
    navigate("/login");

    toast.success("Logged out successfully");
  };

  return (
    <div className="flex flex-col gap-[1rem] px-[2rem] py-[1rem] ">
      <div className="flex items-center justify-between">
        <span className="text-primary-teal font-bold text-[1.8rem]">
          Student Profile
        </span>
        <LabTabs value={value} onChange={(e, newValue) => setValue(newValue)} />

        <div className="flex gap-4 items-center">
          <span className="text-primary-teal font-semibold text-[1.2rem]">
            {localStorage.getItem("name")}
          </span>
          <ArrowRightEndOnRectangleIcon
            className="size-6 text-primary-red cursor-pointer"
            onClick={logout}
          />
        </div>
      </div>

      <div className="mt-[1rem]">
        {value === "general" && <GeneralTab setValue={setValue} />}
        {value === "quiz" && <QuizTab />}
        {value === "exams" && <ExamTab />}
        {value === "assignment" && <AssignmentTab />}
        {value === "subjects" && <SubjectTab />}
      </div>
    </div>
  );
}

export default Profile;
