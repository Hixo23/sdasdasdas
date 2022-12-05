const { Client } = require("touchguild");
const { readdirSync } = require("fs");
const config = require("./data/config.json");
const client = new Client({ token: config.token });

client.config = config;

client.commands = new Map();

readdirSync("./src/handlers").forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

client.connect();
