import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../componentes/AddCategory";

describe("Pruebas en el componente AddCategory", () => {
  test("Debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    //    screen.debug();
    const input = screen.getByRole("textbox"); // el input se busca por 'textbox'
    fireEvent.input(input);
  });
});
