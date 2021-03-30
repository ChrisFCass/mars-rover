const pipeline = (...args) => (startingValue) =>
  [...args].reduce((accumulator, currentFuntion) => currentFuntion(accumulator), startingValue);

const removeSpaces = (value) => `${value}`.replace(/\s+/g, ' ');
const split = (value) => `${value}`.split('');
const splitSpace = (value) => `${value}`.split(' ');
const castToInteger = (ArrOfValues = []) =>
  ArrOfValues.map((value) => (Number.isNaN(+value) ? value : +value));

const getPlateauDimension = (line) => {
  const [xLength, yLength] = pipeline(splitSpace, castToInteger)(line);
  return { xLength, yLength };
};
const getStartingPosition = (line) => {
  const [x, y, currentDirection] = pipeline(splitSpace, castToInteger)(line);
  return { currentPosition: { x, y }, currentDirection };
};
const getSequenceOfActions = (line) => {
  const actions = pipeline(removeSpaces, split)(line);
  return { actions };
};

const getStartingPositionIndexes = (arrOfLines) =>
  arrOfLines.map((value, index) => index).filter((index) => index % 2 === 0);
const getPositionDirectionAndActions = (positionIndex, arrOfLines) => {
  const { currentPosition, currentDirection } = getStartingPosition(arrOfLines[positionIndex]);
  const { actions } = getSequenceOfActions(arrOfLines[positionIndex + 1]);
  return { currentPosition, currentDirection, actions };
};

const buildListOfRoverObjects = (arrOfLines = []) => {
  const indexesForPositions = getStartingPositionIndexes(arrOfLines);
  return indexesForPositions.map((index) => getPositionDirectionAndActions(index, arrOfLines));
};

module.exports = {
  getPlateauDimension,
  getStartingPosition,
  getSequenceOfActions,
  buildListOfRoverObjects,
};
