const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let help = `\n**Comandos de Moderação:**\n\n**#clear 2 a 99 -** Limpa de 2 a 99 mensagens;\n**#reactiontext -** Adiciona um texto para colocar reaction rule;\n\n**Comandos Gerais:**\n\n**#inviteme -** Mostra o convite do bot para você chama-lo para o seu servidor;{algumas funções são restritas para este servidor}\n**#uptime -** Mostra o tempo online do bot (cada reset recomeça essa contagem);\n**#help -** Mostra os comandos;\n**#say <texto> -** Faz o bot falar oque você escreveu na mensagem;\n**#avatar -** Exibe o avatar de quem executou o comando;\n**#emoji <nome do emoji> -** Mostra o emoji que você citou;\n**calcular -** faz contasde matematica;\n**#level -** Mostra level e xp;\n\n**Comandos de Diversão:**\n\n**#flipcoin -** joga uma moeda;\n**#roll6 -** joga um dado de 6 lados;\n**#roll20 -** Joga um dado de 20 lados;\n**#roll100 -** Joga um dado de 100 lados;\n**#metralhar <@user> -** Metralha o usuario mensionado.\n**#changemymind <texto> -** exibe um change my mind;\n\n**Economia:**\n\n**#honras -** Mostra suas Honras;\n**#trabalhar -** Ganha de 1 a 20 Honras (utilizavel 1 vez por hora);\n**#buyvip -** Compra vip;\n**#pagar -** Paga algum usuario;\n\n**Para gastar suas honras olhe a loja do servidor e mencione o C.E.O.** `;

  const embed = new Discord.MessageEmbed()
    .setTitle(`Help 🆘`)
    .setThumbnail("https://i.imgur.com/87zmQOW.gif")
    .setColor("#17174e")
    .setDescription(`**Comandos do BOT:**\n${help}`)
    .setFooter("Site do Bot: https://honragt.github.io")

  message.channel.send(embed);
};