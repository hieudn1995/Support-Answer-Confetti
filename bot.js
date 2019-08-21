const Discord = require('discord.js');

const client = new Discord.Client();

const args = message.content.trim().split(/ +/g);

client.on('ready', () => { // know if our bot is online

    console.log('I am ready!');

});

 

client.on('message', message => { // When the message a message is executed

    if (message.content === 'ping') { // if that message matches ping

       message.reply('pong'); // 

       }

});
// Defining the question...
let question = [];

for (let i = 1; i < args.length; i++) {
  if (args[i].startsWith('"')) break;
  else question.push(args[i]);
}

question = question.join(' ');

// Defining the choices...
const choices = [];

const regex = /(["'])((?:\\\1|\1\1|(?!\1).)*)\1/g;
let match;
while (match = regex.exec(args.join(' '))) choices.push(match[2]);

// Creating and sending embed...
let content = [];
for (let i = 0; i < choices.length; i++) content.push(`${options[i]} ${choices[i]}`);
content = content.join('\n');

var embed = new Discord.RichEmbed()
  .setColor('#8CD7FF')
  .setTitle(`**${question}**`)
  .setDescription(content);

message.channel.send(`:bar_chart: ${message.author} started a poll.`, embed)
  .then(async m => {
    for (let i = 0; i < choices.length; i++) await m.react(options[i]);
  });
 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where
