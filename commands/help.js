module.exports = {
    name: 'help',
    description: 'Shows help menu',
    execute(client, message, args) {
        message.channel.send("Help - Shows this! \nPing - PONG! Shows the bots ping! \nServer - Shows info about the server your in!");
        console.log('Help command used!');
    },
};