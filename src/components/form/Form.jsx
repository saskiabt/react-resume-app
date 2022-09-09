import React from "react";
import PropTypes from "prop-types";
import ContactInfo from "./contactInfo/ContactInfo";
import "../../styles/Form.css";
import Education from "./education/Education";

function Form({
  personalDetails,
  setPersonalDetails,
  education,
  setEducation,
}) {
  return (
    <div className="Form">
      <form id="form">
        <ContactInfo
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        {/* <WorkExperience /> */}
        <Education education={education} setEducation={setEducation} />
      </form>
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
  setEducation: PropTypes.func,
};

export default Form;
