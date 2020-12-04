const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
const IDs = {
  Vip: '710922238362386483',
 
};

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

const balance = await db.get(`money_${message.guild.id}_${message.author.id}`);

if (message.guild.id !== '661163930101612545') return;

if (message.member.roles.cache.has(IDs.Vip)) return message.channel.send(`${user}, Você já é um Vip`);

if (balance < 500) return message.channel.send(`${user}, Você não tem honras suficientes!`);

message.member.roles.add(IDs.Vip)

db.subtract(`money_${message.guild.id}_${message.author.id}`, '500')
message.channel.send(`${user}, Vip comprado com sucesso!💎`)
}
