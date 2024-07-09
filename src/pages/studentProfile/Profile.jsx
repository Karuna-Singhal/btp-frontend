import { useState } from "react";

import LabTabs from "components/profileTab/Tab";
import GeneralTab from "components/profileTab/GeneralTab";
import QuizTab from "components/profileTab/QuizTab";
import ExamTab from "components/profileTab/ExamTab";
import AssignmentTab from "components/profileTab/AssignmentTab";
import SubjectTab from "components/profileTab/SubjectTab";

import profileimage from "assets/images/profile.jpg";

function Profile() {
  const [value, setValue] = useState("general");

  return (
    <div className="flex flex-col gap-[1rem] px-[2rem] py-[1rem]">
      <span className="text-primary-teal font-bold text-[1.8rem]">
        Student Profile
      </span>
      <LabTabs value={value} onChange={(e, newValue) => setValue(newValue)} />

      <div className="flex gap-[2rem] items-center">
        <div className="flex items-center gap-[2rem] border-primary-teal border-2 shadow-lg p-4 rounded-[1rem] w-1/2">
          <div className="w-[10%] h-[10%]">
            <img src={profileimage} alt="profile" className="rounded-full" />
          </div>
          <div className="flex flex-col font-semibold text-primary-black">
            <div>
              Name: <span className="text-primary-teal">Karuna Singhal</span>
            </div>
            <div>
              Student Id :{" "}
              <span className="text-primary-teal">imt_2021049</span>
            </div>
            <div>
              Gender: <span className="text-primary-teal">Female</span>
            </div>
          </div>
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
