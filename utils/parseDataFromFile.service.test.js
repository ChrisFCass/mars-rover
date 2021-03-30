const {
  getPlateauDimension,
  getStartingPosition,
  getSequenceOfActions,
} = require("./parseDataFromFile.service");

describe("assess getter functions depending on each line", () => {
  it("should get dimensions from plateau", () => {
    const line = "7 5";

    const { xLength, yLength } = getPlateauDimension(line);

    expect(xLength).toBe(7);
    expect(yLength).toBe(5);
  });

  it("should get starting position of rover", () => {
    const line = "1 3 N";

    const { currentPosition, currentDirection } = getStartingPosition(line);

    expect(currentDirection).toBe("N");
    expect(currentPosition).toStrictEqual({ x: 1, y: 3 });
  });

  it("should get actions for the rover to perform", () => {
    const line = "MRLMRLMMMSS";

    const { actions } = getSequenceOfActions(line);

    expect(actions).toStrictEqual([
      "M",
      "R",
      "L",
      "M",
      "R",
      "L",
      "M",
      "M",
      "M",
      "S",
      "S",
    ]);
  });
});
