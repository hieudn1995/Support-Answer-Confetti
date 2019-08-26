const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!args) return message.reply("You must have something to vote for!")
  if (!message.content.includes("?")) return message.reply("Include a ? in your vote!")
    message.channel.send(`:ballot_box:  ${message.author.username} started a vote! React to my next message to vote on it. :ballot_box: `);
    const pollTopic = await message.channel.send(`${args}`);
    pollTopic.react(`1`);
    pollTopic.react(`2`);
};
 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where
