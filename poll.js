const Discord = require('discord.js');

exports.run = async (client, message, args, tool) => {

  if (!message.member.roles.find(r => r.name === 'roleName')) return message.channel.send('This require the role: rolename');
  
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This require the permission: ADMINISTRATOR');
  
  if (!args[0]) return.channel.send('Proper usage: <prefix> Poll question');
  
  const embed = new Discord.MessageEmbed()
    .setColor(0xffffff)
    .setfooter('React to vote'.
    .setDescription(args.join(' '))
    .setTitle('Poll Created by ${message.author.username}');
    
  let msg = await message.channel.send(embed);
   
  await msg.react('1');
  await msg.react('2');
  
  message.delete({timeout: 1000});
  
  }
client.login(process.env.BOT_TOKEN);//where
