/* eslint-disable react/prop-types */
import React from "react";
import ContactInfo from "./contactInfo/ContactInfo";
import "../../styles/Form.css";
import Education from "./education/Education";
// import Skills from "./Skills";

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

export default Form;
