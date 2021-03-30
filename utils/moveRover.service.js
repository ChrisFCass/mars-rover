const {
  FORWARD,
  WEST,
  NORTH,
  directionsOrder,
  numberOfDirections,
  originPosition,
  turnToLeftOrRightIndexMapper,
  moveRoverMapper,
} = require('../definitions');

const { isRoverOutOfBoundaries } = require('./plateauValidations.service');

const convertIndexDirectionToRealDirection = (updatedIndex) => {
  if (updatedIndex === -1) return WEST;
  if (updatedIndex === numberOfDirections) return NORTH;
  return directionsOrder[updatedIndex];
};

const updateDirection = (currentDirection, turnTo) => {
  const indexOfCurrentDirection = directionsOrder.indexOf(currentDirection);
  const indexIncremental = turnToLeftOrRightIndexMapper[turnTo] || 0;

  const newDirection = convertIndexDirectionToRealDirection(
    indexOfCurrentDirection + indexIncremental
  );
  return newDirection;
};

const updatePosition = (currentPosition, displacementVector) => {
  const { x: previousX, y: previousY } = currentPosition || originPosition;
  const { x: incrX, y: incrY } = displacementVector;
  return { x: previousX + incrX, y: previousY + incrY };
};

const updateDirectionPosition = ({ currentPosition, currentDirection }) => (action) => {
  if (action === FORWARD) {
    const displacementVector = moveRoverMapper[currentDirection];

    const updatedPosition = updatePosition(currentPosition, displacementVector);
    return { currentPosition: updatedPosition, currentDirection };
  }
  const updatedDirection = updateDirection(currentDirection, action);
  return { currentPosition, currentDirection: updatedDirection };
};

const service = {
  calculateFinalRoverPosition: ({ actions = [], ...roverProps }, plateauDimensions) =>
    actions.reduce(
      (roverState, currentAction) => {
        const updatedRoverPosition = updateDirectionPosition(roverState)(currentAction);
        if (isRoverOutOfBoundaries(updatedRoverPosition)(plateauDimensions)) {
          throw new Error(outOfBoundaries);
        }
        return { ...updatedRoverPosition };
      },
      {
        ...roverProps,
      }
    ),
};

module.exports = { ...service, updateDirectionPosition };
