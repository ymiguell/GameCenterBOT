const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) {
     return message.reply('Lhe falta poder de Administrador!');
  }
  if (!args[0]) return message.reply('Utilize (prefixo)editmoney <valor> (@user) .');
  if (isNaN(args[0])) return message.reply('Isso não é um número');
  let user = message.mentions.users.first() || message.author;
  message.channel.send('Sucesso! ' + args[0] + ' para ' + `${user}`);
  db.add(`money_${message.guild.id}_${user.id}`, args[0])
}