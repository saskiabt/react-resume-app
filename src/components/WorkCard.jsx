/* eslint-disable react/prop-types */
import React, { useState } from "react";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

function WorkCard({ deleteCard }) {
  const initialValues = {
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
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
    <div>
      <TextInput
        values={values.position}
        handleChange={handleChange}
        type="text"
        placeholder="Position name..."
        name="position"
      />
      <TextInput
        values={values.company}
        handleChange={handleChange}
        type="text"
        placeholder="Company name..."
        name="company"
      />
      <TextInput
        values={values.startDate}
        handleChange={handleChange}
        type="date"
        placeholder="Start Date:"
        name="startDate"
      />
      <TextInput
        values={values.endDate}
        handleChange={handleChange}
        type="date"
        placeholder="End Date:"
        name="endDate"
      />
      <TextArea
        values={values.description}
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
