const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 bot.user.setPresence({ status: 'online', game: { name: 'DBU' } })

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

client.on('message', msg => {
  if (msg.content === '!test') {
    msg.reply('Test ok!');
  }
});
client.on('message', msg => {
  if (msg.content === '!DBU') {
    msg.reply('Ja?');
  }
});