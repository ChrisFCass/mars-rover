const isRoverOutOfBoundaries = ({ currentPosition }) => ({
  xLength,
  yLength,
}) => {
  const { x: currentXPosition, y: currentYPosition } = currentPosition;
  if (currentXPosition > xLength) return true;
  if (currentYPosition > yLength) return true;
  return false;
};

/* method to be implemented on a next release 
  depending if rovers move simultaneously or not
*/
const doesRoverCrashedAnotherRover = () => false;

module.exports = { isRoverOutOfBoundaries, doesRoverCrashedAnotherRover };
