module.exports = {
    name: 'server',
    description: 'Shows server info!',
    execute(client, message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
		console.log('Server command used!');
    },
};