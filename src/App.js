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
    fullName: "Saskia Binder",
    email: "xxxxx@xxx.com",
    cell: "xxx-xxx-xxxx",
    website: "",
    linkedIn: "",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor elit sed vulputate mi sit amet mauris. Pharetra et ultrices neque ornare aenean euismod elementum. Consectetur libero id faucibus nisl tincidunt eget nullam non.",
    test: "test",
  };

  const [personalDetails, setPersonalDetails] = useState(initialPDValues);

  const [educationOutput, setEducationOutput] = useState([
    {
      degree: "B.A. , Government ",
      school: "University of Texas",
      startDate: "",
      endDate: "2020",
      description: "Minor: Business Administration",
      isShowing: false,
    },
  ]);
  const [workOutput, setWorkOutput] = useState([
    {
      position: "Web Developer",
      company: "",
      startDate: "12/2021",
      endDate: "Present",
      description: "React & Javascript Developer",
      isShowing: false,
    },
  ]);

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
