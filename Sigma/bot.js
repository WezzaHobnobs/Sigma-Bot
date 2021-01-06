const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('Sigma Here.');

});

 

client.on('message', message => {

    if (message.content === 'ult') {

       message.reply('WHAT IS THAT MELODY!');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.Nzk2MTc0MDUwNTY4OTYyMDU4.X_UE3Q.YTC3PsN2RFLLeSNIx6rZsNz0NUA);