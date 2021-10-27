const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('bonjour', {
            aliases: ['bonjour']
        });
    }

    exec(message) {
        return message.reply('Bonjour jeune aventurier')
    }
}

module.exports = PingCommand;