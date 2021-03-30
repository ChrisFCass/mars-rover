const NORTH = 'N';
const EAST = 'E';
const SOUTH = 'S';
const WEST = 'W';
const FORWARD = 'M';

const directionsOrder = [NORTH, EAST, SOUTH, WEST];
const numberOfDirections = directionsOrder.length;

const originPosition = { x: 0, y: 0 };
const turnToLeftOrRightIndexMapper = {
  L: -1,
  R: 1,
};
const moveRoverMapper = {
  N: { x: 0, y: 1 },
  E: { x: 1, y: 0 },
  S: { x: 0, y: -1 },
  W: { x: -1, y: 0 },
};

const outOfBoundaries = 'the rover has a position X or Y out of the plateau';
const invalidPlateauDimensions = "wide or height's plateau are invalid values";

const fileNotFound =
  'Instructions file path not resolved, please make sure you added properly to .env file';

module.exports = {
  FORWARD,
  WEST,
  NORTH,
  directionsOrder,
  numberOfDirections,
  originPosition,
  turnToLeftOrRightIndexMapper,
  moveRoverMapper,
  outOfBoundaries,
  invalidPlateauDimensions,
  fileNotFound,
};
