import React, { memo } from "react";

const ButtonOnOff = ({
  label,
  setIsOn,
  isOn,
  Icons,
  onClick,
}) => {
  const handleToggle = () => {
    
  };
  return (
    
    <div className="flex justify-center items-center gap-3 py-2 border-b-2 border-dashed w-full">
      <label id={label} className="font-medium text-green-400 text-xl flex gap-2 items-center" ><span>{Icons && <Icons />}</span> {label}</label>
      {/* <button
        id={label}
        type="button"
        className={`py-2 px-4 ${textColor} font-semibold text-sm ${border} ${bgColor} ${
          fullWidth && "w-full"
        } outline-none rounded-md flex items-center justify-center gap-1 `}
        onClick={onClick}
      >
        <span>{Icons && <Icons />}</span>
        <span>{active ? "ON": "OFF"}</span>
      </button> */}
       <button
      className={`relative w-14 h-8 rounded-full transition-colors focus:outline-none ${
        isOn ? 'bg-green-500' : 'bg-gray-300'
      }`}
      onClick={onClick}
    >
      <span
        className={`absolute left-0 top-0 w-8 h-8 rounded-full transition-transform ${
          isOn ? 'translate-x-full bg-white' : 'bg-gray-400'
        }`}
      ></span>
    </button>
    </div>
  );
};

export default memo(ButtonOnOff);
