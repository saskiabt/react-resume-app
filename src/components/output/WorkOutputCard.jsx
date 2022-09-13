import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/output-styles/Card.css";
import TextInput from "../TextInput";
import TextArea from "../TextArea";

function WorkOutputCard({ i, card, workOutput, setWorkOutput }) {
  const [isEditing, setIsEditing] = useState(false);
  const [cardState, setCardState] = useState({
    position: "",
    startDate: "",
    endDate: "",
    company: "",
    description: "",
  });

  const editCard = () => {
    setIsEditing(true);
  };

  const deleteCard = (index, cardList) => {
    const newList = [...cardList];
    newList.splice(index, 1);
    setWorkOutput(newList);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCardState({
      ...cardState,
      [name]: value,
    });
  };

  const submitCard = (event) => {
    const newList = [...workOutput];
    newList[i] = cardState;
    setWorkOutput(newList);
    setIsEditing(false);
    event.preventDefault();
  };

  if (!isEditing) {
    return (
      <div className="work-output-card" key={i}>
        <div className="title-date">
          <h3>{card.position}</h3>
          <h5 className="date">
            {card.startDate} – {card.endDate}
          </h5>
        </div>
        <div>
          <h4>{card.company}</h4>
        </div>
        <p>{card.description}</p>
        <div className="card-buttons">
          <button
            type="button"
            className="delete"
            onClick={() => deleteCard(i, workOutput)}
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
        values={cardState.position}
        handleChange={handleChange}
        type="text"
        placeholder="Position name..."
        name="position"
      />
      <TextInput
        values={cardState.company}
        handleChange={handleChange}
        type="text"
        placeholder="Company name..."
        name="company"
      />
      <TextInput
        values={cardState.startDate}
        handleChange={handleChange}
        type="string"
        placeholder="Start Date: MM/YYYY"
        name="startDate"
        label="Start Date:"
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
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

WorkOutputCard.propTypes = {
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
  card: PropTypes.shape({
    position: PropTypes.string,
    company: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
    isShowing: PropTypes.bool,
  }),
  i: PropTypes.number,
};

export default WorkOutputCard;
