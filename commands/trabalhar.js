const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
  name: "trabalhar",
  description: "trabalhe",

  async run(client, message, args) {
    let user = message.author;
    let timeout = 3600000;
    let author = await db.fetch(`estudou_${message.guild.id}_${user.id}`);

    if (author !== null && timeout - (Date.now() - author) > 0) {
      let time = ms(timeout - (Date.now() - author));
      return message.channel.send(`Você vai trabalhar novamente em ${time.minutes}m e ${time.seconds}s`)
    } else {
      let amount = Math.floor(Math.random() * 19 + 1);
      if (message.member.roles.cache.get('710922238362386483')) amount = parseInt(amount * 2.0);
      db.add(`money_${message.guild.id}_${user.id}`, amount)
      db.set(`trabalhou_${message.guild.id}_${user.id}`, Date.now())

      message.channel.send(`${user}, você ganhou ${amount} Honras.`)
    }
  }
}