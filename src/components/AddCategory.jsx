import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState([""]);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return ;

    setInputValue('')
    onNewCategory(inputValue.trim())
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Search your gif"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};
