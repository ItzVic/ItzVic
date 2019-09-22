const Discord = require('discord.js');
const bot = new Discord.Client();

client.login("NTg3MjY4OTg4MzU5NDA5NjY1.XP0V7g.e5yUp1Q9EjOiFcvnYjcDiD4nMo0");

const PREFIX = '-';

client.on('ready', () =>{
    console.log('This bot is online!')
})

client.on('message', message =>{
let args = message.content.substring(PREFIX.length).split(" ");

client.login(process.env.BOT_TOKEN);
