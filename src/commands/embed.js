const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class EmbedCommand extends Command {
    constructor() {
        super('embed', {
            aliases: ['embed']
        });
    }

    exec(message) {
        const embed = new MessageEmbed()
            .setColor('RED')
            .setDescription("Loggy 2.0 petit frère de Loggy")
            .addField('Titre 1', 'Valeur 1')
            .addField('Titre 2', 'Valeur 2')
            .addField('Titre 3', 'Valeur 3')

        return message.channel.send({ embeds: [ embed ]});
        }
}

module.exports = EmbedCommand;