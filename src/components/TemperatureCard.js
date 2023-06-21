import React from "react";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TemperatureGauge = ({ value, maxValue, label ,symbol}) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="w-[200px]">
      <div style={{ width: "200px" }}>
        <CircularProgressbar
          value={percentage}
          text={`${value}${symbol}`}
          styles={buildStyles({
            textSize: "16px",
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: "#f88",
            trailColor: "#d6d6d6",
          })}
        />
      </div>
      <div className="w-full flex justify-center items-center font-semibold font-xl text-orange-400" >{label}</div>
    </div>
  );
};

export default TemperatureGauge;