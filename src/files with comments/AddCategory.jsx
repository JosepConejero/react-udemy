import { useState } from "react";

/* export const AddCategory = ({ categories, setCategories }) => { */
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  /*   const onChangeHandler = (event) => {
    // console.log(event); // extraería información del evento a la hora de desestructurar
    // console.log(event.target.value); //muestra el valor de lo que hay en el input a cada pulsación de teclas
    setInputValue(event.target.value);
  }; */
  // como lo que le pasamos es event, que es un objeto, podemos extraer de él target y de target, value
  const onChangeHandler = ({ target: { value } }) => {
    setInputValue(value);
    //console.log(value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //para evitar que se refresque la pantalla por el comportamiento por defecto del formulario al pulsar enter
    //console.log(inputValue);
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    //setCategories((categories) => [inputValue, ...categories]); // aprovecho que a setCategories, react siempre le envía categories (aquí uso el mismo nombre pero podría poner otro)
    //setCategories((categories) => [...categories, inputValue]);
    //setCategories([...categories, inputValue]); esta sería una forma de hacerlo
    setInputValue(""); //aquí se limpia el input
  };

  return (
    /*  <form onSubmit={(event)=>onSubmit(event)}> */
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        autoFocus
        //onChange={(event) => onChangeHandler(event)} //el evento es de tipo HTMLInputElement
        onChange={onChangeHandler} // onChangeHandler sustituye a (event) => onChangeHandler(event), es lo mismo
      />
    </form>
  );
};
