const Discord = require('discord.js'); const { Command } = require('discord.js-commando')
const randomPuppy = require('random-puppy');


module.exports = class AsianCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'asian',
            group: 'nsfw',
            memberName: 'asian',
            guildOnly: true,
            description: 'Finds...asians?????...for??? you?!?!?!!',
            details: 'This command can only be used in NSFW channels!',
            examples: ['~asian'],
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

        var subreddits = [
            'AsianHotties',
            'juicyasians',
            'asianbabes'
        ]

        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

        randomPuppy(sub)
            .then(url => {
                const embed = new Discord.MessageEmbed()
                    .setFooter(`asian`)
                    .setDescription(`[Image URL](${url})`)
                    .setImage(url)
                    .setColor('#A187E0');
                return message.channel.send({ embed });
            })
    }
}
