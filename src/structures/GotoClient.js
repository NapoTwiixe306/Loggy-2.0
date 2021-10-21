const { AkairoClient, CommandHandler, ListenerHandler } = require("discord-akairo");

module.exports = class GotoCLient extends AkairoClient {
    constructor(config = {}) {
        super(
            {ownerID: ['306841509314166785', '358194448812736512']},
            {
                allowedMentions: {
                    parse: ['roles', 'everyone', 'users'],
                    repliedUser: false
                },
                partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
                presence: {
                    status: 'online',
                    activities: [
                        {
                            name: 'Loggy 2.0',
                            type: 'STREAMING',
                            url: 'https://www.youtube.com/watch?v=QROw3cZtiDk'
                        }
                    ]
                },
                intents: 32767
            }
        );

        this.CommandHandler = new CommandHandler(this, {
            allowMention: true,
            prefix: config.prefix,
            defaultCooldown: 2000,
            directory: './src/commands/'
        });

        
        this.listenerHandler = new ListenerHandler(this, {
            directory: './src/listeners'
        })

        this.CommandHandler.loadAll();
        this.CommandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.loadAll();
    }
}