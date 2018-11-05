const Discord = require('discord.js'); const { Command } = require('discord.js-commando')
const randomPuppy = require('random-puppy');


module.exports = class BaraCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'bara',
            group: 'nsfw',
            memberName: 'bara',
            guildOnly: true,
            description: 'Finds bara...? For you!',
            details: 'This command can only be used in NSFW channels!',
            examples: ['~bara'],
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

        randomPuppy('baramanga')
            .then(url => {
                const embed = new Discord.MessageEmbed()
                    .setFooter(`bara`)
                    .setDescription(`[Image URL](${url})`)
                    .setImage(url)
                    .setColor('#A187E0');
                return message.channel.send({ embed });
            })
    }
}
