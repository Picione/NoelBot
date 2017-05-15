var fs = require('fs');
var request = require("request");

try {
	var Discord = require("discord.js");
} catch (e){
	console.log(e.stack);
	console.log(process.version);
	console.log("Please run npm install and ensure it passes with no errors!");
	process.exit();
}
console.log("Starting DiscordBot\nNode version: " + process.version + "\nDiscord.js version: " + Discord.version);



// Get authentication data
try {
	var AuthDetails = require("./token.json");
} catch (e){
	console.log("Please create an token.json with a bot token or an email and password.\n"+e.stack);
	process.exit();
}
try {
	var passive = require("./passive.js");
} catch (e)
{
	console.log("Error in loading Passive function.\n"+e.stack);
}

try {
	var buff = require("./buff.js");
} catch (e)
{
	console.log("Error in loading Buff function.\n"+e.stack);
};

try {
	var ai = require("./ai.js");
} catch (e)
{
	console.log("Error in loading AI function.\n"+e.stack);
};

try {
	var active = require("./active.js");
} catch (e)
{
	console.log("Error in loading Skill function.\n"+e.stack);
};

try {
	var enhance = require("./enhance.js");
} catch (e)
{
	console.log("Error in loading SP function.\n"+e.stack);
};
// Load Variables
var alphabet = ["**A** ", "**B** ", "**C** ", "**D** ", "**E** ", "**F** ", "**G** ", "**H** ", "**I** ", "**J** ", "**K** ", "**L** ", "**M** ", "**N** ", "**O** ", "**P** ", "**Q** "];

var dictUrl = "https://picione.github.io/bravefrontier_data/dictionary.json";

var itemGLurl = "http://picione.github.io/bravefrontier_data/items.json";

var itemJPurl = "http://picione.github.io/bravefrontier_data/jp/items_light.json";

var esGLurl = "http://picione.github.io/bravefrontier_data/es.json";

var esJPurl = "http://picione.github.io/bravefrontier_data/jp/es.json";

var infoJPurl = "http://picione.github.io/bravefrontier_data/jp/info.json";

var deJPurl = "http://picione.github.io/bravefrontier_data/jp/feskills.json";

var deEUurl = "http://picione.github.io/bravefrontier_data/eu/feskills.json";

var deGLurl = "http://picione.github.io/bravefrontier_data/feskills.json";

var aiJPurl = "http://picione.github.io/bravefrontier_data/jp/ai.json";

var itemGL;

var itemJP;

var itemUni = [];

var esGL;

var esJP;

var esUni = [];

var infoJP;

var deJP;

var deEU;

var deGL;

var dictGL;

var de = [];

var unitListAll;

var unitTemp = [];

var uLJPCount = 0;

var fsAPI = "https://www.googleapis.com/fusiontables/v2/";

var queryFX = "query?sql=";

var keyFX = "&key=";

var indexTXT="Undefined effect(s)[";

var bbArray=["bb","sbb","ubb"];

try {
	var JP = require("./jp.js");
} catch (e)
{
	console.log("catchError");
};

try {
	var EU = require("./eu.js");
} catch (e)
{
	console.log("catchError");
};

try {
	var GL = require("./gl.js");
} catch (e)
{
	console.log("catchError");
};

var spambypass = false;
var shrug = "¯\_(ツ)_/¯";
var hug = "༼ つ ͡ ͡° ͜ ʖ ͡ ͡° ༽つ";
var hurt = "(っ- ‸ – ς)";
var cooldown = 10000;

// Load custom permissions
var master = "161845421545750529";
var dangerousCommands = ["pullanddeploy","setUsername","refresh","say","setGame","give","take","workhard","relax","time","spammer","nameid"];
var Permissions = {};
try{
	Permissions = require("./permissions.json");
} catch(e){
	console.log("catchError");
	Permissions.global = {};
	Permissions.users = {
		
	};
}

for( var i=0; i<dangerousCommands.length;i++ ){
	var cmd = dangerousCommands[i];
	if(!Permissions.global.hasOwnProperty(cmd)){
		Permissions.global[cmd] = false;
	}
}

Permissions.checkPermission = function (user,permission){
	try {
		var allowed = true;
		try{
			if(Permissions.global.hasOwnProperty(permission)){
				allowed = Permissions.global[permission] === true;
			}
		} catch(e){}
		try{
			if(Permissions.users[user.id].hasOwnProperty(permission)){
				allowed = Permissions.users[user.id][permission] === true;
			}
		} catch(e){}
		return allowed;
	} catch(e){}
	return false;
}
fs.writeFile("./permissions.json",JSON.stringify(Permissions,null,2));

//load config data
var Config = {};
try{
	Config = require("./config.json");
} catch(e){ //no config file, use defaults
	Config.debug = false;
	Config.commandPrefix = '.';
	try{
		if(fs.lstatSync("./config.json").isFile()){
			console.log("WARNING: config.json found but we couldn't read it!\n" + e.stack);
		}
	} catch(e2){
		fs.writeFile("./config.json",JSON.stringify(Config,null,2));
	}
}
if(!Config.hasOwnProperty("commandPrefix")){
	Config.commandPrefix = '!';
}

var messagebox;
var aliases;
try{
	aliases = require("./alias.json");
} catch(e) {
	//No aliases defined
	aliases = {};
}

var playerids;
try{
	playerids = require("./saveid.json");
} catch(e) {
	//No aliases defined
	playerids = {};
}

var unitalias;
try{
	unitalias = require("./nickname.json");
} catch(e) {
	//No aliases defined
	unitalias = {};
}

function findUnit(suffix) { 
	if (!suffix) {
		return "notfound";
	}
	var sTxt = "";
	var sNum = suffix.split(" ")[suffix.split(" ").length-1];
	if (isNaN(sNum) == false) {
		for (i=0;i<suffix.split(" ").length-1;i++){
			sTxt+=suffix.split(" ")[i];
			if (i<suffix.split(" ").length-2)
				sTxt+=" ";
		}
	} else {
		sNum = 0;
		for (i=0;i<suffix.split(" ").length;i++){
			sTxt+=suffix.split(" ")[i];
			if (i<suffix.split(" ").length-1)
				sTxt+=" ";
			}
		}
	var sBoth = true;
	if (sNum == 0) {
		sBoth = false;
	}
	var sGL = 0;
	var sEU = 0;
	var sJP = 0;
	if (sTxt.indexOf(".gl") != -1) {
		sGL = 1;
		sTxt = sTxt.replace(/.gl/g,"");
	}
	if (sTxt.indexOf(".eu") != -1) {
		sEU = 1;		
		sTxt = sTxt.replace(/.eu/g,"");
	}
	if (sTxt.indexOf(".jp") != -1) {
		sJP = 1;
		sTxt = sTxt.replace(/.jp/g,"");
	}
	var sServer = sGL + sEU + sJP;
	if ((sTxt.length <= 2) && (sTxt != "id")){
		return "short";
	}
	if (sServer>1) {
		return "notfound";
	} else {
	if (sBoth){
		if (sTxt == "id"){
			for (i=0;i<unitListAll["rows"].length;i++) {
				if (unitListAll["rows"][i][0] == sNum) {
					var sRe = i;
					var sRef = unitListAll["rows"][i][1];
					var sID = unitListAll["rows"][i][0];
					if ((sGL === 1) && (sID >= 8000)) {
						break;
					} else if ((sEU === 1) && (sID >= 7000 && sID < 8000)) {
						break;
					} else if ((sServer === 0) || ((sJP === 1) && (sID < 7000))) {
						break;
					} else {
						sRe	= "";
						sRef = "";
						sID = "";
					}					
				}
			}
		} else 	{
			for (i=0;i<unitListAll["rows"].length;i++) {
				var addSTR = "";
				if (unitalias[unitListAll["rows"][i][0]])
					addSTR = unitalias[unitListAll["rows"][i][0]];
				var searchSTR = unitListAll["rows"][i][2] + addSTR;
				if ((searchSTR.toLowerCase().indexOf(sTxt.toLowerCase()) != -1) && (sNum == unitListAll["rows"][i][3])) {
					var sRe = i;
					var sRef = unitListAll["rows"][i][1];
					var sID = unitListAll["rows"][i][0];
					if ((sGL === 1) && (sID >= 8000)) {
						break;
					} else if ((sEU === 1) && (sID >= 7000 && sID < 8000)) {
						break;
					} else if ((sServer === 0) || ((sJP === 1) && (sID < 7000))) {
						break;
					} else {
						sRe	= "";
						sRef = "";
						sID = "";
					}					

				}
			}
		}
	} else {
		for (i=unitListAll["rows"].length-1;i>=0;i--) {
			var addSTR = "";
			if (unitalias[unitListAll["rows"][i][0]])
				addSTR = unitalias[unitListAll["rows"][i][0]];
			var searchSTR = unitListAll["rows"][i][2] + addSTR;
			if (searchSTR.toLowerCase().indexOf(sTxt.toLowerCase()) != -1) {
					var sRe = i;
					var sRef = unitListAll["rows"][i][1];
					var sID = unitListAll["rows"][i][0];
					if ((sGL === 1) && (sID >= 8000)) {
						break;
					} else if ((sEU === 1) && (sID >= 7000 && sID < 8000)) {
						break;
					} else if ((sServer === 0) || ((sJP === 1) && (sID < 7000))) {
						break;
					} else {
						sRe	= "";
						sRef = "";
						sID = "";
					}					
			}
		}
	}}
	if (sRe && sRef && sID)
		return [sRe,sRef,sID]
	else
		return "notfound";
}	

