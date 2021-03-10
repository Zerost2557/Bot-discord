const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'dit bonjour') {
    msg.reply('bonjour au nouveau @everyone');
  }
});
    client.on('message', msg => {
      if (msg.content === 'jai un problaime') {
        msg.reply('mp lgsm ');
      }
    });
    
client.login(process.env,TOKEN)