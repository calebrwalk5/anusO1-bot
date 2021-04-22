/*
anusO1#6969 made this terrible bot
*/

const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const TOKEN = "your-bot-token";
const PREFIX = "!anus ";

var messages = 0;

client.on('ready', ready => {
  console.log(`${client.user.username} is now ready!`);
  console.log('Bot built by anusO1#6969');
  client.user.setPresence({ activity: { name: "anusO1 bot", type: "LISTENING" }, status: "online" });
});

client.on('guildMemberAdd', newuser => {
  console.log("new user, wake up!");
});

client.on('message', message => {
  messages++;
  if (message.content.startsWith(`${PREFIX}help`)) {
    message.channel.send("i do nothing lol");
    console.log("i do nothing lol");
  } else if (message.content.startsWith(`${PREFIX}ping`)) {
    message.channel.send("@everyone");
    console.log("pinged everyone");
  } else if (message.content.startsWith(`${PREFIX}lol`)) {
     for (var i = 0; i < 5; i++) {
       message.channel.send("PENIS");
     }
    console.log("PENIS");
  } else if (message.content.startsWith(`${PREFIX}messages`)) {
    message.channel.send(messages " sent since the bot was put online");
  } else if (message.content === '!ping') {
    message.channel.send('pong');
    console.log('pong');
  } else if (message.content === '!anus ping') {
    message.channel.send('pong');
    console.log('pong');
  } else if (message.content.includes('deez')) {
    message.channel.send('deez nuts lol');
    console.log("deez nuts lol");
  } else {
    console.log(messages);
  }
});

client.login(TOKEN);
