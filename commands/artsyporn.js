const Discord = require('discord.js'); const { Command } = require('discord.js-commando')
const randomPuppy = require('random-puppy');


module.exports = class ArtsyPornCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'artsyporn',
            aliases: ['artsy'],
            group: 'nsfw',
            memberName: 'artsyporn',
            guildOnly: true,
            description: 'Finds artsy..? Porn?? For you!',
            details: 'This command can only be used in NSFW channels!',
            examples: ['~artsyporn'],
            throttling: {
                usages: 1,
                duration: 3
            }
        });
    }

    run(message) {
        var errMessage = errors[Math.round(Math.random() * (errors.length - 1))];
        if (!message.channel.nsfw) {
            message.react('💢');
            return message.channel.send(errMessage);
        }

        randomPuppy('SexyButNotPorn')
            .then(url => {
                const embed = new Discord.MessageEmbed()
                    .setFooter(`ArtsyPorn`)
                    .setDescription(`[Image URL](${url})`)
                    .setImage(url)
                    .setColor('#A187E0');
                return message.channel.send({ embed });
            })
    }
}
