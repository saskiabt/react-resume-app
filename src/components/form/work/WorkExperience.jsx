import React, { useState } from "react";
import uuid from "react-uuid";
import WorkCard from "./WorkCard";

function WorkExperience() {
  const [workCardList, setWorkCardList] = useState([]);

  const addCard = () => {
    const card = {
      key: uuid(),
    };
    setWorkCardList(workCardList.concat(card));
  };

  const deleteCard = (i) => {
    const newList = [...workCardList];
    newList.splice(i, 1);
    console.log(newList);
    setWorkCardList(newList);
  };

  return (
    <section id="work-wrapper" className="form-wrapper">
      <h2>Work Experience</h2>
      {workCardList &&
        workCardList.map((card, i) => {
          return (
            <WorkCard
              card={card}
              key={card.key}
              i={i}
              workCardList={workCardList}
              setWorkCardList={setWorkCardList}
              deleteCard={deleteCard}
            />
          );
        })}
      <div className="button-container">
        <button type="button" onClick={addCard}>
          Add Work Experience
        </button>
      </div>
    </section>
  );
}

export default WorkExperience;
