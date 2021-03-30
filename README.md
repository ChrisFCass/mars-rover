# mars-rover

- In order to run this simulation please follow the next steps:

  - change the name of file `.env.temporary` to `.env`
  - assign the environment variable `INSTRUCTION_FILE_PATH` the relative path to where your configuration file is located.
    it currently defaults to a test example:

    ```csv
    5 5        # plateau will be a 5 x 5 grid
    1 2 N      # first rover will start facing north at position (1,2)
    LMLMLMLMM  # first rover will perform those actions (left, forward, left, forward...)
    3 3 E      # second rover will start facing east at position (3,3)
    MMRMMRMRRM # second rover will perform those actions (forward, forward, right)
    ```

  - install dependencies with: `npm install`
  - then execute `npm start`

- Assumptions of this code:
  - depite the rover is a rectangular box, the second rover, in the upper example at some point has
    its rear part beyond the limits.
    Therefore, it could be assumed one of the next three following cases:
    - Even it is a plateau, the ideal navigation system enforces periodic boundary conditions.
    - Currently it is not important to check boundary conditions on the rear (this condition was chosen).
    - Currently it is not important to check boundary contidions at all.
  - it was assummed the content of the file was always correct, even though this is rarely true.
    this could be implemented on a next release (e.g.: lower-case instructions, missing starting positions or actions).
  - at the moment, it was also assummed rovers will not superpose their position at any time to simplify this problem.
