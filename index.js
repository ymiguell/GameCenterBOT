const express = require('express');
const app = express();
app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(
		`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
	);
	response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('message', message => {
	if (message.author.bot) return;
	if (message.channel.type == 'dm') return;
	if (!message.content.toLowerCase().startsWith(config.prefix)) return;
	if (
		message.content.startsWith(`<@!${client.user.id}>`) ||
		message.content.startsWith(`<@${client.user.id}>`)
	)
		return;

	const args = message.content
		.trim()
		.slice(config.prefix.length)
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	try {
		const commandFile = require(`./commands/${command}.js`);
		commandFile.run(client, message, args);
	} catch (err) {
		console.error('Erro:' + err);
	}
});

client.on('ready', () => {
	let activities = [
			`Utilize ${config.prefix}help para obter ajuda.`,
			`Entre no meu servidor: https://discord.gg/Q7mzrTX`,
			`${client.guilds.cache.size} servidores!`,
			`${client.channels.cache.size} canais!`,
			`${client.users.cache.size} usuários!`
		],
		i = 0;
	setInterval(
		() =>
			client.user.setActivity(`${activities[i++ % activities.length]}`, {
				type: 'WATCHING'
			}),
		1000 * 60
	); // WATCHING, LISTENING, PLAYING, STREAMING

	client.user
		.setStatus('online') // idle, dnd, online, invisible
		.catch(console.error);
	console.log('Estou Online!');
});

client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("661163930101612545");
  let channel = await client.channels.cache.get("661167288208326666");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "doge");
  if (guild != member.guild) {
    return console.log("Bem vindo!.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#03d6ff")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Boas-vindas ${emoji}`)
      .setImage("https://i.imgur.com/cTWkf2L.png")
      .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco!`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png"&&"gif", size: 1024 }))
      .setFooter("Siga HonraGT no Twitch")
      .setTimestamp();

    channel.send(embed);
  }
});

client.on("guildMemberRemove", async (member) => { 

  let guild = await client.guilds.cache.get("661163930101612545");
  let channel = await client.channels.cache.get("661167288208326666");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === "Elmofire");
  if (guild != member.guild) {
    return console.log("Alguem Saiu do Servidor :(");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#0500ff")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Adeus! ${emoji}`)
      .setImage("https://imgur.com/dzTklV9.png")
      .setDescription(`**${member.user.username}**, saiu do servidor! Espero que um dia volte.`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png"&&"gif", size: 1024 }))
      .setFooter("Siga HonraGT no Twitch")
      .setTimestamp();

    channel.send(embed);
  }
});
 //xp
const leveling = require('discord-leveling');

client.on("message", async message => {
  if (message.guild.id !== '661163930101612545') return;
  if (message.channel.id === '781320521857761280') return;
  if (message.channel.id === '760631773540909076') return;
  if (message.channel.id === '661294832228237322') return;
  if (message.channel.id === '710937211192737912') return;
  if (message.channel.id === '710937556501397614') return;
  if (message.channel.id === '719377552610820127') return;
  if (message.channel.id === '719378018325495808') return;
  if (message.channel.id === '719542898068160533') return;
  if (message.channel.id === '719543007082446898') return;
  if (message.channel.id === '720407105995145216') return;
  if (message.channel.id === '720407079013318796') return;
  if (message.author.bot) return
  let profile = await leveling.Fetch(message.author.id);
  let amount = 15;
  if (message.member.roles.cache.get('710922238362386483')) amount = parseInt(amount * 2);

  leveling.AddXp(message.author.id, amount);

  if (profile.xp + 15 > 150) {
    leveling.AddLevel(message.author.id, 1);
    leveling.SetXp(message.author.id, 0)
    message.channel.send(`🆙 **|** ${message.author} foi para o level ${profile.level + 1}`)
    .then(m => {
      m.delete({ timeout: 10000 }).catch();
    });
  }
  
  if (profile.level == 1) {
    message.member.roles.add('')
  }
  if (profile.level == 20) {
    message.member.roles.add('')
  }
  if (profile.level == 40) {
    message.member.roles.add('')
  }
  if (profile.level == 80) {
    message.member.roles.add('')
  }
  if (profile.level == 100) {
    message.member.roles.add('')
  }
  if (profile.level == 200) {
    message.member.roles.add('')
  }
  if (profile.level == 375) {
    message.member.roles.add('')
  }
  if (profile.level == 500) {
    message.member.roles.add('')
  } 
});

client.login(process.env.TOKEN);
