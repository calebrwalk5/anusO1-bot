/*
anusO1#6969 made this terrible bot
*/

const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const TOKEN = "bot-token-here";
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
       message.channel.send("lol");
     }
    console.log("LOL");
  } else if (message.content.startsWith(`${PREFIX}messages`)) {
    message.channel.send(messages " sent since the bot was put online");
  } else if (message.content === '!ping') {
    message.channel.send('pong').then(msg => msg.delete({ timeout: 12000 })).catch(e => {})
    message.delete().catch(e => {})
    console.log('pong');
  } else if (message.content === '!anus ping') {
    message.channel.send('pong').then(msg => msg.delete({ timeout: 12000 })).catch(e => {})
    message.delete().catch(e => {})
    console.log('pong');
  } else if (message.content.includes('deez')) {
    message.channel.send('deez nuts lol').then(msg => msg.delete({ timeout: 12000 })).catch(e => {})
    message.delete().catch(e => {})
    console.log("deez nuts lol");
  } else if (message.content.includes('anusO1')) {
    message.channel.send('anusO1 is a cool man').then(msg => msg.delete({ timeout: 12000 })).catch(e => {})
    message.delete().catch(e => {})
    console.log('i said you are cool');
  } else if (message.content.includes("british")) {
    message.channel.send("OI MAYTE I AM BRI'ISH AND I HAF MAFS IN ME SKEWL").then(msg => msg.delete({ timeout: 12000 })).catch(e => {})
    message.delete().catch(e => {})
    console.log("british people roasted");
  } else if (message.content.includes("dick")) {
    message.channel.send("why are you talking about dick????").then(msg => msg.delete({ timeout: 12000 })).catch(e => {})
    message.delete().catch(e => {})
    console.log(`bruh ${message.author.tag} likes dick lol`);
  } else if (message.content.includes("csgo")) {
    message.channel.send("you're literally trash at that game bruh!").then(msg => msg.delete({ timeout: 12000 })).catch(e => {})
    message.delete().catch(e => {})
    console.log(`bruh ${message.author.tag} likes dick lol`);
  } else {
    console.log(messages);
  }
});

client.login(TOKEN);
