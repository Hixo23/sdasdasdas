module.exports = {
  name: "ban",
  run: async (message, client) => {
    const member = await message.mentions.users[0];
    message.guild.createBan(member.id, "tes");
  },
};
