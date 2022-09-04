import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = ({ target: { value } }) => {
    setInputValue(value);
  };

  const onSubmit = (event) => {
    //console.log("Entra en el onSubmit desde el test");
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    //console.log("VALORES DE MÁS DE 1 CARÁCTER");
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit} aria-label="formElement">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        autoFocus
        onChange={onChangeHandler}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