var commands = {
	"refresh": {
        usage: "<database>:ul|infojp|dejp|degl|deeu|esjp|esgl|itjp|itgl",
        description: "Bot Refresh Source Data. Without suffix Noel will reload all data.",
        process: function(bot,msg,suffix){
        bot.user.setGame("with documents");
  		if ((!suffix) || (suffix.toLowerCase() == "ul")){
  		request({
    			url: fsAPI + queryFX + "SELECT 'ID','SystemID','Name','Rarity','Series', 'Leader Skill', 'BB Skill', 'BB Hits', 'BB Fill', 'BB DC', 'SBB Skill', 'SBB Hits', 'SBB Fill', 'SBB DC', 'UBB Skill', 'UBB Hits', 'UBB Fill', 'UBB DC', 'Passive Skill', 'Passive Condition' FROM " + AuthDetails.fsTable + keyFX + AuthDetails.fsKey,
    			json: true
			}, function (error, response, body) {
  		if (error) {
	  		console.log("Error at Getting All Unit List");
		}
  		if (!error && response.statusCode == 200) {
			unitListAll = body;
			if (JP)
		  		for (var key in JP.miss) {
			  var tempFound = false;
			  for (i=0;i<unitListAll["rows"].length;i++){
				  if (key == unitListAll["rows"][i][0])
					  tempFound = true;
			  }
			  if (!tempFound) {
				  var j = unitListAll["rows"].length;
				  unitListAll["rows"][j] = JP.miss[key];
				  if (unitListAll["rows"][j][2].indexOf(JP.missname[key][2]) == -1)
				  	unitListAll["rows"][j][2]+=" "+JP.missname[key][2];
			  }
		  	}
	  		if (GL)
				for (var key in GL.miss) {
					var tempFound = false;
			  	for (i=0;i<unitListAll["rows"].length;i++){
					if (key == unitListAll["rows"][i][0])
					  tempFound = true;
			  	}
			  	if (!tempFound) {
				  	unitListAll["rows"][unitListAll["rows"].length] = GL.miss[key];
			  	}
		  	}
	  		if (EU)
		  		for (var key in EU.miss) {
			  		var tempFound = false;
			  		for (i=0;i<unitListAll["rows"].length;i++){
				  		if (key == unitListAll["rows"][i][0])
					  		tempFound = true;
			  		}
			  		if (!tempFound) {
				  		unitListAll["rows"][unitListAll["rows"].length] = EU.miss[key];
			  		}
		  		}
			bot.user.setGame("with Summoners' mind");
			console.log("Success at Getting All Unit List");
		}
  		});
  		}
  		if ((!suffix) || (suffix.toLowerCase() == "itgl")){
  			request({
    			url: itemGLurl,
    			json: true
			}, function (error, response, body) {
  				if (error) {
					console.log("Error at Getting itemGL");
  				}
  				if (!error && response.statusCode == 200) {
      				itemGL = body;
	  				if (itemUni != [])	 { 	  
	 	  for (var key in itemGL) {
			if (itemUni[key]) {
				itemUni[key]["nameGL"] = itemGL[key]["name"];
			} else { 
				itemUni[key] = itemGL[key];
				itemUni[key]["nameGL"] = itemGL[key]["name"];
			}
		  }
	 } else {
	 	itemUni = body;
	 	  for (var key in itemGL) {
				itemUni[key]["nameGL"] = itemGL[key]["name"];
		  }
		
	 }
	  console.log("Success at Getting itemGL"); // Show the HTML for the Google homepage.
  }
  });
  }
  if ((!suffix) || (suffix.toLowerCase() == "dictionary")){
  request({
    			url: dictUrl,
    			json: true
			}, function (error, response, body) 
			{
  if (error) {
	  console.log("Error at Getting Global Dictionary");
  }
  if (!error && response.statusCode == 200) {
      dictGL = body;
	  console.log("Success at Getting Global Dictionary"); // Show the HTML for the Google homepage.
  }
  });
  }
  if ((!suffix) || (suffix.toLowerCase() == "itjp")){
  request({
    			url: itemJPurl,
    			json: true
			}, function (error, response, body) 
			{
  if (error) {
	  console.log("Error at Getting itemJP");
  }
  if (!error && response.statusCode == 200) {
      itemJP = body;
	  if (itemUni != [])
	 { 	  
	 	  for (var key in itemJP) {
			if (itemUni[key]) {
				itemUni[key]["nameJP"] = itemJP[key]["name"];
			} else {
				itemUni[key] = itemJP[key];
				itemUni[key]["nameJP"] = itemJP[key]["name"];
			}
		  }
	 } else {
	 	itemUni = body;
	 	  for (var key in itemJP) {
				itemUni[key]["nameJP"] = itemJP[key]["name"];
		  }
		
	 }

	  console.log("Success at Getting itemJP"); // Show the HTML for the Google homepage.
  }
  });
  }
  if ((!suffix) || (suffix.toLowerCase() == "esgl")){
  request({
    			url: esGLurl,
    			json: true
			}, function (error, response, body) 
			{
  if (error) {
	  console.log("Error at Getting esGL");
  }
  if (!error && response.statusCode == 200) {
      esGL = body;
	  if (esUni != [])
	 { 	  
	 	  for (var key in esGL) {
			if (esUni[key]) {
				esUni[key]["nameGL"] = esGL[key]["name"];
			} else { 
				esUni[key] = esGL[key];
				esUni[key]["nameGL"] = esGL[key]["name"];
			}
		  }
	 } else {
	 	esUni = body;
	 	  for (var key in esGL) {
				esUni[key]["nameGL"] = esGL[key]["name"];
		  }
		
	 }
	  console.log("Success at Getting esGL"); // Show the HTML for the Google homepage.
  }
  });
  }
  if ((!suffix) || (suffix.toLowerCase() == "esjp")){
  request({
    			url: esJPurl,
    			json: true
			}, function (error, response, body) 
			{
  if (error) {
	  console.log("Error at Getting esJP");
  }
  if (!error && response.statusCode == 200) {
      esJP = body;
	  if (esUni != [])
	 { 	  
	 	  for (var key in esJP) {
			if (esUni[key]) {
				esUni[key]["nameJP"] = esJP[key]["name"];
			} else { 
				esUni[key] = esJP[key];
				esUni[key]["nameJP"] = esJP[key]["name"];
			}
		  }
	 } else {
	 	esUni = body;
	 	  for (var key in esJP) {
				esUni[key]["nameJP"] = esJP[key]["name"];
		  }
		
	 }
	  console.log("Success at Getting esJP"); // Show the HTML for the Google homepage.
  }
  });
  }
  /*if ((!suffix) || (suffix.toLowerCase() == "infojp")){
  request({
    			url: infoJPurl,
    			json: true
			}, function (error, response, body) {
  if (error) {
	  console.log("Error at Getting infoJP");
  }
  if (!error && response.statusCode == 200) {
      infoJP = body;
	  console.log("Success at Getting infoJP");
	  bot.user.setGame("with Summoners' mind");// Show the HTML for the Google homepage.
  }
  });
  }*/
  if ((!suffix) || (suffix.toLowerCase() == "degl")){
  request({
    			url: deGLurl,
    			json: true
			}, function (error, response, body) 
			{
  if (error) {
	  console.log("Error at Getting deGL");
  }
  if (!error && response.statusCode == 200) {
      deGL = body;
	  for (var key in deGL) {
		  var valObj = deGL[key];
		  for (swapi=0;swapi<valObj["skills"].length;swapi++){
			  valObj["skills"][swapi]["pre"] = enhance.find(valObj["skills"][swapi]["skill"],"SP");
		  }
	  }
	  for (var key in deGL) {
		  var valObj = deGL[key];
		  var alcount = 0;
		  var exportSTR = "";
		  for (spj=0;spj<valObj["skills"].length;spj++) {
			  		exportSTR+=alphabet[alcount]+' ';
					alcount+=1;
					exportSTR+=valObj["skills"][spj]["skill"]["bp"]+'SP-'+valObj["skills"][spj]["pre"];		
					if (valObj["skills"][spj]["dependency"] != "") {
						var reqBP = valObj["skills"][spj]["dependency"].substr(2);			
						for (spm=0;spm<valObj["skills"].length;spm++) {
							if (valObj["skills"][spm]["id"] == reqBP) {
								exportSTR+=' [*Need ['+valObj["skills"][spm]["skill"]["bp"]+'SP-'+valObj["skills"][spm]["pre"]+'] to be unlocked*]\n';
							}
						}
					} else exportSTR+='\n';
					if (enhance.find(valObj["skills"][spj]["skill"],"SP").indexOf(indexTXT) != -1)
					exportSTR+=valObj["skills"][spj]["skill"]["desc"]+'\n';
					}
		  exportSTR+="http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_thum_"+key+".png";
		  de[key] = [];
		  de[key]["pre"] = exportSTR;		  
	  }
	  console.log("Success at Getting deGL"); // Show the HTML for the Google homepage.
  }
    
  });
  }
  if ((!suffix) || (suffix.toLowerCase() == "deeu")){
  request({
    			url: deEUurl,
    			json: true
			}, function (error, response, body) 
			{
  if (error) {
	  console.log("Error at Getting deEU");
  }
  if (!error && response.statusCode == 200) {
      deEU = body;
	  for (var key in deEU) {
		  var valObj = deEU[key];
		  for (swapi=0;swapi<valObj["skills"].length;swapi++){
			  valObj["skills"][swapi]["pre"] = enhance.find(valObj["skills"][swapi]["skill"],"SP");
		  }
	  }
	  for (var key in deEU) {
		  var valObj = deEU[key];
		  var alcount = 0;
		  var exportSTR = "";
		  for (spj=0;spj<valObj["skills"].length;spj++) {
			  		exportSTR+=alphabet[alcount]+' ';
					alcount+=1;
					exportSTR+=valObj["skills"][spj]["skill"]["bp"]+'SP-'+valObj["skills"][spj]["pre"];		
					if (valObj["skills"][spj]["dependency"] != "") {
						var reqBP = valObj["skills"][spj]["dependency"].substr(2);			
						for (spm=0;spm<valObj["skills"].length;spm++) {
							if (valObj["skills"][spm]["id"] == reqBP) {
								exportSTR+=' [*Need ['+valObj["skills"][spm]["skill"]["bp"]+'SP-'+valObj["skills"][spm]["pre"]+'] to be unlocked*]\n';
							}
						}
					} else exportSTR+='\n';
					if (enhance.find(valObj["skills"][spj]["skill"],"SP").indexOf(indexTXT) != -1)
					exportSTR+=valObj["skills"][spj]["skill"]["desc"]+'\n';
					}
		  exportSTR+="http://static.bravefrontier.gumi-europe.net/content/unit/img/unit_ills_thum_"+key+".png";
		  de[key] = [];
		  de[key]["pre"] = exportSTR;		  
	  }
	  console.log("Success at Getting deEU"); // Show the HTML for the Google homepage.
  }
    
  });
  }			
  if ((!suffix) || (suffix.toLowerCase() == "dejp")){
  request({
    			url: deJPurl,
    			json: true
			}, function (error, response, body) 
			{
  if (error) {
	  console.log("Error at Getting deJP");
  }
  if (!error && response.statusCode == 200) {
      deJP = body;
	  for (var key in deJP) {
		  var valObj = deJP[key];
		  for (swapi=0;swapi<valObj["skills"].length;swapi++){
			  valObj["skills"][swapi]["pre"] = enhance.find(valObj["skills"][swapi]["skill"],"SP");
		  }
	  }
	  for (var key in deJP) {
		  var valObj = deJP[key];
		  var alcount = 0;
		  var exportSTR = "";
		  for (spj=0;spj<valObj["skills"].length;spj++) {
			  		exportSTR+=alphabet[alcount]+' ';
					alcount+=1;
					exportSTR+=valObj["skills"][spj]["skill"]["bp"]+'SP-'+valObj["skills"][spj]["pre"];		
					if (valObj["skills"][spj]["dependency"] != "") {
						var reqBP = valObj["skills"][spj]["dependency"].substr(2);			
						for (spm=0;spm<valObj["skills"].length;spm++) {
							if (valObj["skills"][spm]["id"] == reqBP) {
								exportSTR+=' [*Need ['+valObj["skills"][spm]["skill"]["bp"]+'SP-'+valObj["skills"][spm]["pre"]+'] to be unlocked*]\n';
							}
						}
					} else exportSTR+='\n';
					if (enhance.find(valObj["skills"][spj]["skill"],"SP"))
					if (enhance.find(valObj["skills"][spj]["skill"],"SP").indexOf(indexTXT) != -1)
					exportSTR+=valObj["skills"][spj]["skill"]["desc"]+'\n';
					}
		  exportSTR+="http://v1.cdn.android.brave.a-lim.jp/unit/img/unit_ills_thum_"+key+".png";
		  de[key] = [];
		  de[key]["pre"] = exportSTR;		  
	  }
	  console.log("Success at Getting deJP"); // Show the HTML for the Google homepage.
  }
    
  });
  }
}
    },
	"alias": {
		usage: "<name> <actual command>",
		description: "Creates command aliases. Useful for making simple commands on the fly",
		process: function(bot,msg,suffix) {
			var args = suffix.split(" ");
			var name = args.shift();
			if(!name){
				msg.channel.sendMessage(Config.commandPrefix + "alias " + this.usage + "\n" + this.description);
			} else if(commands[name] || name === "help"){
				msg.channel.sendMessage("overwriting commands with aliases is not allowed!");
			} else {
				var command = args.shift();
				aliases[name] = [command, args.join(" ")];
				//now save the new alias
				require("fs").writeFile("./alias.json",JSON.stringify(aliases,null,2), null);
				msg.channel.sendMessage("created alias " + name);
			}
		}
	},
	"spammer": {
		usage: "[status]",
		description: "Spammer Status",
		process: function(bot,msg,suffix) {
			msg.channel.sendMessage(hurt+" please donot abuse me.").then((message => message.delete(2000)));		
		}
	},
	"give": {
		usage: "<user> <command>",
		description: "Give User permission to use command.",
		process: function(bot,msg,suffix) {
			var args = suffix.split(" ");
			var user = args.shift();
			if ((!user) || (!user.startsWith("<@"))) {
				msg.channel.sendMessage("Please tag the user.").then((message => message.delete(5000)));
			} else {
			user = user.substr(3,user.length-4);	
			var cmd = args.shift();
			if((!cmd) || (!commands[cmd])){
				if (!cmd)
					msg.channel.sendMessage("Command not found.").then((message => message.delete(5000)))
				else 
					msg.channel.sendMessage("*throw "+cmd+" at "+msg.author+"*  Command not found "+shrug).then((message => message.delete(5000)));
			} else {
				if (cmd != 'give'){
				if (!Permissions.users[user])
					Permissions.users[user] = {};
				Permissions.users[user][cmd] = true;
				//now save the new alias
				fs.writeFile("./permissions.json",JSON.stringify(Permissions,null,2));
				msg.channel.sendMessage(hurt+"Permission "+cmd+" grant.").then((message => message.delete(5000)));
				} else {
					msg.channel.sendMessage("Cannot grant permission for 'give' command.").then((message => message.delete(5000)));
					}
				}
			}
		}
	},
	"nameid": {
		usage: "<unitid> <nickname>",
		description: "Give User permission to use command.",
		process: function(bot,msg,suffix) {
			var args = suffix.split(" ");
			var unitid = args.shift();
			if ((!unitid) || (isNaN(unitid))) {
				msg.channel.sendMessage("Please indicate the unit id.").then((message => message.delete(5000)));
			} else {
				var unitidCheck = false;
				for (i=0;i<unitListAll["rows"].length;i++) {
					if (unitListAll["rows"][i][0] == unitid){
						unitidCheck = true;
						break;
					}				
				}
				if (unitidCheck) {
					var nickname = args.shift();
					if(!nickname){
					msg.channel.sendMessage("Please think of a cute nickname.").then((message => message.delete(5000)));
					} else {
						unitid = unitid.toString();
						unitalias[unitid] = nickname;
					//now save the new alias
					fs.writeFile("./nickname.json",JSON.stringify(unitalias,null,2));
					msg.channel.sendMessage(hug+" Unit ID "+unitid+" nicknamed as "+nickname).then((message => message.delete(5000)));
					}
				} else 
					msg.channel.sendMessage(hurt+" Unit not found").then((message => message.delete(5000)));
			}
		}
	},
	"take": {
		usage: "<user> <command>",
		description: "Give User permission to use command.",
		process: function(bot,msg,suffix) {
			var args = suffix.split(" ");
			var user = args.shift();
			if ((!user) || (!user.startsWith("<@"))) {
				msg.channel.sendMessage("Please tag the user.").then((message => message.delete(5000)));
			} else {
			user = user.substr(3,user.length-4);	
			var cmd = args.shift();
			if((!cmd) || (!commands[cmd])){
				msg.channel.sendMessage("Command not found.").then((message => message.delete(5000)));
			} else {
				if (cmd != 'give'){
				if (!Permissions.users[user])
					Permissions.users[user] = {};
				Permissions.users[user][cmd] = false;
				//now save the new alias
				fs.writeFile("./permissions.json",JSON.stringify(Permissions,null,2));
				msg.channel.sendMessage(hug+"Permission "+cmd+" taken back.").then((message => message.delete(5000)));
				} else {
					msg.channel.sendMessage("Cannot grant permission for 'give' command.").then((message => message.delete(5000)));
					}
				}
			}
		}
	},
	"id": {
		usage: "<save|del> <gl|jp> <player id>",
		description: "Record Players ID on Noel Register Book.",
		process: function(bot,msg,suffix) {
			var args = suffix.split(" ");
			var cmd = args.shift();
			if ((!cmd) || ((cmd != 'save') && (cmd != 'del'))) {
				msg.channel.sendMessage("Please indicate the action: save or del.").then((message => message.delete(5000)));
			} else {
			var server = args.shift();
			if((!server) || ((server != 'jp') && (server != 'gl'))){
				msg.channel.sendMessage("Please indicate the BF's Server of the ID: Use 'gl' or 'jp'.").then((message => message.delete(5000)));
			} else {
				if (cmd === 'del'){
				if (!playerids[msg.author.id])
					playerids[msg.author.id] = {};
				playerids[msg.author.id][server] = "";
				//now save the new alias
				require("fs").writeFile("./saveid.json",JSON.stringify(playerids,null,2), null);
				msg.channel.sendMessage("Record Deleted").then((message => message.delete(5000)));
				} else {
				var playerid = args.shift();
				if (!playerid) {
				msg.channel.sendMessage("No Player ID is recorded.").then((message => message.delete(5000)));
				} else {
				if (!playerids[msg.author.id])
					playerids[msg.author.id] = {};
				playerids[msg.author.id][server] = playerid;
				//now save the new alias
				require("fs").writeFile("./saveid.json",JSON.stringify(playerids,null,2), null);
				msg.channel.sendMessage("Saved Player ID of " + msg.author).then((message => message.delete(5000)));
				}
				}
				}
			}
		}
	},
	"recall": {
		usage: "",
		description: "Recall Players ID on Noel Register Book",
		process: function(bot,msg,suffix) {
			var piTest = false;
			for (var i in playerids) {
				if (i == msg.author.id) {
					piTest = true;
					var exportSTR = '';
					var exTest = false;
					if (playerids[msg.author.id]['gl'])
						if (playerids[msg.author.id]['gl']!="") {
						exportSTR+=" in **GL: " + playerids[msg.author.id]['gl']+"**";
						exTest = true;
						}
					if (playerids[msg.author.id]['jp'])
						if (playerids[msg.author.id]['jp']!="") {
						exportSTR+=" in **JP: " + playerids[msg.author.id]['jp']+"**";
						exTest = true;
						}
					if (exTest) {
						msg.channel.sendMessage(msg.author+"'s Player ID"+exportSTR);
					} else {
						piTest = false;
					} 
					break;
				} 
			}
			if (!piTest)
				msg.channel.sendMessage("Please register your BF Player ID using !id.").then((message => message.delete(5000)));
		}
	},
	"aliases": {
		description: "lists all recorded aliases",
		process: function(bot, msg, suffix) {
			var text = "current aliases:\n";
			for(var a in aliases){
				if(typeof a === 'string')
					text += a + " ";
			}
			msg.channel.sendMessage(text);
		}
	},
    "idle": {
				usage: "[status]",
        description: "sets bot status to idle",
        process: function(bot,msg,suffix){ 
	    bot.user.setStatus("idle");
	    bot.user.setGame(suffix);
	}
    },
    "online": {
				usage: "[status]",
        description: "sets bot status to online",
        process: function(bot,msg,suffix){ 
	    bot.user.setStatus("online");
	    bot.user.setGame(suffix);
	}
    },
    "say": {
        usage: "<message>",
        description: "bot says message",
        process: function(bot,msg,suffix){ msg.channel.sendMessage(suffix);}
    },
	/*"msg": {
		usage: "<user> <message to leave user>",
		description: "leaves a message for a user the next time they come online",
		process: function(bot,msg,suffix) {
			var args = suffix.split(' ');
			var user = args.shift();
			var message = args.join(' ');
			if(user.startsWith('<@')){
				user = user.substr(2,user.length-3);
			}
			var target = msg.channel.guild.members.find("id",user);
			if(!target){
				target = msg.channel.guild.members.find("username",user);
			}
			messagebox[target.id] = {
				channel: msg.channel.id,
				content: target + ", " + msg.author + " said: " + message
			};
			updateMessagebox();
			msg.channel.sendMessage("message saved.")
		}
	},*/
	"spheregl": {
		usage: "<name>",
		description: "return effects of identified sphere",
		process: function(bot,msg,suffix){
			if ((suffix != "") && (suffix.length >= 3)) {
    				var sCount = 0;
					var sList = "";
					for (var key in itemGL) {
						var valObj = itemGL[key];
						if ((valObj.type == "sphere") && (valObj.name.toLowerCase().indexOf(suffix.toLowerCase()) != -1)) {
        					var idFound=true;
							sCount+=1;
							sList+=" "+valObj.name+" /";
						} else {
            				var idFound=false;
						};
						if ((idFound) && (sCount<3)){
							msg.channel.sendMessage("**"+valObj.name+"** ("+valObj["sphere type text"]+", "+valObj.rarity+":star:)\n"+passive.find(valObj, "IT")+"\n");
						};
					}
					if (sCount>=3)
						msg.channel.sendMessage("Not all results shown. List of possible results:"+sList+"//"); 
		} else 
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			}
	},
	"spherejp": {
		usage: "<name>",
		description: "return effects of identified sphere",
		process: function(bot,msg,suffix){
			if ((suffix != "") && (suffix.length >= 3)) {
					var sCount = 0;
					var sList = "";
					for (var key in itemJP) {
						var valObj = itemJP[key];
						if ((valObj.type == "sphere") && (valObj.name.toLowerCase().indexOf(suffix.toLowerCase()) != -1)) {
        					var idFound=true;
							sCount+=1;
							sList+=" "+valObj.name+" /";
						} else {
            				var idFound=false;
						};
						if ((idFound) && (sCount<3)){
							msg.channel.sendMessage("**"+valObj.name+"** ("+valObj["sphere type text"]+", "+valObj.rarity+":star:)\n"+passive.find(valObj, "IT")+"\n");
						};
					}
					if (sCount>=3)
						msg.channel.sendMessage("Not all results shown. List of possible results:"+sList+"//"); 
			} else 
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
		}
	},
	"sphere": {
		usage: "<name>",
		description: "return effects of identified sphere",
		process: function(bot,msg,suffix){
			if ((suffix != "") && (suffix.length >= 3)) {
					var sCount = 0;
					var sList = "";
					for (var key in itemUni) {
						var valObj = itemUni[key];
						if (valObj.nameGL)
							var nameGL = valObj.nameGL
						else
							var nameGL = "N/A GL";
						if (valObj.nameJP)
							var nameJP = valObj.nameJP
						else
							var nameJP = "N/A JP";
						if ((valObj.type == "sphere") && (nameGL.toLowerCase().indexOf(suffix.toLowerCase()) != -1)) {
        					var idFound=true;
							sCount+=1;
							sList+=" "+nameGL+" ["+nameJP+"] /";
						} else {
            				var idFound=false;
						}
						if ((idFound) && (sCount<3)){
							msg.channel.sendMessage("**"+nameGL+" ["+nameJP+"]** ("+valObj["sphere type text"]+", "+valObj.rarity+":star:)\n"+passive.find(valObj, "IT")+"\n");
						};
					}
					if (sCount>=3)
						msg.channel.sendMessage("Not all results shown. List of possible results:"+sList+"//"); 
			} else 
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
		}
	},
	"esgl": {
		usage: "<name>",
		description: "return effects of identified Elgif (Global)",
		process: function(bot,msg,suffix){
			if ((suffix != "") && (suffix.length >= 3)) {
					var sCount = 0;
					var sList = "";
					for (var key in esGL) {
						var valObj = esGL[key];
						if ((key >= 1000000) && (valObj.name.toLowerCase().indexOf(suffix.toLowerCase()) != -1)) {
        					var idFound=true;
							sCount+=1;
							sList+=" "+valObj.name+" /";
						} else {
            				var idFound=false;
						};
						if ((idFound) && (sCount<3)){
							msg.channel.sendMessage("**"+valObj.name+"** \n"+passive.find(valObj, "ES")+"\n");
						};
					}
					if (sCount>=3)
						msg.channel.sendMessage("Not all results shown. List of possible results:"+sList+"//"); 
		} else 
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			}
	},
	"esjp": {
		usage: "<name>",
		description: "return effects of identified Elgif (Japan)",
		process: function(bot,msg,suffix){
			if ((suffix != "") && (suffix.length >= 3)) {
					var sCount = 0;
					var sList = "";
					for (var key in esJP) {
						var valObj = esJP[key];
						if ((key >= 1000000) && (valObj.name.toLowerCase().indexOf(suffix.toLowerCase()) != -1)) {
        					var idFound=true;
							sCount+=1;
							sList+=" "+valObj.name+" /";
						} else {
            				var idFound=false;
						};
						if ((idFound) && (sCount<3)){
							msg.channel.sendMessage("**"+valObj.name+"** \n"+passive.find(valObj, "ES")+"\n");
						};
					}
					if (sCount>=3)
						msg.channel.sendMessage("Not all results shown. List of possible results:"+sList+"//"); 
		} else 
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			}
	},
	"es": {
		usage: "<name>",
		description: "return effects of identified Elgif",
		process: function(bot,msg,suffix){
			if ((suffix != "") && (suffix.length >= 3)) {
					var sCount = 0;
					var sList = "";
					for (var key in esUni) {
						var valObj = esUni[key];
						if (valObj.nameGL)
							var nameGL = valObj.nameGL
						else
							var nameGL = "N/A GL";
						if (valObj.nameJP)
							var nameJP = valObj.nameJP
						else
							var nameJP = "N/A JP";
						if ((key >= 1000000) && (nameGL.toLowerCase().indexOf(suffix.toLowerCase()) != -1)) {
        					var idFound=true;
							sCount+=1;
							sList+=" "+nameGL+" ["+nameJP+"] /";
						} else {
            				var idFound=false;
						};
						if ((idFound) && (sCount<3)){
							msg.channel.sendMessage("**"+nameGL+"** ["+nameJP+"] \n"+passive.find(valObj, "ES")+"\n");
						};
					}
					if (sCount>=3) {
						if (sList.length > 200)
							msg.channel.sendMessage("Not all results shown.")
						else
							msg.channel.sendMessage("Not all results shown. List of possible results:"+sList+"//")
					}
		} else 
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			}
	},
	"sp": {
		usage: "<name>",
		description: "return Dream Maker effects of identified unit",
		process: function(bot,msg,suffix){
			if (findUnit(suffix) == "notfound") {
				if (!suffix)
					msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
				else 	
					msg.channel.sendMessage(suffix + ' not found').then((message => message.delete(5000)));	
			} else if (findUnit(suffix) == "short") {
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			} else {
					var sRe = findUnit(suffix)[0];
					var sRef = findUnit(suffix)[1];
					var sID = findUnit(suffix)[2];
					for (var key in de) {
						var valObj = de[key];
		 	 			if (key == sRef) {
							msg.channel.sendMessage(valObj["pre"]);
						};
					}

			}
		}
	},
	"unitart": {
		usage: "<name>",
		description: "return unit art of specified unit",
		process: function(bot,msg,suffix){
			if (findUnit(suffix) == "notfound") {
				if (!suffix)
					msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
				else 	
					msg.channel.sendMessage(suffix + ' not found').then((message => message.delete(5000)));	
			} else if (findUnit(suffix) == "short") {
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			} else {
					var sRe = findUnit(suffix)[0];
					var sRef = findUnit(suffix)[1];
					var sID = findUnit(suffix)[2];
					if (sID >= 8000)
						msg.channel.sendMessage("http://2.cdn.bravefrontier.gumi.sg/content/unit/img/unit_ills_full_"+sRef+".png").then((message => message.delete(20000)))
					else if (sID >= 7000)
						msg.channel.sendMessage("http://static.bravefrontier.gumi-europe.net/content/unit/img/unit_ills_full_"+sRef+".png").then((message => message.delete(20000)))
					else 
						msg.channel.sendMessage("http://v1.cdn.android.brave.a-lim.jp/unit/img/unit_ills_full_"+sRef+".png").then((message => message.delete(20000)))
			}
		}
	},
	"unitid": {
		usage: "<name>",
		description: "return unit id and thumbnail of specified unit",
		process: function(bot,msg,suffix){
			if (findUnit(suffix) == "notfound") {
				if (!suffix)
					msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
				else 	
					msg.channel.sendMessage(suffix + ' not found').then((message => message.delete(5000)));	
			} else if (findUnit(suffix) == "short") {
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			} else {
					var sRe = findUnit(suffix)[0];
					var sRef = findUnit(suffix)[1];
					var sID = findUnit(suffix)[2];
					msg.channel.sendMessage("**"+sID+"** - "+unitListAll["rows"][sRe][2]+" ("+unitListAll["rows"][sRe][3]+":star:)\n http://v1.cdn.android.brave.a-lim.jp/unit/img/unit_ills_thum_"+sRef+".png").then((message => message.delete(20000)))
			}
		}
	},
	/*"ain": {
		usage: "<name>",
		description: "return Arena AI of identified unit",
		process: function(bot,msg,suffix){
			if (findUnit(suffix) == "notfound") {
				if (!suffix)
					msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
				else 	
					msg.channel.sendMessage(suffix + ' not found').then((message => message.delete(5000)));	
			} else if (findUnit(suffix) == "short") {
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			} else {
					var sRe = findUnit(suffix)[0];
					var sRef = findUnit(suffix)[1];
					var sID = findUnit(suffix)[2];
					for (var key in infoJP) {
					var valObj = infoJP[key];
					var exportSTR = "";
			 		if (key == sRef) {
					exportSTR+="**" +unitListAll["rows"][sRe][2]+ " AI**\n " + ai.find(valObj) + "\n";
					exportSTR+="http://v1.cdn.android.brave.a-lim.jp/unit/img/unit_ills_thum_"+key+".png";
					msg.channel.sendMessage(exportSTR);
					break;
					}					
					};
			}
		}
	},*/
	"lsn": {
		usage: "<name>",
		description: "return Arena AI of identified unit",
		process: function(bot,msg,suffix){
			if (findUnit(suffix) == "notfound") {
				if (!suffix)
					msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
				else 	
					msg.channel.sendMessage(suffix + ' not found').then((message => message.delete(5000)));	
			} else if (findUnit(suffix) == "short") {
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			} else {
					var sRe = findUnit(suffix)[0];
					var sRef = findUnit(suffix)[1];
					var sID = findUnit(suffix)[2];
					var tempmsg = "";
					tempmsg+='**'+unitListAll["rows"][sRe][2]+'** Leader Skill\n'+unitListAll["rows"][sRe][5];
					msg.channel.sendMessage(tempmsg);
			}
		}
	},
	"skill": {
		usage: "<name>",
		description: "return Skill of identified unit",
		process: function(bot,msg,suffix){
			if (findUnit(suffix) == "notfound") {
				if (!suffix)
					msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
				else 	
					msg.channel.sendMessage(suffix + ' not found').then((message => message.delete(5000)));	
			} else if (findUnit(suffix) == "short") {
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			} else {
					var sRe = findUnit(suffix)[0];
					var sRef = findUnit(suffix)[1];
					var sID = findUnit(suffix)[2];
					var tempmsg = "";
					tempmsg+='**'+unitListAll["rows"][sRe][2]+'**\n\n**LS:** '+unitListAll["rows"][sRe][5];
					if (unitListAll["rows"][sRe][18] != "")
						tempmsg+= '\n\n**ES:** '+unitListAll["rows"][sRe][18];
					if (unitListAll["rows"][sRe][19] != "")
						tempmsg+=' (Condition: '+unitListAll["rows"][sRe][19]+')';
					if (unitListAll["rows"][sRe][6] != "")	{
						tempmsg+= '\n\n**BB:** ';
						tempmsg+='(';
					if ((unitListAll["rows"][sRe][7] != "") && (unitListAll["rows"][sRe][7] != "NaN"))
						tempmsg+=unitListAll["rows"][sRe][7];
						else
						tempmsg+='0';
					tempmsg+='Hits/';
					if (unitListAll["rows"][sRe][8] != "")
						tempmsg+=unitListAll["rows"][sRe][8];
						else
						tempmsg+='0';
					tempmsg+='BC Fill/';
					if (unitListAll["rows"][sRe][9] != "")
						tempmsg+=unitListAll["rows"][sRe][9];
						else
						tempmsg+='0';
					tempmsg+='DC) ';
					tempmsg+=unitListAll["rows"][sRe][6];
					}
					if (unitListAll["rows"][sRe][10] != ""){
						tempmsg+= '\n\n**SBB:** ';
						tempmsg+='(';
					if ((unitListAll["rows"][sRe][11] != "") && (unitListAll["rows"][sRe][11] != "NaN"))
						tempmsg+=unitListAll["rows"][sRe][11];
						else
						tempmsg+='0';
					tempmsg+='Hits/';
					if (unitListAll["rows"][sRe][12] != "")
						tempmsg+=unitListAll["rows"][sRe][12];
						else
						tempmsg+='0';
					tempmsg+='BC Fill/';
					if (unitListAll["rows"][sRe][13] != "")
						tempmsg+=unitListAll["rows"][sRe][13];
						else
						tempmsg+='0';
					tempmsg+='DC) ';
					tempmsg+=unitListAll["rows"][sRe][10];
					}
					if (unitListAll["rows"][sRe][14] != ""){
						tempmsg+= '\n\n**UBB:** ';
						tempmsg+='(';
					if ((unitListAll["rows"][sRe][15] != "") && (unitListAll["rows"][sRe][15] != "NaN"))
						tempmsg+=unitListAll["rows"][sRe][15];
						else
						tempmsg+='0';
					tempmsg+='Hits/';
					if (unitListAll["rows"][sRe][16] != "")
						tempmsg+=unitListAll["rows"][sRe][16];
						else
						tempmsg+='0';
					tempmsg+='BC Fill/';
					if (unitListAll["rows"][sRe][17] != "")
						tempmsg+=unitListAll["rows"][sRe][17];
						else
						tempmsg+='0';
					tempmsg+='DC) ';
					tempmsg+=unitListAll["rows"][sRe][14];
					}
					msg.channel.sendMessage(tempmsg);
			}
		}
	},
	"esn": {
		usage: "<name>",
		description: "return Arena AI of identified unit",
		process: function(bot,msg,suffix){
			if (findUnit(suffix) == "notfound") {
				if (!suffix)
					msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
				else 	
					msg.channel.sendMessage(suffix + ' not found').then((message => message.delete(5000)));	
			} else if (findUnit(suffix) == "short") {
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			} else {
					var sRe = findUnit(suffix)[0];
					var sRef = findUnit(suffix)[1];
					var sID = findUnit(suffix)[2];
				if (unitListAll["rows"][sRe][18] != "")
				{
					var exportSTR = '**'+unitListAll["rows"][sRe][2]+'** Extra Skill\n'+unitListAll["rows"][sRe][18];
					if (unitListAll["rows"][sRe][19] != "")
						exportSTR+=' (Condition: '+unitListAll["rows"][sRe][19]+')';
					msg.channel.sendMessage(exportSTR);
				} else
					msg.channel.sendMessage(unitListAll["rows"][sRe][2]+' does not have an ES').then((message => message.delete(5000)));
			}
		}
	},
	"bbn": {
		usage: "<name>",
		description: "return Arena AI of identified unit",
		process: function(bot,msg,suffix){
			if (findUnit(suffix) == "notfound") {
				if (!suffix)
					msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
				else 	
					msg.channel.sendMessage(suffix + ' not found').then((message => message.delete(5000)));	
			} else if (findUnit(suffix) == "short") {
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			} else {
					var sRe = findUnit(suffix)[0];
					var sRef = findUnit(suffix)[1];
					var sID = findUnit(suffix)[2];
					if (unitListAll["rows"][sRe][6] != "")
				{
					var exportSTR = '**'+unitListAll["rows"][sRe][2]+'** BB\n'
					exportSTR+='(';
					if ((unitListAll["rows"][sRe][7] != "") && (unitListAll["rows"][sRe][7] != "NaN"))
						exportSTR+=unitListAll["rows"][sRe][7];
						else
						exportSTR+='0';
					exportSTR+='Hits/';
					if (unitListAll["rows"][sRe][8] != "")
						exportSTR+=unitListAll["rows"][sRe][8];
						else
						exportSTR+='0';
					exportSTR+='BC Fill/';
					if (unitListAll["rows"][sRe][9] != "")
						exportSTR+=unitListAll["rows"][sRe][9];
						else
						exportSTR+='0';
					exportSTR+='DC) ';
					exportSTR+=unitListAll["rows"][sRe][6];
					msg.channel.sendMessage(exportSTR);
				} else
					msg.channel.sendMessage(unitListAll["rows"][sRe][2]+' does not have a BB Skill').then((message => message.delete(5000)));
			}
		}
	},
	"sbbn": {
		usage: "<name>",
		description: "return Arena AI of identified unit",
		process: function(bot,msg,suffix){
			if (findUnit(suffix) == "notfound") {
				if (!suffix)
					msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
				else 	
					msg.channel.sendMessage(suffix + ' not found').then((message => message.delete(5000)));	
			} else if (findUnit(suffix) == "short") {
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			} else {
					var sRe = findUnit(suffix)[0];
					var sRef = findUnit(suffix)[1];
					var sID = findUnit(suffix)[2];
				if (unitListAll["rows"][sRe][10] != "")
				{
					var exportSTR = '**'+unitListAll["rows"][sRe][2]+'** SBB\n'
					exportSTR+='(';
					if ((unitListAll["rows"][sRe][11] != "") && (unitListAll["rows"][sRe][11] != "NaN"))
						exportSTR+=unitListAll["rows"][sRe][11];
						else
						exportSTR+='0';
					exportSTR+='Hits/';
					if (unitListAll["rows"][sRe][12] != "")
						exportSTR+=unitListAll["rows"][sRe][12];
						else
						exportSTR+='0';
					exportSTR+='BC Fill/';
					if (unitListAll["rows"][sRe][13] != "")
						exportSTR+=unitListAll["rows"][sRe][13];
						else
						exportSTR+='0';
					exportSTR+='DC) ';
					exportSTR+=unitListAll["rows"][sRe][10];
					msg.channel.sendMessage(exportSTR);
				} else
					msg.channel.sendMessage(unitListAll["rows"][sRe][2]+' does not have a SBB Skill').then((message => message.delete(5000)));
			}
		}
	},
	"ubbn": {
		usage: "<name>",
		description: "return Arena AI of identified unit",
		process: function(bot,msg,suffix){
			if (findUnit(suffix) == "notfound") {
				if (!suffix)
					msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
				else 	
					msg.channel.sendMessage(suffix + ' not found').then((message => message.delete(5000)));	
			} else if (findUnit(suffix) == "short") {
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			} else {
					var sRe = findUnit(suffix)[0];
					var sRef = findUnit(suffix)[1];
					var sID = findUnit(suffix)[2];
				if (unitListAll["rows"][sRe][14] != "")
				{
					var exportSTR = '**'+unitListAll["rows"][sRe][2]+'** UBB\n'
					exportSTR+='(';
					if ((unitListAll["rows"][sRe][15] != "") && (unitListAll["rows"][sRe][15] != "NaN"))
						exportSTR+=unitListAll["rows"][sRe][15];
						else
						exportSTR+='0';
					exportSTR+='Hits/';
					if (unitListAll["rows"][sRe][16] != "")
						exportSTR+=unitListAll["rows"][sRe][16];
						else
						exportSTR+='0';
					exportSTR+='BC Fill/';
					if (unitListAll["rows"][sRe][17] != "")
						exportSTR+=unitListAll["rows"][sRe][17];
						else
						exportSTR+='0';
					exportSTR+='DC) ';
					exportSTR+=unitListAll["rows"][sRe][14];
					msg.channel.sendMessage(exportSTR);
				} else
					msg.channel.sendMessage(unitListAll["rows"][sRe][2]+' does not have a UBB Skill').then((message => message.delete(5000)));
			}
		}
	},
	"lore": {
		usage: "<name> <rarity> or 'id' <unit id> ",
		description: "return Lore of identified unit",
		process: function(bot,msg,suffix){
			if (findUnit(suffix) == "notfound") {
				if (!suffix)
					msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
				else 	
					msg.channel.sendMessage(suffix + ' not found').then((message => message.delete(5000)));	
			} else if (findUnit(suffix) == "short") {
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			} else {
					var sRe = findUnit(suffix)[0];
					var sRef = findUnit(suffix)[1];
					var sID = findUnit(suffix)[2];
					var sField = "MST_UNITCOMMENT_"+sRef+"_DESCRIPTION";
				if (dictGL[sField])	{
					if (dictGL[sField]["en"] != "") {
						var exportSTR = dictGL[sField]["en"].replace(/<br>/g, "\n");
						msg.channel.sendMessage("**"+unitListAll["rows"][sRe][2]+":**\n"+exportSTR);
					} else
						msg.channel.sendMessage(hurt+' Translation is not available.').then((message => message.delete(5000)));
				} else
					msg.channel.sendMessage(hurt+' No record found.').then((message => message.delete(5000)));
			}
		}
	},
	"unitcmt": {
		usage: "<f|e|s> <name> <rarity> or <f|e|s> 'id' <unit id> ",
		description: "return Fusion(f)/Evolution(e)/Summon(s) comment of identified unit",
		process: function(bot,msg,suffix){
			var args = suffix.split(" ");
			var cmd = args.shift();
			var sName = suffix.substring(2);
			if (!cmd || (cmd != "f" && cmd != "e" && cmd != "s")){
				msg.channel.sendMessage("Please use correct command").then((message => message.delete(5000)));
			} else {
			if (findUnit(sName) == "notfound") {
				if (!sName)
					msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
				else 	
					msg.channel.sendMessage(sName + ' not found').then((message => message.delete(5000)));	
			} else if (findUnit(sName) == "short") {
				msg.channel.sendMessage("Please enter longer search query").then((message => message.delete(5000)));
			} else {
					var sRe = findUnit(sName)[0];
					var sRef = findUnit(sName)[1];
					var sID = findUnit(sName)[2];
					var sField = "MST_UNITCOMMENT_"+sRef+"_";
					switch (cmd) {
						case "f":
							sField+="FUSION";
							break;
						case "e":
							sField+="EVOLUTION";
							break;
						case "s":
							sField+="SUMMON";
							break;							
					}
				if (dictGL[sField])	{
					if (dictGL[sField]["en"] != "") {
						var exportSTR = dictGL[sField]["en"].replace(/<br>/g, "\n");
						msg.channel.sendMessage("**"+unitListAll["rows"][sRe][2]+":**\n"+exportSTR);
					} else
						msg.channel.sendMessage(hurt+' Translation is not available.').then((message => message.delete(5000)));
				} else
					msg.channel.sendMessage(hurt+' No record found.').then((message => message.delete(5000)));
			}}
		}
	},
	"workhard": {
		usage: "Spam Bypass on",
        description: "Turnoff bot cooldown",
        process: function(bot,msg,suffix){ 
	    spambypass = true;
	    msg.channel.sendMessage(hurt+" don't abuse me").then((message => message.delete(5000)));
	}
    },
	"relax": {
		usage: "Spam Bypass off",
        description: "Turn on bot cooldown",
        process: function(bot,msg,suffix){ 
	    spambypass = false;
	    msg.channel.sendMessage(hug+" thank you master").then((message => message.delete(5000)));
	}
    },
	"time": {
		usage: "<time in seconds>",
        description: "Turn on bot cooldown",
        process: function(bot,msg,suffix){ 
	    if (isNaN(suffix)) {
			msg.channel.sendMessage(shrug).then((message => message.delete(5000)));
		} else {
			cooldown = suffix * 1000;
			msg.channel.sendMessage(hug+" Cooldown changed to "+suffix+" seconds").then((message => message.delete(5000)));
		}
	    
	}
    },
};

