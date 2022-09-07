import React, { useState } from "react";
import EdCard from "./EdCard";

function Education({ education, setEducation }) {
  const deleteCard = (event) => {
    const { target } = event;
    const { key } = target;
    setEdCardList(edCardList.splice({ key }, 1));
  };

  const [edCardList, setEdCardList] = useState([
    <EdCard
      key={0}
      deleteCard={deleteCard}
      education={education}
      setEducation={setEducation}
    />,
  ]);

  const addEdCard = () => {
    setEdCardList(
      edCardList.concat(
        <EdCard
          key={edCardList.length}
          deleteCard={deleteCard}
          education={education}
          setEducation={setEducation}
        />,
      ),
    );
  };

  return (
    <div id="ed-wrapper" className="form-wrapper">
      <h2>Education</h2>
      {edCardList}
      <div className="button-container">
        <button type="button" onClick={addEdCard}>
          Add Education
        </button>
      </div>
    </div>
  );
}

export default Education;
