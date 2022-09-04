/* eslint-disable react/prop-types */
import React, { useState } from "react";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

function EdCard({ deleteCard }) {
  const initialValues = {
    degree: "",
    school: "",
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
        values={values.degree}
        handleChange={handleChange}
        type="text"
        placeholder="Degree or Certificate:"
        name="degree"
      />
      <TextInput
        values={values.school}
        handleChange={handleChange}
        type="text"
        placeholder="School:"
        name="school"
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

export default EdCard;
