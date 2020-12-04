const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/sZV7m4f.gif',
  'https://imgur.com/JNUbMp7.gif',
  'https://imgur.com/raoF0zV.gif',
  'https://imgur.com/YUcrRNS.gif',
  'https://imgur.com/DaoA5NB.gif',
  'https://imgur.com/q827aP7.gif',
  'https://imgur.com/RARacSq.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para metralhar!');
}
/*
message.channel.send(`${message.author.username} **acaba de fuzilar** ${user.username}! `, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"&&"gif"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Boom')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de metralhar ${user} até suas viceras saírem pra fora`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}