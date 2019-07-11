import weatherService from "./weatherService";

it("Validate places", () => {
  weatherService
    .getWeather("bogo")
    .then(response => {
      expect(response).toEqual(anything(response));
    })
});
