/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../componentes/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "One Punch";
  test("Debe mostrar el loading 'Cargando...' y la categoría inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [], // si es el valor inicial de images (porque sé que será un array vacío al inicio)
      isLoading: true, // si es el valor inicial de isLoading (porque sé que será true)
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando...")).toBeTruthy();
    //expect(screen.getByText("Cargando...")); // me da error pero a Fernando Herrera no
    expect(screen.getByText(category)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 3 }).innerHTML).toContain(
      category
    );
  });

  test("Debe mostrar items cuando se cargan las imágenes mediante useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
      {
        id: "ZZZ",
        title: "Mondongo",
        url: "https://localhost/mondongo.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    //screen.debug();
    expect(screen.getAllByRole("img").length).toBe(3);
    //expect(screen.getAllByText("Cargando...")).not.toBeInTheDocument(); //esta línea no va y no sé por qué
  });
});
