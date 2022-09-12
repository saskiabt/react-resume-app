import React from "react";
import PropTypes from "prop-types";
import formatNumber from "../../functions/formatPhoneNumber";
import openLink from "../../functions/openLink";

function PersonalInfoOutput({ personalDetails }) {
  return (
    <div className="output-section" id="info-output">
      <div className="name">
        <h1>{personalDetails.fullName}</h1>
      </div>
      <div className="details">
        <p>{personalDetails.email}</p>
        <p>{formatNumber(personalDetails.cell)}</p>

        {personalDetails.linkedIn && (
          <button
            onClick={() => openLink(personalDetails.linkedIn)}
            type="button"
          >
            LinkedIn
          </button>
        )}
        {personalDetails.website && (
          <button
            onClick={() => openLink(personalDetails.website)}
            type="button"
          >
            Website
          </button>
        )}
        <p>{personalDetails.bio}</p>
      </div>
    </div>
  );
}

PersonalInfoOutput.propTypes = {
  personalDetails: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    cell: PropTypes.string,
    website: PropTypes.string,
    linkedIn: PropTypes.string,
    bio: PropTypes.string,
    test: PropTypes.string,
  }),
};

export default PersonalInfoOutput;
