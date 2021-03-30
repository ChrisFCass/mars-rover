# mars-rover

- In order to run this simulation please follow the next steps:

  - change the name of file `.env.temporary` to `.env`
  - assign the environment variable `INSTRUCTION_FILE_PATH` (inside .env file) the relative path to where your configuration file is located.
    It currently defaults to a test example:

    ```txt
    5 5        # plateau will be a 5 x 5 grid
    1 2 N      # first rover will start facing north at position (1,2)
    LMLMLMLMM  # first rover will perform those actions (left, forward, left, forward...)
    3 3 E      # second rover will start facing east at position (3,3)
    MMRMMRMRRM # second rover will perform those actions (forward, forward, right)
    ```

  - install dependencies with: `npm install`
  - then execute `npm start` to start the simulation
  - after running the simulation, it will output to the console the final location of each rover, like in the next example:

    ```txt
    1 3 N     # first rover will be positioned facing north at (1,3)
    5 1 E     # second rover will be positioned facing east at (5,1)
    ```

- Assumptions of this code:
  - Despite the rover being a rectangular box, the second rover, in the upper example at some point has
    its rear part beyond the limits.
    Therefore, it could be assumed one of the next three following cases:
    - Even it is a plateau, the ideal navigation system enforces periodic boundary conditions.
    - Currently it is not important to check boundary conditions on the rear (this condition was chosen).
    - Currently it is not important to check boundary contidions at all.
  - It was assummed the content of the file was always correct, even though this is rarely true.
    this validation could be implemented on a next release (e.g.: lower-case instructions, missing starting positions or actions).
  - At the moment, it was also assummed rovers will not superpose their position at any time to simplify this problem.
