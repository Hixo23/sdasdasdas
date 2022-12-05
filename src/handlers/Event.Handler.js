const { readdirSync } = require("fs");

module.exports = async (client) => {
  readdirSync("./src/events/")
    .filter((dir) => !dir.endsWith(".js"))
    .forEach((dir) => {
      readdirSync(`./src/events/${dir}`)
        .filter((file) => file.endsWith(".Event.js"))
        .forEach((file) => {
          const event = require(`../events/${dir}/${file}`);

          client.on(file.split(".")[0], (...args) => event(...args, client));
          console.log(`Zaladowano event ${file.split(".")[0]}`);
        });
    });
};
