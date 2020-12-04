const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let text = `Seu genero:
:man: - Se vc é menino;
:woman: - Se vc é menina;

Sua Idade:
:boy: - -17 anos;
:cowboy: +18 anos;`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`📜Registro`)
    .setThumbnail("https://i.imgur.com/87zmQOW.jpg")
    .setColor("#17174e")
    .setDescription(`**Bem vindos ao servidor para usufruir de tudo reaja de acordo com suas informações.**\n${text}`)

  message.channel.send(embed);
};