import { React, useState } from "react";

function ContactInfo() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    cell: "",
    website: "",
    linkedIn: "",
    bio: "",
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
    <div className="contact-info-wrapper">
      {" "}
      Contact Info:
      <div className="names">
        <label htmlFor="firstName">
          <input
            type="text"
            value={values.firstName}
            onChange={handleChange}
            placeholder="First Name"
            id="firstName"
            name="firstName"
          />
        </label>
        <label htmlFor="lastName">
          <input
            type="text"
            value={values.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            id="lastName"
            name="lastName"
          />
        </label>
      </div>
      <div className="cell-email">
        <label htmlFor="email">
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email Address:"
            id="email"
            name="email"
          />
        </label>
        <label htmlFor="cell">
          <input
            type="tel"
            value={values.cell}
            onChange={handleChange}
            placeholder="Mobile Number:"
            id="cell"
            name="cell"
          />
        </label>
      </div>
      <div className="linkedin-website">
        <label htmlFor="linkedIn">
          <input
            type="url"
            value={values.linkedIn}
            onChange={handleChange}
            placeholder="Linkedin Profile"
            id="linkedIn"
            name="linkedIn"
          />
        </label>
        <label htmlFor="website">
          <input
            type="url"
            value={values.website}
            onChange={handleChange}
            placeholder="Website"
            id="website"
            name="website"
          />
        </label>
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
