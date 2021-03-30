const pipeline = (...args) => (startingValue) =>
  [...args].reduce(
    (accumulator, currentFuntion) => currentFuntion(accumulator),
    startingValue
  );

const removeSpaces = (value) => `${value}`.replace(/\s+/g, "");
const split = (value) => `${value}`.split("");
const castToInteger = (ArrOfValues = []) =>
  ArrOfValues.map((value) => (Number.isNaN(+value) ? value : +value));

const getPlateauDimension = (line) => {
  const [xLength, yLength] = pipeline(removeSpaces, split, castToInteger)(line);
  return { xLength, yLength };
};
const getStartingPosition = (line) => {
  const [x, y, currentDirection] = pipeline(
    removeSpaces,
    split,
    castToInteger
  )(line);
  return { currentPosition: { x, y }, currentDirection };
};
const getSequenceOfActions = (line) => {
  const actions = pipeline(removeSpaces, split)(line);
  return { actions };
};

const getStartingPositionLines = (arrOfLines = []) =>
  arrOfLines.map((value, index) => index).filter((index) => index % 2 === 0);

const getStartingPositionAndActions = (positionIndex, listOfLines) => {
  const { currentPosition, currentDirection } = getStartingPosition(
    listOfLines[positionIndex]
  );
  const { actions } = getSequenceOfActions(listOfLines[positionIndex + 1]);
  return { currentPosition, currentDirection, actions };
};

module.exports = {
  getPlateauDimension,
  getStartingPosition,
  getSequenceOfActions,
  getStartingPositionLines,
  getStartingPositionAndActions,
};
