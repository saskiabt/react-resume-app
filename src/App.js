/* eslint-disable react/jsx-filename-extension */
import "./App.css";
import React, { useRef, useState } from "react";
import Form from "./components/form/Form";
import Output from "./components/output/Output";

function App() {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const cellRef = useRef(null);
  const linkedInRef = useRef(null);
  const websiteRef = useRef(null);
  const bioRef = useRef(null);

  const initialPDValues = {
    fullName: "",
    email: "",
    cell: "",
    website: "",
    linkedIn: "",
    bio: "",
    test: "test",
  };

  const [personalDetails, setPersonalDetails] = useState(initialPDValues);

  const [educationOutput, setEducationOutput] = useState([]);
  const [workOutput, setWorkOutput] = useState([]);

  return (
    <div className="App">
      <div className="app-title">Resume Builder</div>
      <Form
        fullNameRef={fullNameRef}
        emailRef={emailRef}
        cellRef={cellRef}
        linkedInRef={linkedInRef}
        websiteRef={websiteRef}
        bioRef={bioRef}
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        educationOutput={educationOutput}
        setEducationOutput={setEducationOutput}
        workOutput={workOutput}
        setWorkOutput={setWorkOutput}
      />
      <Output
        fullNameRef={fullNameRef}
        emailRef={emailRef}
        cellRef={cellRef}
        linkedInRef={linkedInRef}
        websiteRef={websiteRef}
        bioRef={bioRef}
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        educationOutput={educationOutput}
        setEducationOutput={setEducationOutput}
        workOutput={workOutput}
        setWorkOutput={setWorkOutput}
      />
    </div>
  );
}

export default App;
