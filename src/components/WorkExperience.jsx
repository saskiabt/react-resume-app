import React, { useState } from "react";
import WorkCard from "./WorkCard";

function WorkExperience() {
  const deleteCard = (event) => {
    const { target } = event;
    const { key } = target;
    setWorkCardList(workCardList.splice({ key }, 1));
  };

  const [workCardList, setWorkCardList] = useState([
    <WorkCard key={0} deleteCard={deleteCard} />,
  ]);

  const addWorkCard = () => {
    setWorkCardList(
      workCardList.concat(
        <WorkCard key={workCardList.length} deleteCard={deleteCard} />,
      ),
    );
  };

  return (
    <div id="work-experience-wrapper" className="form-wrapper">
      <h2>Work Experience</h2>
      {workCardList}
      <div className="button-container">
        <button type="button" onClick={addWorkCard}>
          Add Work Experience
        </button>
      </div>
    </div>
  );
}

export default WorkExperience;
