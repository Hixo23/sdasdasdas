const { Member } = require("touchguild");

module.exports = async (message, client) => {
  const member = await message.member;
  if (member.bot) return;

  if (!member instanceof Member) return;

  const badwords = ["yks", "kys"];

  for (const word of badwords) {
    if (message.content.includes(word)) {
      message.delete();
    }
  }
};
