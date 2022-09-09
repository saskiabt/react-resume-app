import React, { useState } from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import EdCard from "./EdCard";

function Education({ education, setEducation }) {
  const [cardList, setCardList] = useState([]);

  const addCard = () => {
    const edCard = {
      key: uuid(),
    };
    setCardList(cardList.concat(edCard));
  };

  return (
    <section id="ed-wrapper" className="form-wrapper">
      <h2>Education</h2>
      {cardList.map((card) => (
        <EdCard
          key={card.key}
          id={card.key}
          education={education}
          setEducation={setEducation}
          cardList={cardList}
          setCardList={setCardList}
        />
      ))}
      <div className="button-container">
        <button type="button" onClick={addCard}>
          Add Education
        </button>
      </div>
    </section>
  );
}

Education.propTypes = {
  education: PropTypes.shape({
    degree: PropTypes.string,
    school: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
  }),
  setEducation: PropTypes.func,
};

export default Education;
