/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../componentes/GifItem";

describe("Pruebas sobre el componente GifItem", () => {
  const title = "Redeña, ara sí";
  const url = "https://";
  const onDelete = () => {};

  test("Debe hace match con el snapshot", () => {
    const { container } = render(
      <GifItem title={title} url={url} onDelete={onDelete} />
    );
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar una imagen con el url y el alt indicados", () => {
    render(<GifItem title={title} url={url} onDelete={onDelete} />);
    //screen.debug();
    //expect(screen.getByText(/redeña/i)).toContain(title);
    //console.log(screen.getByRole("img").alt);
    //expect(screen.getByRole("img").title).toBe(title);
    /*   expect(screen.getByRole("img").src).toBe(url);
    expect(screen.getByRole("img").alt).toBe(title); */
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe mostrar el título en el componente", () => {
    render(<GifItem title={title} url={url} onDelete={onDelete} />);
    const parr = screen.getByText(/redeña/i);
    expect(parr.textContent).toContain(title);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
