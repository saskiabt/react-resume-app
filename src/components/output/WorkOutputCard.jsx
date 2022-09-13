import React from "react";
import PropTypes from "prop-types";
import "../../styles/output-styles/Card.css";

function WorkOutputCard({ i, card, workOutput, setWorkOutput }) {
  const deleteCard = (index, cardList) => {
    const newList = [...cardList];
    newList.splice(index, 1);
    setWorkOutput(newList);
  };
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
        {/* <button type="button" className="edit">
          Edit
        </button> */}
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
