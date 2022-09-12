import React from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import "../../styles/output-styles/Output.css";
import EdOutPutCard from "./EdOutputCard";
import WorkOutputCard from "./WorkOutputCard";
import PersonalInfoOutput from "./PersonalInfoOutput";

function Output({
  educationOutput,
  setEducationOutput,
  workOutput,
  setWorkOutput,
  personalDetails,
}) {
  return (
    <div className="Output">
      <PersonalInfoOutput personalDetails={personalDetails} />
      <div className="output-section" id="ed-output">
        <h2 className="subheading">Education</h2>
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
      <div className="output-section" id="work-output">
        <h2 className="subheading">Work Experience</h2>
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
  personalDetails: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    cell: PropTypes.string,
    website: PropTypes.string,
    linkedIn: PropTypes.string,
    bio: PropTypes.string,
    test: PropTypes.string,
  }),
};

export default Output;
