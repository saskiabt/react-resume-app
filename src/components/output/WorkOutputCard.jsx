import React from "react";
import PropTypes from "prop-types";

function WorkOutputCard({ i, card, workOutput, setWorkOutput }) {
  const deleteCard = (index, cardList) => {
    const newList = [...cardList];
    newList.splice(index, 1);
    setWorkOutput(newList);
  };
  return (
    <div className="ed-output-card" key={i}>
      <h2>{card.position}</h2>
      <h3>{card.company}</h3>
      <p>{card.startDate}</p>
      <p>{card.endDate}</p>
      <p>{card.description}</p>
      <div>
        <button
          type="button"
          className="delete"
          onClick={() => deleteCard(i, workOutput)}
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
