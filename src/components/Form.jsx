import React from "react";
import ContactInfo from "./ContactInfo";
import WorkExperience from "./WorkExperience";
import "../styles/Form.css";
import Education from "./Education";
// import Skills from "./Skills";

function Form() {
  return (
    <div className="Form">
      <form id="form">
        <ContactInfo />
        <WorkExperience />
        <Education />
        {/* <Skills /> */}
      </form>
    </div>
  );
}

export default Form;
