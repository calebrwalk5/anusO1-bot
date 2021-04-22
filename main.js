const Discord = require('discord.js')
const client = new Discord.Client()

const TOKEN = "your-bot-token"
const PREFIX = "!anus"

client.on('ready', ready => {
  console.log(`${client.user.username} is now ready!`)
  console.log('Bot built by anusO1#6969')
});
