const Discord = require('discord.js');
const bot = new Discord.Client();
let prefix = '!'

bot.once('ready', () => {
    console.log('Onyx BOT v1.0');
    bot.user.setPresence({
        activity: { type: 'PLAYING', name: 'Onyx Life RP'}
    })
  })


bot.on('message', message => {
    if(message.content.startsWith(prefix + "ip")){
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
        message.delete();
        message.channel.bulkDelete(99);
    let embed = new Discord.MessageEmbed()
    .setTitle('Ony Life RP')
    .setThumbnail('https://i.imgur.com/2ypP0H2.png')
    .setColor('#ff0000')
    .addField('Comment nou rejoindre ?', "Pour rejoindre notre serveur c'est tres simple ! il te suffit de cliquer sur [F8] et d'écrire: connect 164.132.233.136:30139")
    .addField('Server Status', ':white_check_mark:  Online')
    .addField('Adresse IP', '164.132.233.136:30139')
    .setFooter('Onyx Life RP © 2020')

    message.channel.send(embed);
    message.channel.send("@here");
        }
    }
})


bot.login(process.env.TOKEN)
