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
  personalDetails,
}) {
  return (
    <div className="Output">
      <div className="output-section" id="info-output" />
      <h1>{personalDetails.fullName}</h1>
      <div>
        <p>{personalDetails.email}</p>
        <p>{personalDetails.cell}</p>
      </div>
      <div>
        {personalDetails.linkedIn && (
          <p>
            <a href={personalDetails.linkedIn}>LinkedIn</a>
          </p>
        )}
        {personalDetails.website && (
          <p>
            <a href={personalDetails.website}>Website</a>
          </p>
        )}
      </div>
      <p>{personalDetails.bio}</p>
      <div className="output-section" id="work-output">
        <h2>Education</h2>
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
        <h2>Work Experience</h2>
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
