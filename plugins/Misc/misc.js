exports.commands = [
	"chuckNorris",
]

//a collection of simple self contained commands with no dependencies beyond request

exports.chuckNorris = {
	usage: "<joke>",
	description: "gives a random Chuck Norris joke",
	process: function(bot, msg, suffix) {
		require("request")("http://api.icndb.com/jokes/random",
		function(err, res, body) {
			var data = JSON.parse(body);
			if (data && data.value && data.value.joke) {
			msg.channel.sendMessage(data.value.joke)
			}
		});
	}
}