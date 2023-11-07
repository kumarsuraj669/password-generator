import React, { useState } from "react";
import Slider from "./Slider";
import Checkbox from "./Checkbox";
import Indicator from "./Indicator";
import Generate from "./Generate";

function InteractiveWindow(props) {
  const [length, setLength] = useState(6)
  let [checks, setChecks] = useState([])

  return (
    <div className="custom-shadow flex flex-col justify-between items-center p-5 custom-bg rounded-2xl w-full space-y-6 py-10">

      {/* Password Length Display */}
      <div className="flex justify-between w-full items-center  text-2xl">
        <span className="text-white">Password Length</span>
        <span className="text-yellow-400">{length}</span>
      </div>

      {/* Range Slider */}
      <Slider length={length} setLength={setLength} />

      {/* Checkboxes */}
      <Checkbox checks={checks} setChecks={setChecks}/>

      {/* Strength Indicator */}
      <Indicator length={length} />

      {/* Generate Password Button */}
      <Generate checks={checks} passLen={length} setPassword={props.setPassword}/>

    </div>
  );
}

export default InteractiveWindow;
