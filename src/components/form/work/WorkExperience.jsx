import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../../TextInput";
import TextArea from "../../TextArea";

function WorkExperience({ workOutput, setWorkOutput }) {
  const initialWorkValues = {
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    isShowing: false,
  };

  const [work, setWork] = useState(initialWorkValues);

  const toggleFormVisibility = () => {
    if (work.isShowing) {
      setWork({ ...work, isShowing: false });
    } else {
      setWork({ ...work, isShowing: true });
    }
  };

  const submitCard = (event) => {
    setWorkOutput(workOutput.concat(work));
    console.log(workOutput);
    setWork(initialWorkValues);
    toggleFormVisibility();
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setWork({
      ...work,
      [name]: value,
    });
  };

  if (!work.isShowing) {
    return (
      <section id="ed-wrapper" className="form-wrapper">
        <div className="button-container">
          <button
            type="button"
            onClick={toggleFormVisibility}
            className="submit-button"
          >
            Add Work
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="work-wrapper" className="form-wrapper">
      <div className="form-header-container">
        <button type="button" onClick={toggleFormVisibility}>
          X
        </button>
        <h2>Work Experience</h2>
      </div>
      <form className="group" onSubmit={submitCard}>
        <TextInput
          values={work.position}
          handleChange={handleChange}
          type="text"
          placeholder="Position name..."
          name="position"
        />
        <TextInput
          values={work.company}
          handleChange={handleChange}
          type="text"
          placeholder="Company name..."
          name="company"
        />
        <TextInput
          values={work.startDate}
          handleChange={handleChange}
          type="string"
          placeholder="Start Date: MM/YYYY"
          name="startDate"
          label="Start Date:"
        />
        <TextInput
          values={work.endDate}
          handleChange={handleChange}
          type="string"
          placeholder="End Date: MM/YYYY"
          name="endDate"
        />
        <TextArea
          values={work.description}
          handleChange={handleChange}
          type="text"
          placeholder="Description"
          name="description"
          form="form"
        />
        <div className="form-button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

WorkExperience.propTypes = {
  workOutput: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.string,
      company: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      description: PropTypes.string,
      isShowing: PropTypes.bool,
    }),
  ),
  setWorkOutput: PropTypes.func,
};

export default WorkExperience;
