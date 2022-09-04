/* eslint-disable react-hooks/exhaustive-deps */

import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Pruebas sobre el hook useFetchGifs", () => {
  test("Deberá regresar el estado inicial (que las imágenes sean un array vacío e isLoading esté en true)", () => {
    console.log(
      "======================================================================="
    );
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    //console.log(result);
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    //expect(isLoading).toBe(true);
    expect(isLoading).toBeTruthy();
  });

  test("Deberá regresar un array con imágenes e isLoading en false", async () => {
    //const { result } = await renderHook(() => useFetchGifs("One Punch"));
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
      /*  {
        timeout: 1000,
      } */
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
    //console.log(result.current);
  });
});
