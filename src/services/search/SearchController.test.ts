import promiseRequest from "request-promise";
import { getPlacesByName } from "./SearchController";

jest.mock("request-promise");
(promiseRequest as any).mockImplementation(
  () =>  `{"features": [], "type": "FeatureCollection"}`
);

test("A query string less than three characters", async () => {
  const result = await getPlacesByName("hi");
  expect(result).toEqual({"features": [], "type": "FeatureCollection"});
});
