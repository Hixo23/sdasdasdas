module.exports = {
  name: "help",
  description: "Pokazuje komendy bota",
  run: async (message, client) => {
    const embed = {
      title: "Komendy bota",
      description: client.commands.map((command) => command.name),
    };
    message.createMessage({ embeds: [embed] });
  },
};
