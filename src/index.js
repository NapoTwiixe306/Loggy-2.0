const { TOKEN } = require('./util/config.json')
const GotoCLient = require('./structures/GotoClient');

let client = new GotoCLient({
    prefix: '?'
});

client.login(TOKEN);