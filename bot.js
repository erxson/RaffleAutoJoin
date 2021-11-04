const tmi = require('tmi.js');
require('dotenv').config();
const client = new tmi.Client({
	options: { debug: false },
	identity: {
		username: process.env.username,
		password: process.env.password
	},
	channels: [ process.env.channel ]
});
client.connect();
client.on('message', (channel, tags, message) => {
	if (tags.username === 'streamelements' && message.includes("a Multi-Raffle has begun for"/* + process.env.username.toLowerCase()*/)) {
		console.log('********* RAFFLE STARTED *********', process.env.username);
        time.sleep(1)
		client.say(channel, "!join");  // for now
	};
    if (tags.username === 'streamelements' && message.includes("The Multi-Raffle has ended and") && message.includes(process.env.username.toLowerCase())) {
		console.log('********* WON *********', process.env.username);
		client.say(channel, "ez");
	};

});

