/* eslint-disable react/prop-types */
import React, { useState } from "react";
import TextArea from "../../TextArea";
import TextInput from "../../TextInput";

function WorkCard({ i, deleteCard }) {
  const initialWorkValues = {
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  const [work, setWork] = useState(initialWorkValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setWork({
      ...work,
      [name]: value,
    });
  };

  return (
    <div className="group" id={i} key={i}>
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
      <button type="button" className="delete" onClick={deleteCard}>
        Delete
      </button>
    </div>
  );
}

export default WorkCard;
