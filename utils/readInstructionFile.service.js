const service = {
  readInstructionFile: async ({ path, fs, split }) => {
    return new Promise((resolve, reject) => {
      const fileReadStream = fs.createReadStream(path, {
        flags: "r",
        encoding: "utf-8",
      });

      fileReadStream.on("error", (error) => reject({ error }));

      const readStore = [];
      const lineStream = fileReadStream.pipe(split());

      lineStream.on("data", (chunk) => {
        readStore.push(chunk);
      });

      lineStream.on("error", (error) => {
        return reject({ error });
      });

      lineStream.on("end", () => {
        return resolve({ readStore });
      });
    });
  },
};

module.exports = { ...service };
