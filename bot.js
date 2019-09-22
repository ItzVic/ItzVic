const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTg3MjY4OTg4MzU5NDA5NjY1.XP0V7g.e5yUp1Q9EjOiFcvnYjcDiD4nMo0';

const PREFIX = '-';

bot.on('ready', () =>{
    console.log('This bot is online!')
})

bot.on('message', message =>{
let args = message.content.substring(PREFIX.length).split(" ");

switch(args[0]){
 case 'ping':
    message.channel.sendMessage('pong')
    break;
    case 'website':
        message.channel.sendMessage('https://youtube.com/ItzVic')
        break;
            case "info":
                message.channel.sendMessage('what you wanna know kid')
                break;
                case "hi":
                    message.channel.sendMessage('hey kids') 
                break;  
                case 'truth':
                    message.channel.sendMessage('the person below is gay')
                break;
            case 'profile':
                const embed = new Discord.RichEmbed()
                .addField ('player name', message.author.username);
                message.channel.sendEmbed (embed);
                break;
                case 'eddisgay':
                    message.channel.sendMessage ('yes bro I agree')
                    break;
}
})

bot.login (token);

client.login(process.env.BOT_TOKEN);
