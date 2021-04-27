/* 
 * Written by calebrwalk5 (aka anusO1#6969)
*/

// Declare variables 

const Discord = require('discord.js');
const TOKEN = 'token-here';
const PREFIX = '!anus ';
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const queue = new Map();

// Client activity

client.on("ready", () => {
	console.log("The bot is online pog");
	client.user.setActivity('you piss', { type: 'WATCHING' });
});

client.on("reconnecting", () => {
	console.log("reconnecting...");
});

client.on("disconnect", () => {
	console.log("disconnect");
});

// Message functions

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;
  const serverQueue = queue.get(message.guild.id);
  if (message.content.startsWith(`${PREFIX}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${PREFIX}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${PREFIX}stop`)) {
    stop(message, serverQueue);
    return;
  } else {
    message.channel.send("invalid command dumbass");
  }
});

// General functions

async function execute(message, serverQueue) {
  const args = message.content.split(" ");
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send("join vc");
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send("missing permissions");
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
   };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);
    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} added to queue`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send("join vc");
  if (!serverQueue)
    return message.channel.send("no songs to skip");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send("join vc");
    
  if (!serverQueue)
    return message.channel.send("no songs to stop");
    
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`playing: **${song.title}**`);
}

// Login

client.login(TOKEN);
