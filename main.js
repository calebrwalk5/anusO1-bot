/*
anusO1#6969 made this terrible bot
*/

const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const TOKEN = "token-here";
const PREFIX = "!anus ";
const COMMANDS = ["`!anus in front of commands`", "`help`", "`ping`", "`lol`", "`messages`", "`random`"];
const random = ["https://puginarug.com/", "https://longdogechallenge.com/", "https://hooooooooo.com/", "https://makeawebsitehub.com/wp-content/uploads/2017/08/ouaismaisbon-1024x481.jpg", "http://111111111111111111111111111111111111111111111111111111111111.com/", "http://endless.horse/", "https://thatsthefinger.com/", "http://beesbeesbees.com/", "https://inktank.fi/wp-content/uploads/2014/05/weirdwebsites.jpg", "https://www.recipetineats.com/wp-content/uploads/2014/05/Homemade-Heinz-Baked-Beans_0-SQ.jpg", "https://boards.4chan.org/b/catalog", "https://i.redd.it/ldxne6s0coi41.jpg", "https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/95319/90832f52-855a-41b7-830d-f9297b64d213.jpg"];

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
  let {guild} = message;
  if (message.content.startsWith(`${PREFIX}help`)) {
    message.channel.send(COMMANDS.join(", "));
    console.log("i do nothing lol");
  } else if (message.content.startsWith(`${PREFIX}ping`)) {
    message.channel.send("@everyone");
    console.log("pinged everyone");
  } else if (message.content.startsWith(`${PREFIX}lol`)) {
     for (var i = 0; i < 5; i++) {
       message.channel.send("lol");
     }
    console.log("LOL");
  } else if (message.content === '!ping') {
    message.channel.send('pong');
    console.log('pong');
  } else if (message.content === '!anus ping') {
    message.channel.send('pong');
    console.log('pong');
  } else if (message.content.includes('deez ')) {
    message.channel.send('deeznuts lol');
    console.log("deez nuts lol");
  } else if (message.content.includes('anusO1')) {
    message.channel.send('anus is a cool man');
    console.log('i said you are cool');
  } else if (message.content.includes("ritish")) {
    message.channel.send("OI MAYTE I AM BRI'ISH AND I HAF MAFS IN ME SKEWL");
    console.log("british people roasted");
  } else if (message.content.includes("scot")) {
	message.channel.send("OI MAYTE WE HAF BAGPIPES 'N MAFS IN ME SKEWL");
	console.log("scottish people roasted");
  } else if (message.content.startsWith(`${PREFIX}messages`)) {
 	message.channel.send(messages);
  } else if (message.content.startsWith(`${PREFIX}random`)) {
	var randomOutput = random[Math.floor(Math.random() * random.length)];
	message.channel.send(randomOutput);
	console.log("random");
  } else {
    console.log(`message number ${messages} in ${guild.name}`);
  }
});

client.login(TOKEN);
