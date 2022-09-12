/* eslint-disable react/prop-types */
import React from "react";
import uuid from "react-uuid";
import EdOutPutCard from "./EdOutputCard";

function Output({ educationOutput, setEducationOutput }) {
  return (
    <div className="Output">
      This is the Output Div
      <div className="education-output">
        {educationOutput &&
          educationOutput.map((card, i) => {
            return (
              <EdOutPutCard
                card={card}
                key={uuid()}
                i={i}
                educationOutput={educationOutput}
                setEducationOutput={setEducationOutput}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Output;
