import React from "react";
import PropTypes from "prop-types";
import ContactInfo from "./contactInfo/ContactInfo";
import "../../styles/Form.css";
import Education from "./education/Education";
import WorkExperience from "./work/WorkExperience";

function Form({
  personalDetails,
  setPersonalDetails,
  educationOutput,
  setEducationOutput,
  workOutput,
  setWorkOutput,
}) {
  return (
    <div className="Form">
      <ContactInfo
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <Education
        educationOutput={educationOutput}
        setEducationOutput={setEducationOutput}
      />
      <WorkExperience workOutput={workOutput} setWorkOutput={setWorkOutput} />
    </div>
  );
}

Form.propTypes = {
  personalDetails: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    cell: PropTypes.string,
    website: PropTypes.string,
    linkedIn: PropTypes.string,
    bio: PropTypes.string,
    test: PropTypes.string,
  }),
  setPersonalDetails: PropTypes.func,
  education: PropTypes.shape({
    degree: PropTypes.string,
    school: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
  }),
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

export default Form;
