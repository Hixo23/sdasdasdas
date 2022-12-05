const { readdirSync } = require("fs");

module.exports = async (client) => {
  readdirSync("./src/commands/")
    .filter((dir) => !dir.endsWith(".js"))
    .forEach((dir) => {
      readdirSync(`./src/commands/${dir}`)
        .filter((file) => file.endsWith(".Command.js"))
        .forEach((file) => {
          const command = require(`../commands/${dir}/${file}`);

          client.commands.set(command.name, command);
          console.log(`Załadowano komende ${file.split(".")[0]}`);
        });
    });
};
