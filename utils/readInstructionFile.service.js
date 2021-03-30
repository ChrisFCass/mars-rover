const service = {
  readInstructionFile: async ({ path, fs, split }) => {
    try {
      return new Promise((resolve) => {
        const fileReadStream = fs.createReadStream(path, {
          flags: "r",
          encoding: "utf-8",
        });

        const readStore = [];
        const lineStream = fileReadStream.pipe(split());

        lineStream.on("data", (chunk) => {
          readStore.push(chunk);
        });

        lineStream.on("error", (error) => {
          throw new Error(error);
        });

        lineStream.on("end", () => {
          return resolve({ readStore });
        });
      });
    } catch (error) {
      return { error };
    }
  },
};

module.exports = { ...service };
