/* eslint-disable react/prop-types */
import React from "react";

function Output({ educationOutput }) {
  return (
    <div className="Output">
      This is the Output Div
      <div className="education-output">
        {educationOutput &&
          educationOutput.map((card) => {
            return (
              <div className="ed-output-card">
                <h2>{card.degree}</h2>
                <h3>{card.school}</h3>
                <p>{card.startDate}</p>
                <p>{card.endDate}</p>
                <p>{card.description}</p>
                <div>
                  <button type="button" className="delete">
                    Delete
                  </button>
                  <button type="button" className="edit">
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Output;
