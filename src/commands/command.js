const { Command } = require('discord-akairo');
const { MessageEmbed } = require('discord.js');

class helpCommand extends Command {
    constructor() {
        super('commandes', {
            aliases: ['commandes']
        });
    }

    exec(message) {
        const embed = new MessageEmbed()
            .setColor('YELLOW')
            .setTitle("Voici la liste des commandes disponible")
            .setDescription("Toutes les commandes commencer par un ?, exemple, ?bonjour")
            .addField('bonjour', 'Dites Bonjour au bot')
            .addField('embed', 'Vous donne un Embed Aléatoire')
            .addField('Titre 3', 'Valeur 3')

        return message.channel.send({ embeds: [ embed ]});
        }
}

module.exports = helpCommand;