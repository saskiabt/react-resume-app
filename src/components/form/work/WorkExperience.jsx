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
        <h2>Work Experience</h2>
        <div className="button-container">
          <button type="button" onClick={toggleFormVisibility}>
            Add Work
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="work-wrapper" className="form-wrapper">
      <h2>Work Experience</h2>
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
          type="date"
          placeholder="Start Date:"
          name="startDate"
        />
        <TextInput
          values={work.endDate}
          handleChange={handleChange}
          type="date"
          placeholder="End Date:"
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
        <button type="submit">Submit</button>
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
