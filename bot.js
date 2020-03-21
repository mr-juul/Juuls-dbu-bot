const Discord = require('discord.js');

const client = new Discord.Client();

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

