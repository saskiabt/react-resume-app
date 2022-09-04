import { React, useState } from "react";
import TextInput from "./TextInput";

function ContactInfo() {
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
        />
        <TextInput
          values={values.lastName}
          handleChange={handleChange}
          type="text"
          placeholder="Last Name:"
          name="lastName"
        />
      </div>
      <div className="cell-email">
        <TextInput
          values={values.email}
          handleChange={handleChange}
          type="email"
          placeholder="Email Address:"
          name="email"
        />
        <TextInput
          values={values.cell}
          handleChange={handleChange}
          type="tel"
          placeholder="Mobile Number:"
          name="cell"
        />
      </div>
      <div className="linkedin-website">
        <TextInput
          values={values.linkedIn}
          handleChange={handleChange}
          type="url"
          placeholder="LinkedIn Profile:"
          name="linkedIn"
        />
        <TextInput
          values={values.website}
          handleChange={handleChange}
          type="url"
          placeholder="Website:"
          name="website"
        />
      </div>
      <label htmlFor="bio">
        <textarea
          id="bio"
          name="bio"
          placeholder="Enter a short bio"
          value={values.bio}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default ContactInfo;
