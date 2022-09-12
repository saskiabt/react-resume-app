import React from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import EdOutPutCard from "./EdOutputCard";
import WorkOutputCard from "./WorkOutputCard";

function Output({
  educationOutput,
  setEducationOutput,
  workOutput,
  setWorkOutput,
}) {
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
      <div className="work-output">
        {workOutput &&
          workOutput.map((card, i) => {
            return (
              <WorkOutputCard
                card={card}
                key={uuid()}
                i={i}
                workOutput={workOutput}
                setWorkOutput={setWorkOutput}
              />
            );
          })}
      </div>
    </div>
  );
}

Output.propTypes = {
  educationOutput: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string,
      school: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  setEducationOutput: PropTypes.func,
  workOutput: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string,
      company: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      description: PropTypes.string,
      isShowing: PropTypes.bool,
    }),
  ),
  setWorkOutput: PropTypes.func,
};

export default Output;
