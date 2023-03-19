import React, { useState } from "react";


function TextInput(props) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleTextChange}
      className="input"
    />
  );
}

export default TextInput;