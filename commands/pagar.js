const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args, config) => {



    let user = message.mentions.members.first() 
    let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)
    let moneyToTransfer = parseInt(args[1])

    if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send('Você não pode usar isso!')

    if (!user) {
        return message.channel.send('você esqueceu de mencionar alguém.')
    }
    if (!moneyToTransfer) {
        return message.channel.send('Especifique um valor.')
    }
    if (message.content.includes('-')) { 
        return message.channel.send('Dinheiro negativo não pode ser pago.')
    }

    if (member < moneyToTransfer) {
        return message.channel.send(`Isso é mais honras do que você tem.`)
    }

    message.channel.send(`${message.author.tag}, Você pagou com sucesso ${user}, $ ${moneyToTransfer} honras.`)
    db.add(`money_${message.guild.id}_${user.id}`, moneyToTransfer)
    db.subtract(`money_${message.guild.id}_${message.author.id}`, moneyToTransfer)




}
