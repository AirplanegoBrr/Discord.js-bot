module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(client, message, args) {
        message.channel.send(`Pong! Ping1 is ${Date.now() - message.createdTimestamp}ms. Ping2 is ${Math.round(client.ws.ping)}ms`);
        console.log('Ping Command used!');
    },
};