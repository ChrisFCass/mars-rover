const { updateDirectionPosition } = require('./moveRover.service');

describe('assess functionalities regarding rover rotation', () => {
  it('should update to west if turns to left from north', () => {
    const currentPosition = { x: 1, y: 1 };
    const rover = { currentPosition, currentDirection: 'N' };
    const action = 'L';

    const { currentDirection } = updateDirectionPosition(rover)(action);
    expect(currentDirection).toBe('W');
  });

  it('should update to south if turns to left from west', () => {
    const currentPosition = { x: 1, y: 1 };
    const rover = { currentPosition, currentDirection: 'W' };
    const action = 'L';

    const { currentDirection } = updateDirectionPosition(rover)(action);
    expect(currentDirection).toBe('S');
  });

  it('should update to east if turns to left from south', () => {
    const currentPosition = { x: 1, y: 1 };
    const rover = { currentPosition, currentDirection: 'S' };
    const action = 'L';

    const { currentDirection } = updateDirectionPosition(rover)(action);
    expect(currentDirection).toBe('E');
  });

  it('should update to north if turns to left from east', () => {
    const currentPosition = { x: 1, y: 1 };
    const rover = { currentPosition, currentDirection: 'E' };
    const action = 'L';

    const { currentDirection } = updateDirectionPosition(rover)(action);
    expect(currentDirection).toBe('N');
  });

  it('should update to west if turns to right from north', () => {
    const currentPosition = { x: 1, y: 1 };
    const rover = { currentPosition, currentDirection: 'W' };
    const action = 'R';

    const { currentDirection } = updateDirectionPosition(rover)(action);
    expect(currentDirection).toBe('N');
  });
});

describe('assess functionalities regarding rover displacement', () => {
  it('should increase y position due to having north direction', () => {
    const currentPosition = { x: 1, y: 1 };
    const rover = { currentPosition, currentDirection: 'N' };
    const action = 'M';

    const updatedPositionDirection = updateDirectionPosition(rover)(action);

    expect(updatedPositionDirection.currentPosition).toStrictEqual({
      x: 1,
      y: 2,
    });
  });

  it('should decrease y position due to having south direction', () => {
    const currentPosition = { x: 1, y: 1 };
    const rover = { currentPosition, currentDirection: 'S' };
    const action = 'M';

    const updatedPositionDirection = updateDirectionPosition(rover)(action);

    expect(updatedPositionDirection.currentPosition).toStrictEqual({
      x: 1,
      y: 0,
    });
  });

  it('should increase x position due to having east direction', () => {
    const currentPosition = { x: 1, y: 1 };
    const rover = { currentPosition, currentDirection: 'E' };
    const action = 'M';

    const updatedPositionDirection = updateDirectionPosition(rover)(action);

    expect(updatedPositionDirection.currentPosition).toStrictEqual({
      x: 2,
      y: 1,
    });
  });

  it('should increase x position due to having east direction', () => {
    const currentPosition = { x: 1, y: 1 };
    const rover = { currentPosition, currentDirection: 'E' };
    const action = 'M';

    const updatedPositionDirection = updateDirectionPosition(rover)(action);

    expect(updatedPositionDirection.currentPosition).toStrictEqual({
      x: 2,
      y: 1,
    });
  });

  it('should decrease x position due to having west direction', () => {
    const currentPosition = { x: 1, y: 1 };
    const rover = { currentPosition, currentDirection: 'W' };
    const action = 'M';

    const updatedPositionDirection = updateDirectionPosition(rover)(action);

    expect(updatedPositionDirection.currentPosition).toStrictEqual({
      x: 0,
      y: 1,
    });
  });
});
