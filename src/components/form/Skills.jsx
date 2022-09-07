import React, { useState } from "react";
import TextArea from "../TextArea";

function Skills() {
  const [skills, setSkills] = useState({ text: "" });

  const handleChange = (event) => {
    setSkills(event.target.value);
  };

  return (
    <div>
      <TextArea
        value={skills.text}
        handleChange={handleChange}
        placeholder="Skills:"
        form="form"
        name="skills"
      />
    </div>
  );
}

export default Skills;
