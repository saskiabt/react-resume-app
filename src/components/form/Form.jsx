/* eslint-disable react/prop-types */
import React from "react";
import ContactInfo from "./contactInfo/ContactInfo";
import WorkExperience from "./work/WorkExperience";
import "../../styles/Form.css";
import Education from "./education/Education";
// import Skills from "./Skills";

function Form() {
  return (
    <div className="Form">
      <form id="form">
        <ContactInfo />
        <WorkExperience />
        <Education />
      </form>
    </div>
  );
}

export default Form;
