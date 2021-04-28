#!/bin/sh

sudo apt update && sudo apt upgrade
sudo apt install npm
sudo apt install nodejs
sudo npm install disord.js
sudo npm install ytdl-core
echo "Starting bot"
node main.js
