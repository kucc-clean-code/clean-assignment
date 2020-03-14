import createRow from "./createRow";

describe("create Row", () => {
  it("should create a single row", () => {
    // given
    const input = ["haena", "12", "44"];

    // when
    const output = createRow(input);

    // then
    const expectedOutput = "|haena    |12       |44       |\n";
    expect(output).toEqual(expectedOutput);
  });

  it("should throw error", () => {
    // given
    const input = ["haenajeongho", "12", "44"];

    // when
    const t = () => {
      createRow(input);
    };

    // then
    expect(t).toThrow(RangeError);
  });
});
