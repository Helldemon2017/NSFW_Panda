const { CommandoClient } = require('discord.js-commando')
const path = require('path');
const client = new CommandoClient({
    commandPrefix: 's.',
    owner: ['365644930556755969'],
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

    client.on('ready', () => {
        console.log('Logged in!');
        client.user.setActivity('and Watching');
    });

    client.login('config.token');
