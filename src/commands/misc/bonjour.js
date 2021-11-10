const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('bonjour', {
            aliases: ['bonjour']
        });
    }

    exec(message) {
        return message.reply('wsh mec')
    }
}

module.exports = PingCommand;