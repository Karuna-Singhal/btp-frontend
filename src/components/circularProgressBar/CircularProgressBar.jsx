import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgressBar({ grade, gradePercentage, color }) {
  return (
    <div className="w-[10rem] h-[10rem]">
      <CircularProgressbar
        value={gradePercentage}
        text={`${grade}`}
        styles={{
          text: {
            fill: color,
            fontSize: "3rem",
          },
          path: {
            stroke: color,
          },
        }}
      />
    </div>
  );
}

export default CircularProgressBar;
