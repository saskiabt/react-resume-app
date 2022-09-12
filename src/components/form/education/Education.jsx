import React, { useState } from "react";
import PropTypes from "prop-types";
import TextArea from "../../TextArea";
import TextInput from "../../TextInput";

function Education({ educationOutput, setEducationOutput }) {
  const initialEDValues = {
    degree: "",
    school: "",
    startDate: "",
    endDate: "",
    description: "",
    isShowing: false,
  };

  const [education, setEducation] = useState(initialEDValues);

  const toggleFormVisibility = () => {
    if (education.isShowing) {
      setEducation({ ...education, isShowing: false });
    } else {
      setEducation({ ...education, isShowing: true });
    }
  };

  const submitCard = (event) => {
    setEducationOutput(educationOutput.concat(education));
    console.log(educationOutput);
    setEducation(initialEDValues);
    toggleFormVisibility();
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setEducation({
      ...education,
      [name]: value,
    });
  };

  if (!education.isShowing) {
    return (
      <section id="ed-wrapper" className="form-wrapper">
        <h2>Education</h2>
        <div className="button-container">
          <button type="button" onClick={toggleFormVisibility}>
            Add Education
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="ed-wrapper" className="form-wrapper">
      <h2>Education</h2>
      <form className="group" onSubmit={submitCard}>
        <TextInput
          values={education.degree}
          handleChange={handleChange}
          type="text"
          placeholder="Degree or Certificate:"
          name="degree"
        />
        <TextInput
          values={education.school}
          handleChange={handleChange}
          type="text"
          placeholder="School:"
          name="school"
        />
        <TextInput
          values={education.startDate}
          handleChange={handleChange}
          type="date"
          placeholder="Start Date:"
          name="startDate"
        />
        <TextInput
          values={education.endDate}
          handleChange={handleChange}
          type="date"
          placeholder="End Date:"
          name="endDate"
        />
        <TextArea
          values={education.description}
          handleChange={handleChange}
          type="text"
          placeholder="Description"
          name="description"
          form="form"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

Education.propTypes = {
  educationOutput: PropTypes.arrayOf(
    PropTypes.shape({
      degree: PropTypes.string,
      school: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  setEducationOutput: PropTypes.func,
};

export default Education;
