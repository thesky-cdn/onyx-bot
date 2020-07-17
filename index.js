const Discord = require('discord.js');
const bot = new Discord.Client();.
let prefix = '!'

bot.once('ready', () => {
    console.log('Onyx BOT v1.0');
    bot.user.setPresence({
        activity: { type: 'PLAYING', name: 'Onyx Life RP'}
    })
  })


bot.on('message', message => {
    let p = srv.getMaxPlayers();
    if(message.content.startsWith(prefix + "ip")){
        message.delete();
        message.channel.bulkDelete(99);
    let embed = new Discord.MessageEmbed()
    .setTitle('Ony Life RP')
    .setThumbnail('https://i.imgur.com/2ypP0H2.png')
    .setColor('#ff0000')
    .addField('Comment nou rejoindre ?', "Pour rejoindre notre serveur c'est tres simple ! il te suffit de cliquer sur [F8] et d'écrire: connect 176.31.8.220:30475")
    .addField('Server Status', ':white_check_mark:  Online')
    .addField('Adresse IP', '176.31.8.220:30475')
    .setFooter('Onyx Life RP © 2020')

    message.channel.send(embed);
    }
})


bot.login(process.env.TOKEN)