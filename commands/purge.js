exports.run = (bot, message, args) => {
  var amount = parseInt(args[1]);
		msg.channel.fetchMessages({limit: amount})
		.then(messages => {
			messages.map(msg => msg.delete().catch(console.error) );
		}).catch(console.error);
}