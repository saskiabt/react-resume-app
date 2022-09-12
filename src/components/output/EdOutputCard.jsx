import React from "react";
import PropTypes from "prop-types";

function EdOutPutCard({ i, card, educationOutput, setEducationOutput }) {
  const deleteCard = (index, cardList) => {
    const newList = [...cardList];
    newList.splice(index, 1);
    setEducationOutput(newList);
  };

  return (
    <div className="ed-output-card" key={i}>
      <h2>{card.degree}</h2>
      <h3>{card.school}</h3>
      <h4>
        {card.startDate} – {card.endDate}
      </h4>
      <p>{card.description}</p>
      <div>
        <button
          type="button"
          className="delete"
          onClick={() => deleteCard(i, educationOutput)}
        >
          Delete
        </button>
        <button type="button" className="edit">
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
