const { Command } = require('discord-akairo');

class UserInfoCommand extends Command {
    constructor() {
        super('userinfo', {
            aliases: ['userinfo', 'info'],
            // description: 'Affiche les infos du user'
            //ignoreCooldown: '306841509314166785',
            //ignorePermissions: '306841509314166785',
            userPermissions: 'KICK_MEMBERS',
            clientPermissions: 'KICK_MEMBERS',
            //rateLimit: 1,
            cooldown: 5000,
            typing: true,
            ownerOnly: true,
            channel: 'guild',
        });
    }

    exec(message){
        return message.reply('salut ! je suis Loggy')
    }
}

module.exports = UserInfoCommand;