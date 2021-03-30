const { isRoverOutOfBoundaries } = require('./plateauValidations.service');

describe('assess different validations regarding the plateau', () => {
  it('should be out of boundaries for x-dim', () => {
    const plateauDimension = { xLength: 4, yLength: 7 };
    const rover = { currentPosition: { x: 5, y: 7 } };

    const isOutOfBoundaries = isRoverOutOfBoundaries(rover)(plateauDimension);
    expect(isOutOfBoundaries).toBe(true);
  });

  it('should be out of boundaries for y-dim', () => {
    const plateauDimension = { xLength: 5, yLength: 7 };
    const rover = { currentPosition: { x: 5, y: 8 } };

    const isOutOfBoundaries = isRoverOutOfBoundaries(rover)(plateauDimension);
    expect(isOutOfBoundaries).toBe(true);
  });

  it('should be within boundaries for both x and y-dim', () => {
    const plateauDimension = { xLength: 5, yLength: 7 };
    const rover = { currentPosition: { x: 1, y: 1 } };

    const isOutOfBoundaries = isRoverOutOfBoundaries(rover)(plateauDimension);
    expect(isOutOfBoundaries).toBe(false);
  });
});
