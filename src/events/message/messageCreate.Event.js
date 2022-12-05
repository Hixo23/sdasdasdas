const { Member } = require("touchguild");

module.exports = async (message, client) => {
  const member = await message.member;
  if (member.bot) return;
  if (!member instanceof Member) return;
  let prefix = client.config.prefix;

  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix).trim().split(/ +/g);
  const commandName = args.shift();

  const command = client.commands.get(commandName.toLowerCase());
  if (!command) return;

  await command.run(message, client);
};
