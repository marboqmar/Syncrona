import React, { useState } from "react";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={() => setIsOn(!isOn)} />
      <span className="slider" />
    </label>
  );
};

export default Switch;