if(AuthDetails.hasOwnProperty("client_id")){
	commands["invite"] = {
		description: "generates an invite link you can use to invite the bot to your server",
		process: function(bot,msg,suffix){
			msg.channel.sendMessage("invite link: https://discordapp.com/oauth2/authorize?&client_id=" + AuthDetails.client_id + "&scope=bot&permissions=470019135");
		}
	}
}


try{
	messagebox = require("./messagebox.json");
} catch(e) {
	//no stored messages
	messagebox = {};
}
function updateMessagebox(){
	require("fs").writeFile("./messagebox.json",JSON.stringify(messagebox,null,2), null);
}

var bot = new Discord.Client();

bot.on("ready", function () {
	console.log("Logged in! Serving in " + bot.guilds.array().length + " servers");
	require("./plugins.js").init();
	console.log("type "+Config.commandPrefix+"help in Discord for a commands list.");
	//bot.user.setGame(Config.commandPrefix+"help | " + bot.guilds.array().length +" Servers"); 
	bot.user.setGame("with the door key");
	var cmd = commands["refresh"];
			try{
				cmd.process(bot);
			} catch(e){
				if(Config.debug){
					console.log ( "Refresh failed :(\n" + e.stack);
				}
			}
});

bot.on("disconnected", function () {

	console.log("Disconnected!");
	
	process.exit(1); //exit node.js with an error

});
var timetemp = Date.now() - cooldown;
function checkMessageForCommand(msg, isEdit) {
	//check if message is a command
	var timespan = Date.now() - timetemp;
	if (spambypass)	{
		var timecheck = true;
	} else if (msg.author.id === master) {
		var timecheck = true;
	} else if (Permissions.checkPermission(msg.author,"spammer")) {
		var timecheck = true;
	} else 	{
			if (timespan >= cooldown){
				var timecheck = true;
			}
			else {
				var timecheck = false;
				}
	}
	if((msg.author.id != bot.user.id) && (msg.content.startsWith(Config.commandPrefix))){
        console.log("treating " + msg.content + " from " + msg.author + " as command");
		var cmdTxt = msg.content.split(" ")[0].substring(Config.commandPrefix.length);
        var suffix = msg.content.substring(cmdTxt.length+Config.commandPrefix.length+1);//add one for the ! and one for the space
        if(msg.isMentioned(bot.user)){
			try {
				cmdTxt = msg.content.split(" ")[1];
				suffix = msg.content.substring(bot.user.mention().length+cmdTxt.length+Config.commandPrefix.length+1);
			} catch(e){ //no command
				msg.channel.sendMessage("Yes?").then((message => message.delete(10000)));
				return;
			}
        }
		alias = aliases[cmdTxt];
		if(alias){
			console.log(cmdTxt + " is an alias, constructed command is " + alias.join(" ") + " " + suffix);
			cmdTxt = alias[0];
			suffix = alias[1] + " " + suffix;
		}
		var cmd = commands[cmdTxt];
        if(cmdTxt === "help"){
            //help is special since it iterates over the other commands
						if(suffix){
							var cmds = suffix.split(" ").filter(function(cmd){return commands[cmd]});
							var info = "";
							for(var i=0;i<cmds.length;i++) {
								var cmd = cmds[i];
								info += "**"+Config.commandPrefix + cmd+"**";
								var usage = commands[cmd].usage;
								if(usage){
									info += " " + usage;
								}
								var description = commands[cmd].description;
								if(description instanceof Function){
									description = description();
								}
								if(description){
									info += "\n\t" + description;
								}
								info += "\n"
							}
							msg.channel.sendMessage(info).then((message => message.delete(20000)));
						} else {
							msg.author.sendMessage("**Available Commands:**").then(function(){
								var batch = "";
								var sortedCommands = Object.keys(commands).sort();
								for(var i in sortedCommands) {
									var cmd = sortedCommands[i];
									var info = "**"+Config.commandPrefix + cmd+"**";
									var usage = commands[cmd].usage;
									if(usage){
										info += " " + usage;
									}
									var description = commands[cmd].description;
									if(description instanceof Function){
										description = description();
									}
									if(description){
										info += "\n\t" + description;
									}
									var newBatch = batch + "\n" + info;
									if(newBatch.length > (1024 - 8)){ //limit message length
										msg.author.sendMessage(batch);
										batch = info;
									} else {
										batch = newBatch
									}
								}
								if(batch.length > 0){
									msg.author.sendMessage(batch);
								}
						});
					}
        }
		else if ((cmd) && (timecheck)) {
			if((Permissions.checkPermission(msg.author,cmdTxt)) || (msg.author.id == master)){
				try{
					cmd.process(bot,msg,suffix,isEdit);
					timetemp = Date.now();
				} catch(e){
					var msgTxt = "command " + cmdTxt + " failed :(";
					if(Config.debug){
						 msgTxt += "\n" + e.stack;
					}
					msg.channel.sendMessage(msgTxt).then((message => message.delete(10000)));
				}
			} else {
				msg.channel.sendMessage("You are not allowed to run " + cmdTxt + "!").then((message => message.delete(5000)));
			}
		} else if (!timecheck) {
			timespan = cooldown - timespan;
			msg.channel.sendMessage(shrug).then((message => message.delete(timespan)))
		} else {
			msg.channel.sendMessage(cmdTxt + " not recognized as a command!").then((message => message.delete(5000)))
		}
	} else {
		//message isn't a command or is from us
        //drop our own messages to prevent feedback loops

		
		if(msg.author == bot.user){
            return;
        }

        if (msg.author != bot.user && msg.isMentioned(bot.user)) {
                msg.channel.sendMessage(msg.author + ", you called?").then((message => message.delete(10000)));
        } else {

				}
    }
}

bot.on("message", (msg) => checkMessageForCommand(msg, false));
bot.on("messageUpdate", (oldMessage, newMessage) => {
	checkMessageForCommand(newMessage,true);
});

//Log user status changes
bot.on("presence", function(user,status,gameId) {
	//if(status === "online"){
	//console.log("presence update");
	console.log(user+" went "+status);
	//}
	try{
	if(status != 'offline'){
		if(messagebox.hasOwnProperty(user.id)){
			console.log("found message for " + user.id);
			var message = messagebox[user.id];
			var channel = bot.channels.get("id",message.channel);
			delete messagebox[user.id];
			updateMessagebox();
			bot.sendMessage(channel,message.content);
		}
	}
	}catch(e){}
});


exports.addCommand = function(commandName, commandObject){
    try {
        commands[commandName] = commandObject;
    } catch(err){
        console.log(err);
    }
}
exports.commandCount = function(){
    return Object.keys(commands).length;
}
if(AuthDetails.bot_token){
	console.log("logging in with token");
	bot.login(AuthDetails.bot_token);
} else {
	console.log("Logging in with user credentials is no longer supported!\nYou can use token based log in with a user account, see\nhttps://discord.js.org/#/docs/main/master/general/updating");
}
