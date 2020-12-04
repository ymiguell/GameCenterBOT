const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let help = `Estou muito feliz que você quer me chamar para seu servidor 😭\n\n Me convide por aqui: https://honragt.github.io`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`Invite ✉`)
    .setThumbnail("https://www.pinclipart.com/picdir/big/80-805954_desenho-de-carta-email-icono-clipart.png")
    .setColor("#17174e")
    .setDescription(`**Invite do BOT:**\n${help}`)

  message.channel.send(embed);
};