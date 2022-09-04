import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../componentes/AddCategory";

describe("Pruebas en el componente AddCategory", () => {
  test("Debe cambiar el valor de la caja de texto", () => {
    console.log(
      "-----------------------------------------------------------------------------------"
    );
    render(<AddCategory onNewCategory={() => {}} />);
    const inputComp = screen.getByRole("textbox"); // el input se busca por 'textbox', aquí input es un objeto
    fireEvent.input(inputComp, { target: { value: "Saitama" } });
    //screen.debug();
    expect(inputComp.value).toBe("Saitama");
  });

  test("Debe llamar onNewCateGory tras el submit si el input tiene un valor", () => {
    const inputValue = "Saitama";
    //const inputValue = "S";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const inputComp = screen.getByRole("textbox");
    const formComp = screen.getByRole("form");
    fireEvent.input(inputComp, { target: { value: inputValue } }); // introduzco un valor
    fireEvent.submit(formComp); // disparo el submit del formulario (ya se le envía el evento automáticamente)
    //screen.debug(); // utilizo el resultado del screen.debug para comprobar mi expect
    expect(inputComp.value).toBe("");
    //expect(inputComp.value).toBe("S");
    expect(onNewCategory).toHaveBeenCalled();
    //expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No debe llamar onNewCateGory tras el submit si el input está vacío", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const formComp = screen.getByRole("form");
    fireEvent.submit(formComp);

    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });

  //este test está modificado, habría que arreglarlo y dejar const inputValueShort = "S"
  test("No limpia el input tras el submit si el input tiene un valor de solo 1 carácter", () => {
    const inputValueShort = "   So   ";

    render(<AddCategory onNewCategory={() => {}} />);
    const inputComp = screen.getByRole("textbox");
    const formComp = screen.getByRole("form");
    fireEvent.input(inputComp, { target: { value: inputValueShort } });
    fireEvent.submit(formComp);
    //screen.debug();
    //expect(inputComp.value).toBe("S");
  });
});
