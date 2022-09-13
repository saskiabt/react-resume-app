import React from "react";
import PropTypes from "prop-types";
import "../../styles/output-styles/Card.css";

function EdOutPutCard({ i, card, educationOutput, setEducationOutput }) {
  const deleteCard = (index, cardList) => {
    const newList = [...cardList];
    newList.splice(index, 1);
    setEducationOutput(newList);
  };

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
        <button type="button" className="delete" id="edit">
          Edit
        </button>
      </div>
    </div>
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
