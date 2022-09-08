import React, { useState } from "react";
import uuid from "react-uuid";
import EdCard from "./EdCard";

function Education({ education, setEducation }) {
  const [cardList, setCardList] = useState([]);

  const addCard = () => {
    const key = uuid();
    const edCard = (
      <EdCard
        education={education}
        setEducation={setEducation}
        key={key}
        id={key}
        cardList={cardList}
        setCardList={setCardList}
      />
    );
    setCardList(cardList.concat(edCard));
  };

  return (
    <section id="ed-wrapper" className="form-wrapper">
      <h2>Education</h2>
      {cardList}
      <div className="button-container">
        <button type="button" onClick={addCard}>
          Add Education
        </button>
      </div>
    </section>
  );
}

export default Education;
