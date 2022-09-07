import React, { useState } from "react";
import EdCard from "./EdCard";

function Education({ education, setEducation }) {
  const [{ edCardList }, setEdCardList] = useState({ edCardList: [] });

  const addEdCard = () => {
    edCardList.push(
      <EdCard
        key={edCardList.length}
        edCardList={edCardList}
        setEdCardList={setEdCardList}
        education={education}
        setEducation={setEducation}
      />,
    );
    setEdCardList({ edCardList: [...edCardList] });
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
