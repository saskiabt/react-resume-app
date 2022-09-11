import React, { useState } from "react";
import uuid from "react-uuid";
import EdCard from "./EdCard";

function Education() {
  const [cardList, setCardList] = useState([]);

  const addCard = () => {
    const edCard = {
      key: uuid(),
    };
    setCardList(cardList.concat(edCard));
  };

  const deleteCard = (i) => {
    const newList = [...cardList];
    newList.splice(i, 1);
    console.log(newList);
    setCardList(newList);
  };

  return (
    <section id="ed-wrapper" className="form-wrapper">
      <h2>Education</h2>
      {cardList &&
        cardList.map((card, i) => {
          return (
            <EdCard
              card={card}
              key={card.key}
              i={i}
              cardList={cardList}
              setCardList={setCardList}
              deleteCard={deleteCard}
            />
          );
        })}
      <div className="button-container">
        <button type="button" onClick={addCard}>
          Add Education
        </button>
      </div>
    </section>
  );
}

export default Education;
