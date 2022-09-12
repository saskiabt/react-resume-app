import { React } from "react";
import PropTypes from "prop-types";
import TextArea from "../../TextArea";
import TextInput from "../../TextInput";

function ContactInfo(props) {
  const {
    firstNameRef,
    lastNameRef,
    emailRef,
    cellRef,
    linkedInRef,
    websiteRef,
    bioRef,
    personalDetails,
    setPersonalDetails,
  } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setPersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };

  return (
    <section id="contact-info-wrapper" className="form-wrapper">
      <h2>Personal Info</h2>
      <form className="group">
        <section className="names">
          <TextInput
            values={personalDetails.firstName}
            handleChange={handleChange}
            type="text"
            placeholder="First Name"
            name="firstName"
            ref={firstNameRef}
          />
          <TextInput
            values={personalDetails.lastName}
            handleChange={handleChange}
            type="text"
            placeholder="Last Name:"
            name="lastName"
            ref={lastNameRef}
          />
        </section>
        <section className="cell-email">
          <TextInput
            values={personalDetails.email}
            handleChange={handleChange}
            type="email"
            placeholder="Email Address:"
            name="email"
            ref={emailRef}
          />
          <TextInput
            values={personalDetails.cell}
            handleChange={handleChange}
            type="tel"
            placeholder="Mobile Number:"
            name="cell"
            ref={cellRef}
          />
        </section>
        <section className="linkedin-website">
          <TextInput
            values={personalDetails.linkedIn}
            handleChange={handleChange}
            type="url"
            placeholder="LinkedIn Profile:"
            name="linkedIn"
            ref={linkedInRef}
          />
          <TextInput
            values={personalDetails.website}
            handleChange={handleChange}
            type="url"
            placeholder="Website:"
            name="website"
            ref={websiteRef}
          />
        </section>
        <TextArea
          values={personalDetails.bio}
          handleChange={handleChange}
          placeholder="Enter a short bio"
          ref={bioRef}
          name="bio"
        />
      </form>
    </section>
  );
}

ContactInfo.propTypes = {
  personalDetails: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    cell: PropTypes.string,
    website: PropTypes.string,
    linkedIn: PropTypes.string,
    bio: PropTypes.string,
    test: PropTypes.string,
  }),
  setPersonalDetails: PropTypes.func,
  firstNameRef: PropTypes.elementType,
  lastNameRef: PropTypes.elementType,
  emailRef: PropTypes.elementType,
  cellRef: PropTypes.elementType,
  linkedInRef: PropTypes.elementType,
  websiteRef: PropTypes.elementType,
  bioRef: PropTypes.elementType,
};

export default ContactInfo;
