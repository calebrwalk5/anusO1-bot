/*
anusO1#6969 made this terrible bot
Huge shoutout to Stack Overflow
*/

// Declare variables and constants 

const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const TOKEN = "your-token-here";
const PREFIX = "!anus ";
const COMMANDS = ["`!anus in front of commands`", "`help`", "`ping`", "`avatar`", "`coinflip`", "`lol`", "`messages`", "`random`", "`meme`", "`dababy`"];
const random = ["http://www.stealthboats.com/", "https://bitwave.tv/", "https://templeos.org/", "https://codeelegant.github.io/", "https://puginarug.com/", "https://longdogechallenge.com/", "https://hooooooooo.com/", "http://162.191.232.173:81/live/index.html?Language=0", "http://111111111111111111111111111111111111111111111111111111111111.com/", "https://www.facinghistory.org/resource-library/gallery/pre-war-sighet-visual-essay", "http://endless.horse/", "https://thatsthefinger.com/", "http://beesbeesbees.com/", "https://en.wikipedia.org/wiki/Oy_vey", "https://www.recipetineats.com/wp-content/uploads/2014/05/Homemade-Heinz-Baked-Beans_0-SQ.jpg", "https://boards.4chan.org/b/catalog", "https://i.redd.it/ldxne6s0coi41.jpg", "https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/95319/90832f52-855a-41b7-830d-f9297b64d213.jpg", "https://miro.medium.com/max/3840/1*cbiq9DqLP_UEVqIOBb6MqQ.jpeg", "https://www.geeksforgeeks.org/playing-star-wars-in-command-prompt/"];
const memes = ["https://i.kym-cdn.com/entries/icons/original/000/022/081/shit.jpg", "https://cdn.discordapp.com/attachments/712740930456649839/814281461293121576/hentai.mp4", "https://metro.co.uk/wp-content/uploads/2019/08/PRI_81815498.jpg?quality=90&strip=all&zoom=1&resize=480%2C252", "https://i.4cdn.org/b/1619208345070.png", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F826115210981236736%2FXPMIs2Qi.jpg&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2F0esqc3ocptg21.jpg&f=1&nofb=1", "https://makeawebsitehub.com/wp-content/uploads/2017/08/ouaismaisbon-1024x481.jpg", "https://inktank.fi/wp-content/uploads/2014/05/weirdwebsites.jpg", "https://media.discordapp.net/attachments/813781764592893963/813815048471445534/image0.jpg", "https://media.discordapp.net/attachments/776865442195046421/835119386653622302/image0.png?width=973&height=543", "https://media.discordapp.net/attachments/776865442195046421/834631238915850290/IMG_20210421_232504_593.jpg?width=651&height=543", "https://media.discordapp.net/attachments/776865442195046421/834267365969100830/IMG_20210420_183503_673.jpg?width=820&height=543", "https://media.discordapp.net/attachments/776865442195046421/833790805662498887/IMG_20210419_154540_381.jpg?width=473&height=543", "https://media.discordapp.net/attachments/776865442195046421/832748416076480562/Capture_2020-05-27-15-51-27.png?width=642&height=543", "https://media.discordapp.net/attachments/776865442195046421/832425980953755688/image0-23.png?width=708&height=543", "https://media.discordapp.net/attachments/776865442195046421/832242018528788531/IMG_20210414_221325_782.jpg", "https://media.discordapp.net/attachments/776865442195046421/831724887025385522/IMG_20210413_225734_848.jpg", "https://media.discordapp.net/attachments/777918623293374474/835150714547863595/FB_IMG_1619011331967.jpg?width=527&height=543", "https://media.discordapp.net/attachments/777918623293374474/834800755097337906/IMG_20210422_103952.jpg", "https://cdn.discordapp.com/attachments/777918623293374474/834752903809597440/Screenshot_20210422-070125.png", "https://media.discordapp.net/attachments/777918623293374474/833509132345933864/image0.png?width=675&height=543", "https://media.tenor.co/videos/438945218d708b6fe6d2f542d299f7a5/mp4", "https://youtu.be/6KfAJ1CS4LI", "https://media.discordapp.net/attachments/777918623293374474/835150714547863595/FB_IMG_1619011331967.jpg?width=527&height=543", "https://media.discordapp.net/attachments/777918623293374474/835139631417786428/image0.png?width=584&height=543", "https://cdn.discordapp.com/attachments/777918623293374474/835896175608987669/video0.mp4", "https://media.discordapp.net/attachments/777918623293374474/833509020286320650/D1SGGAEbKyZ1BKzQh1cVHTEvQwIFRmRhzUtFyymlnR8.png?width=410&height=543", "https://media.discordapp.net/attachments/776865442195046421/835266189429178378/Snapchat-1168544652.jpg?width=792&height=543", "https://media.discordapp.net/attachments/787459728031612948/787459814523273276/new_joe_bidome.png?width=965&height=543", "https://media.discordapp.net/attachments/762001219308224522/835269725574922310/image0.png?width=316&height=543", "https://img.17qq.com/images/gmcdgnmpdcv.jpeg", "https://youtu.be/6KfAJ1CS4LI", "https://cdn.discordapp.com/attachments/722716211208650809/834176149482373180/How_To_Be_Funny.mp4", "https://cdn.discordapp.com/attachments/776865442195046421/835287628991561808/Screenshot_20210423-185400.png"];
const JELLY = "328731272497201154";

var messages = 0;
var coinflip = 0;
var coinflipout = " ";
var randomMeme = 0;

// Initialize the bot

client.on('ready', ready => {
  ready();
});

// New user

client.on('guildMemberAdd', newuser => {
	if(newuser.id === JELLY) {
		console.log("jellyman is here");
	} else {
		console.log("new user");
	}
});

// Message/command interactions

client.on('message', message => { // i know, i know. i'm a bad programmer for doing this
  messages++;
  let {guild} = message;
  if (message.content.startsWith(`${PREFIX}help`)) {
	  message.channel.send(COMMANDS.join(", "));
	  console.log("help command given");
  } else if (message.author === JELLY) {
	  console.log("jelly sent a message");
  } else if (message.content.startsWith(`${PREFIX}banjelly`)) {
	  console.log("ban jelly command given");
	  killjelly();
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
  } else if (message.content.startsWith(`${PREFIX}coinflip`)) {
	  flipcoin();
	  message.channel.send(coinflipout);
  } else if (message.content.startsWith(`${PREFIX}random`)) {
	var randomOutput = random[Math.floor(Math.random() * random.length)];
	message.channel.send(randomOutput);
	console.log("random");
  } else if (message.content.startsWith(`${PREFIX}meme`)) {
	  meme();
	  message.channel.send(randomMeme);
  } else if (message.content.includes(`${PREFIX}dababy`)) {
  	message.channel.send("https://media.discordapp.net/attachments/834219505621270568/835686178056568852/download_2.jpeg");
	message.channel.send("LESS GOO");
  } else if (message.content.includes("pog")) {
	  message.channel.send(":O");
	  console.log("poggers");
  } else if (message.content.startsWith(`${PREFIX}avatar`)) {
	  message.channel.send(message.author.avatarURL());
	  message.channel.send(`weird avatar ${message.author}`);
  } else if (message.content.startsWith(`${PREFIX}`)) {
	  message.channel.send("Invalid command. I'm a shitposter, not a mind reader");
	  console.log("Invalid command");
  } else if (message.content.includes("gun")) { 
	  message.channel.send("you got a GUN??? get off the social media and see who can really trap");
	  console.log("UK drill joke");
  } else if (message.content.includes("drill")) {
	  message.channel.send("you drilin' bruv?");
	  console.log("drill");
  } else if (message.content.includes("blood")) {
	  message.channel.send("FUCK BLOODS");
	  console.log("gang war");
  } else if (message.content.includes("crip")) {
	  message.channel.send("fuck CRIPS, we kill CRIPS");
	  console.log("gang war");
  } else if (message.content.includes("gang")) {
	  message.channel.send("my GANG can fight your GANG, west side for life");
	  console.log("gang war");
  } else if (message.content.includes("among us")) {
	  message.channel.send("amogus");
} else {
	console.log(`${message.author} ${guild.name}`);
}
});

// Functions

function ready() {
	console.log('Bot built by anusO1#6969');
	console.log("ready");
	for (;;) {
		cycle();
		function cycle() {
			setTimeout (function() {
				client.user.setPresence({ activity: { name: "!anus", type: "LISTENING" }, status: "online" }); 
				console.log("status change");
				}, 5000);
			client.user.setPresence({ activity: { name: "anusO1 bot", type: "WATCHING" }, status: "dnd" });
			console.log("status change");
		}
	}
}

function flipcoin() {
	coinflip = Math.random() * (100 - 0);
	if (coinflip < 50) {
		console.log("heads");
		coinflipout = "heads";
	} else {
		console.log("tails");
		coinflipout = "tails";
	}
}

function meme() {
	randomMeme = memes[Math.floor(Math.random() * memes.length)];
	console.log("random meme");
}

function killjelly() {
	console.log("killing jelly");
	JELLY.send("banned.");
	JELLY.ban({reason: "the bot did it, not a user. xd"});
}

// Bot login

client.login(TOKEN);
