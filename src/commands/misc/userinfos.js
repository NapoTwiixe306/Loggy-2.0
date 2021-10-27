const { Command } = require('discord-akairo');

class UserInfoCommand extends Command {
    constructor() {
        super('userinfo', {
            aliases: ['userinfo', 'info']
            //description: 'Affiche les infos du user'//
            
        });
    }

    exec(message) {
        return message.reply('Salut');
        }
}

module.exports = UserInfoCommand;