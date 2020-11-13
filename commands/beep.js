module.exports = {
    name: 'beep',
    description: 'Boop!',
    execute(client, message, args) {
		message.channel.send(`BOOP!`);
		console.log('Beep command used');
    },
};