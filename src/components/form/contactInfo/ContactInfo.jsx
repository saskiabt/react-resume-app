/* eslint-disable react/prop-types */
import { React, useState } from "react";
import TextArea from "../../TextArea";
import TextInput from "../../TextInput";

function ContactInfo({
  firstNameRef,
  lastNameRef,
  emailRef,
  cellRef,
  linkedInRef,
  websiteRef,
  bioRef,
}) {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    cell: "",
    website: "",
    linkedIn: "",
    bio: "",
    test: "test",
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div id="contact-info-wrapper" className="form-wrapper">
      <h2>Personal Info</h2>
      <div className="names">
        <TextInput
          values={values.firstName}
          handleChange={handleChange}
          type="text"
          placeholder="First Name"
          name="firstName"
          refe={firstNameRef}
        />
        <TextInput
          values={values.lastName}
          handleChange={handleChange}
          type="text"
          placeholder="Last Name:"
          name="lastName"
          ref={lastNameRef}
        />
      </div>
      <div className="cell-email">
        <TextInput
          values={values.email}
          handleChange={handleChange}
          type="email"
          placeholder="Email Address:"
          name="email"
          ref={emailRef}
        />
        <TextInput
          values={values.cell}
          handleChange={handleChange}
          type="tel"
          placeholder="Mobile Number:"
          name="cell"
          ref={cellRef}
        />
      </div>
      <div className="linkedin-website">
        <TextInput
          values={values.linkedIn}
          handleChange={handleChange}
          type="url"
          placeholder="LinkedIn Profile:"
          name="linkedIn"
          ref={linkedInRef}
        />
        <TextInput
          values={values.website}
          handleChange={handleChange}
          type="url"
          placeholder="Website:"
          name="website"
          ref={websiteRef}
        />
      </div>
      <TextArea
        values={values.bio}
        handleChange={handleChange}
        placeholder="Enter a short bio"
        ref={bioRef}
        name="bio"
      />
    </div>
  );
}

export default ContactInfo;
