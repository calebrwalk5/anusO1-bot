const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']  
});

const TOKEN = "your-bot-token";
const PREFIX = "!anus";

client.on('ready', ready => {
  console.log(`${client.user.username} is now ready!`);
  console.log('Bot built by anusO1#6969');
  client.user.setPresence({ activity: { name: "anusO1 bot", type: `WATCHING` }, status: `dnd` });
});

client.on('guildMemberAdd', newuser => {
  console.log("new user");
});

client.on('message', message => {
  if (message.content.startsWith(`${PREFIX}help`)) {
    message.channel.send("i do nothing lol");
  } else if (message.content.startsWith(`${PREFIX}ping`)) {
    message.channel.send("@everyone");
  } else if (message.content.startsWith(`${PREFIX}lol`)) {
     for (var i = 0; i < 5; i++) {
        message.channel.send("PENIS");
     }
  } else {
    console.log("people keep talking");
  }
});

client.login(TOKEN);
