/* eslint-disable testing-library/no-debugging-utils */
import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";
//import { useState } from "react";

//jest.mock("react");

describe("Pruebas en el componente <GifExpertApp/>", () => {
  test("Deberá hacer match con el snapshot", () => {
    console.log(
      "==============================================================="
    );
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test("Deberá tener el encabezado GifExpertApp", () => {
    render(<GifExpertApp />);
    expect(screen.getAllByRole("heading", { level: 1 }).length).toBe(1);
    expect(screen.getByText("GifExpertApp")).toBeTruthy();
  });

  test("Deberá añadir una categoría", () => {
    const newCategory = "One Punch";
    const initialCategory = "dragon ball";

    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: newCategory } });
    fireEvent.submit(form);

    expect(screen.getAllByText(/dragon ball/i).length).toBe(1);
    expect(screen.getByText(initialCategory).innerHTML).toBe("dragon ball");
    expect(screen.getByText(initialCategory)).not.toBeNull();
    // expect(screen.getByText("dragon ball")).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);

    expect(screen.getAllByRole("heading", { level: 3 })[0].innerHTML).toBe(
      newCategory
    );
    expect(screen.getAllByRole("heading", { level: 3 })[1].innerHTML).toBe(
      initialCategory
    );
  });

  test("No deberá añadir una categoría si ya existe", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "One Punch" } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: "One Punch" } });
    fireEvent.submit(form);

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(2);
  });

  test("No deberá añadir una categoría si está vacía", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: "" } });
    fireEvent.submit(form);
    //screen.debug();

    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(1);
  });
});
