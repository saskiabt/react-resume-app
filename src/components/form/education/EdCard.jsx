import React from "react";
import PropTypes from "prop-types";
import TextArea from "../../TextArea";
import TextInput from "../../TextInput";

function EdCard({ education, setEducation, id, cardList, setCardList }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setEducation({
      ...education,
      [name]: value,
    });
  };

  const deleteCard = (index) => {
    const indexPosition = cardList.indexOf(index);
    console.log(indexPosition);
    const newList = [...cardList];
    newList.splice(indexPosition, 1);
    setCardList(newList);
  };

  return (
    <div className="group" id={id}>
      <TextInput
        values={education.degree}
        handleChange={handleChange}
        type="text"
        placeholder="Degree or Certificate:"
        name="degree"
      />
      <TextInput
        values={education.school}
        handleChange={handleChange}
        type="text"
        placeholder="School:"
        name="school"
      />
      <TextInput
        values={education.startDate}
        handleChange={handleChange}
        type="date"
        placeholder="Start Date:"
        name="startDate"
      />
      <TextInput
        values={education.endDate}
        handleChange={handleChange}
        type="date"
        placeholder="End Date:"
        name="endDate"
      />
      <TextArea
        values={education.description}
        handleChange={handleChange}
        type="text"
        placeholder="Description"
        name="description"
        form="form"
      />
      <button type="button" className="delete" onClick={() => deleteCard(id)}>
        Delete
      </button>
    </div>
  );
}

EdCard.propTypes = {
  education: PropTypes.shape({
    degree: PropTypes.string,
    school: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
  }),
  setEducation: PropTypes.func,
  id: PropTypes.string,
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
    }),
  ),
  setCardList: PropTypes.func,
};

export default EdCard;
