/* eslint-disable react/prop-types */
import React from "react";
import TextArea from "../../TextArea";
import TextInput from "../../TextInput";

function EdCard({ education, setEducation, id, cardList, setCardList }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setEducation({
      ...education,
      [name]: value,
    });
  };

  const deleteCard = () => {
    const newList = [...cardList];
    newList.splice(id + 1, 1);
    console.log(newList);
    setCardList(newList);
  };

  return (
    <div className="group">
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
      <button type="button" className="delete" onClick={deleteCard}>
        Delete
      </button>
    </div>
  );
}

export default EdCard;
