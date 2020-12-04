const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
const IDs = {
  Vip: '710922238362386483',
 
};

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

if (message.guild.id !== '661163930101612545') return;

if (message.member.roles.cache.has(IDs.Vip)) {

message.member.roles.remove(IDs.Vip)

db.add(`money_${message.guild.id}_${message.author.id}`, '150')
message.channel.send(`${user}, Vip removido com Sucesso!`)
return
};

message.channel.send(`${user}, Você não é um Vip!`)
}
