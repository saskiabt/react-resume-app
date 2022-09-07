/* eslint-disable react/jsx-filename-extension */
import "./App.css";
import React, { useRef } from "react";
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
