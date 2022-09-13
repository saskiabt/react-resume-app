import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/output-styles/Card.css";
import TextArea from "../TextArea";
import TextInput from "../TextInput";

function EdOutPutCard({ i, card, educationOutput, setEducationOutput }) {
  const [isEditing, setIsEditing] = useState(false);
  const [cardState, setCardState] = useState({
    degree: "",
    school: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const editCard = () => {
    setIsEditing(true);
  };
  const deleteCard = (index, cardList) => {
    const newList = [...cardList];
    newList.splice(index, 1);
    setEducationOutput(newList);
  };

  const submitCard = (event) => {
    const newList = [...educationOutput];
    newList[i] = cardState;
    setEducationOutput(newList);
    setIsEditing(false);
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCardState({
      ...cardState,
      [name]: value,
    });
  };

  if (!isEditing) {
    return (
      <div className="ed-output-card" key={i}>
        <div className="title-date">
          <h3>{card.degree}</h3>
          <h5 className="date">
            {card.startDate} – {card.endDate}
          </h5>
        </div>
        <div>
          <h4>{card.school}</h4>
        </div>
        <p>{card.description}</p>
        <div className="card-buttons">
          <button
            type="button"
            className="delete"
            onClick={() => deleteCard(i, educationOutput)}
          >
            Delete
          </button>
          <button type="button" className="delete" id="edit" onClick={editCard}>
            Edit
          </button>
        </div>
      </div>
    );
  }
  return (
    <form className="group" onSubmit={submitCard}>
      <TextInput
        values={cardState.degree}
        handleChange={handleChange}
        type="text"
        placeholder="Degree or Certificate:"
        name="degree"
      />
      <TextInput
        values={cardState.school}
        handleChange={handleChange}
        type="text"
        placeholder="School:"
        name="school"
      />
      <TextInput
        values={cardState.startDate}
        handleChange={handleChange}
        type="string"
        placeholder="Start Date: MM/YYYY"
        name="startDate"
      />
      <TextInput
        values={cardState.endDate}
        handleChange={handleChange}
        type="string"
        placeholder="End Date: MM/YYYY"
        name="endDate"
      />
      <TextArea
        values={cardState.description}
        handleChange={handleChange}
        type="text"
        placeholder="Description"
        name="description"
        form="form"
      />
      <div className="form-button-container">
        <button type="submit" className="submit-edit">
          Submit
        </button>
      </div>
    </form>
  );
}

EdOutPutCard.propTypes = {
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
  card: PropTypes.shape({
    degree: PropTypes.string,
    school: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
  }),
  i: PropTypes.number,
};

export default EdOutPutCard;
