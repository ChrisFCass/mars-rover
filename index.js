const fs = require("fs");
const split = require("split");

const { INSTRUCTION_FILE_PATH: path } = process.env;
const { outOfBoundaries } = require("./definitions");

const { readInstructionFile } = require("./utils/readInstructionFile.service");
const {
  getPlateauDimension,
  buildListOfRoverObjects,
} = require("./utils/parseDataFromFile.service");
const {
  isRoverOutOfBoundaries,
} = require("./utils/plateauValidations.service");
const { calculateFinalRoverPosition } = require("./utils/moveRover.service");

const responseAdapter = ({ currentPosition: { x, y }, currentDirection }) =>
  `${x} ${y} ${currentDirection}`;

const executeRoverSimulation = async () => {
  const { error, readStore } = await readInstructionFile({ fs, path, split });
  if (error) throw new Error(error);

  const [lineWithPlateauDimensions, ...configLinesForRovers] = readStore;

  const plateauDimensions = getPlateauDimension(lineWithPlateauDimensions);
  const listOfRovers = buildListOfRoverObjects(configLinesForRovers);

  const areAllRoversCorrectlyPositioned = listOfRovers.every(
    (rover) => !isRoverOutOfBoundaries(rover)(plateauDimensions)
  );
  if (!areAllRoversCorrectlyPositioned) throw new Error(outOfBoundaries);

  listOfRovers.forEach((rover) => {
    const finalPosition = calculateFinalRoverPosition(rover, plateauDimensions);
    console.log(responseAdapter(finalPosition));
  });
};

executeRoverSimulation();
