/* eslint-disable react/jsx-filename-extension */
import "./App.css";
import React, { useRef, useState } from "react";
import Form from "./components/form/Form";
import Output from "./components/output/Output";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const cellRef = useRef(null);
  const linkedInRef = useRef(null);
  const websiteRef = useRef(null);
  const bioRef = useRef(null);

  const initialPDValues = {
    firstName: "",
    lastName: "",
    email: "",
    cell: "",
    website: "",
    linkedIn: "",
    bio: "",
    test: "test",
  };

  const [personalDetails, setPersonalDetails] = useState(initialPDValues);

  const initialEDValues = {
    degree: "",
    school: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  const [education, setEducation] = useState(initialEDValues);

  return (
    <div className="App">
      <Form
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
        emailRef={emailRef}
        cellRef={cellRef}
        linkedInRef={linkedInRef}
        websiteRef={websiteRef}
        bioRef={bioRef}
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        education={education}
        setEducation={setEducation}
      />
      <Output
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
        emailRef={emailRef}
        cellRef={cellRef}
        linkedInRef={linkedInRef}
        websiteRef={websiteRef}
        bioRef={bioRef}
      />
    </div>
  );
}

export default App;
