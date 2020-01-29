import request from "request-promise";
import * as Provider from "./KettlebellCodersProvider";

jest.mock("request-promise");

describe("Kettlebell coders provider", () => {
  test("an empty query string", async () => {
    (request as any).mockImplementation(() => '{}');
    const result = await Provider.constructWorkouts("foo", "bar", 1);
    expect(result).toEqual({});
  });

  test("an invalid non-json response", async () => {
    (request as any).mockImplementation(() => "Service Unavailable.");
    expect(Provider.constructWorkouts("foo", "bar", 1)).rejects.toThrow(SyntaxError);
  });
});