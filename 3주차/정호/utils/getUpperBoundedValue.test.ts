import getUpperBoundedValue from "./getUpperBoundedValue";

describe("getUpperBoundedValue", () => {
  it("should return original value", () => {
    // given
    const input = [53, 100];

    // when
    const output = getUpperBoundedValue(input[0], input[1]);

    // then
    const expectedOutput = 53;
    expect(output).toEqual(expectedOutput);
  });

  it("should return boundary value", () => {
    // given
    const input = [123, 100];

    // when
    const output = getUpperBoundedValue(input[0], input[1]);

    // then
    const expectedOutput = 100;
    expect(output).toEqual(expectedOutput);
  });
});
