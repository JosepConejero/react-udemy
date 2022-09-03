import { getGifs } from "../../../src/helpers/getGifs"; //getGifs ha de ir desestructurado (hay que repasar los imports y exports)

describe("Pruebas en getGifs", () => {
  test("Debe devolver un array de gifs", async () => {
    const gifs = await getGifs("One Punch");
    //console.log(gifs);
    expect(gifs.length).toBe(10);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
    expect(gifs[0].url).toEqual(expect.any(String));
    expect(typeof gifs[0].url).toBe("string"); //esta y la anterior son lo mismo
    expect(gifs[0].url.startsWith("http")).toBeTruthy();
  });
});
