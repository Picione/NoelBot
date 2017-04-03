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
var alphabet = [":regional_indicator_a:", ":regional_indicator_b:", ":regional_indicator_c:", ":regional_indicator_d:", ":regional_indicator_e:", ":regional_indicator_f:", ":regional_indicator_g:", ":regional_indicator_h:", ":regional_indicator_i:", ":regional_indicator_j:", ":regional_indicator_k:", ":regional_indicator_l:", ":regional_indicator_m:", ":regional_indicator_n:", ":regional_indicator_o:", ":regional_indicator_p:", ":regional_indicator_q:"];

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

var infoJP;

var deJP;

var deEU;

var deGL;

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

// Load custom permissions
var dangerousCommands = ["pullanddeploy","setUsername","refresh"];
var Permissions = {};
try{
	Permissions = require("./permissions.json");
} catch(e){
	console.log("catchError");
	Permissions.global = {};
	Permissions.users = {
		"161845421545750529": {
			"pullanddeploy": true,
			"setUsername": true,
			"refresh": true
		},
	};
}

for( var i=0; i<dangerousCommands.length;i++ ){
	var cmd = dangerousCommands[i];
	if(!Permissions.global.hasOwnProperty(cmd)){
		Permissions.global[cmd] = false;
	}
	/*if(!Permissions.users.["161845421545750529"].hasOwnProperty(cmd)){
		Permissions.global[cmd] = true;
	}*/
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
			}, function (error, response, body) 
			{
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
				  unitListAll["rows"][unitListAll["rows"].length] = JP.miss[key];
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
			}, function (error, response, body) 
			{
  if (error) {
	  console.log("Error at Getting itemGL");
  }
  if (!error && response.statusCode == 200) {
      itemGL = body;
	  if (itemUni != [])
	 { 	  
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
	  console.log("Success at Getting esJP"); // Show the HTML for the Google homepage.
  }
  });
  }
  /*if ((!suffix) || (suffix.toLowerCase() == "infojp")){
  request({
    			url: infoJPurl,
    			json: true
			}, function (error, response, body) 
			{
  if (error) {
	  console.log("Error at Getting infoJP");
  }
  if (!error && response.statusCode == 200) {
      infoJP = body;
	  console.log("Success at Getting infoJP");
	  //unitListAll["rows"][i][2]
	  //"SELECT 'ID','SystemID','Name','Rarity','Series', 'Leader Skill', 'BB Skill', 'BB Hits', 'BB Fill', 'BB DC', 'SBB Skill', 'SBB Hits', 'SBB Fill', 'SBB DC', 'UBB Skill', 'UBB Hits', 'UBB Fill', 'UBB DC', 'Passive Skill', 'Passive Condition'
	  for (var key in body) {
		  var valObj = body[key];
		  var ulFound = false;
		  if (valObj.rarity == 8)
		  for (var i in unitListAll) {
			  if (key == unitListAll["rows"][i][2])
				  ulFound = true;
		          break;
		  }
		  if (!ulFound){
			  var tempSkill = [];
			  unitTemp.push({"systemid": key, "name": valObj["name"]});
			  if ((valObj["leader skill"]) && (!valObj["leader skill"]["error"]))
				var tempLS=passive.find(valObj["leader skill"], "LS");
			  if ((valObj["extra skill"]) && (!valObj["extra skill"]["error"]))
				var tempES=passive.find(valObj["extra skill"], "ES");
			  for (ibb=0;ibb<bbArray.length;ibb++){
				if ((valObj[bbArray[ibb]]) && (!valObj[bbArray[ibb]]["error"])){
					var effectlength = valObj[bbArray[ibb]]["levels"].length - 1;
            		if (valObj[bbArray[ibb]].levels[effectlength]["effects"]) {	
					   	tempSkill[ibb] = active.find(valObj[bbArray[ibb]].levels[effectlength]["effects"], valObj)
					}
				} else tempSkill[ibb] = "";
				 
			  }			  
			  unitListAll.push([valObj["guide_id"], key, valObj.name, valObj.rarity, '0', tempLS, tempSkill[0], '0', '0', '0', tempSkill[1], '0', '0', '0', tempSkill[2], '0', '0', '0', tempES, '0']);
		  }
		  
	  }
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
	"msg": {
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
	},
	"sgl": {
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
				msg.channel.sendMessage("Please enter longer search query");
			}
	},
	"sjp": {
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
				msg.channel.sendMessage("Please enter longer search query");
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
						if ((valObj.type == "sphere") && (valObj.nameGL.toLowerCase().indexOf(suffix.toLowerCase()) != -1)) {
        					var idFound=true;
							sCount+=1;
							sList+=" "+valObj.nameGL+" ["+valObj.nameJP+"] /";
						} else {
            				var idFound=false;
						};
						if ((idFound) && (sCount<3)){
							msg.channel.sendMessage("**"+valObj.nameGL+" ["+valObj.nameJP+"]** ("+valObj["sphere type text"]+", "+valObj.rarity+":star:)\n"+passive.find(valObj, "IT")+"\n");
						};
					}
					if (sCount>=3)
						msg.channel.sendMessage("Not all results shown. List of possible results:"+sList+"//"); 
			} else 
				msg.channel.sendMessage("Please enter longer search query");
		}
	},
	"esgl": {
		usage: "<name>",
		description: "return effects of identified Elgif",
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
				msg.channel.sendMessage("Please enter longer search query");
			}
	},
	"es": {
		usage: "<name>",
		description: "return effects of identified Elgif",
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
				msg.channel.sendMessage("Please enter longer search query");
			}
	},
	/*	"de": {
		usage: "<System ID>",
		description: "return Dream Maker effects of identified unit",
		process: function(bot,msg,suffix){
			if ((suffix != "") && (suffix.length >= 3)) {
					for (var key in deJP) {
						var valObj = deJP[key];
						var exportSTR = "";
						var categoryArray = [];
						var catArrayCnt = 0;
		 	 //Category Loop
			 		if (key == suffix) {
				  	for (spi=0;spi<=100;spi++) {
				if (valObj["category"][spi]) {
				categoryArray[catArrayCnt]=spi;
				catArrayCnt+=1;
				}
			}
				for (spk=0;spk<categoryArray.length;spk++) {
				exportSTR+='**Category**: '+valObj["category"][categoryArray[spk]]["name"]+'\n';
				for (spj=0;spj<valObj["skills"].length;spj++) {
					if (valObj["skills"][spj]["category"] == categoryArray[spk]) {
					exportSTR+=valObj["skills"][spj]["skill"]["bp"]+'SP-'+enhance.find(valObj["skills"][spj]["skill"],"SP");		
					if (valObj["skills"][spj]["dependency"] != "") {
						var reqBP = valObj["skills"][spj]["dependency"].substr(2);			
						for (spm=0;spm<valObj["skills"].length;spm++) {
							if (valObj["skills"][spm]["id"] == reqBP) {
								exportSTR+=' [*Need ['+valObj["skills"][spm]["skill"]["bp"]+'SP-'+enhance.find(valObj["skills"][spm]["skill"],"SP")+'] to be unlocked*]\n';
							}
						}
					} else exportSTR+='\n';
					if (enhance.find(valObj["skills"][spj]["skill"],"SP").indexOf(indexTXT) != -1)
					exportSTR+=valObj["skills"][spj]["skill"]["desc"]+'\n';
					}
				}
			}
					exportSTR+="http://v1.cdn.android.brave.a-lim.jp/unit/img/unit_ills_thum_"+key+".png";}
					
					msg.channel.sendMessage(exportSTR);
					}
			} else 
				msg.channel.sendMessage("Please enter longer search query");
		}
	},*/
	/*"den": {
		usage: "<name>",
		description: "return Dream Maker effects of identified unit",
		process: function(bot,msg,suffix){
			var sName = "";
			var sRarity = suffix.split(" ")[suffix.split(" ").length-1];
			if (isNaN(sRarity) == false) {
				for (i=0;i<suffix.split(" ").length-1;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-2)
						sName+=" ";
				}
			} else {
				sRarity = 8;
				for (i=0;i<suffix.split(" ").length;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-1)
						sName+=" ";
				}
			}	
			var sValid = true;
			if (sRarity < 8) {
				msg.channel.sendMessage("The listed unit is not Dream Evolution unit");
				sValid = false;
			}
			
			if ((sValid) && (sName != "") && (sName.length >= 3)) {
			for (i=0;i<unitListAll["rows"].length;i++) {
				if ((unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1)&&(unitListAll["rows"][i][3] == 8)){
					var sRef = unitListAll["rows"][i][1];
					break;
				}
			}
			if (!sRef)
					msg.channel.sendMessage(suffix + ' is not a valid DE query');	
			if (sRef) {
					for (var key in deJP) {
						var valObj = deJP[key];
						var exportSTR = "";
						var categoryArray = [];
						var catArrayCnt = 0;
		 	 //Category Loop
			 		if (key == sRef) {
				for (spi=0;spi<=100;spi++) {
				if (valObj["category"][spi]) {
				categoryArray[catArrayCnt]=spi;
				catArrayCnt+=1;
				}
				}
				for (spk=0;spk<categoryArray.length;spk++) {
				exportSTR+='**Category**: '+valObj["category"][categoryArray[spk]]["name"]+'\n';
				for (spj=0;spj<valObj["skills"].length;spj++) {
					if (valObj["skills"][spj]["category"] == categoryArray[spk]) {
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
				}
			}
					exportSTR+="http://v1.cdn.android.brave.a-lim.jp/unit/img/unit_ills_thum_"+key+".png";}
					msg.channel.sendMessage(exportSTR);
					};
			}
			} else 
				msg.channel.sendMessage("Please enter longer search query");
			}
	},*/
	/*"degl": {
		usage: "<System ID>",
		description: "return Dream Maker effects of identified unit",
		process: function(bot,msg,suffix){
			if ((suffix != "") && (suffix.length >= 3)) {
					for (var key in deGL) {
						var valObj = deGL[key];
						var exportSTR = "";
						var categoryArray = [];
						var catArrayCnt = 0;
		 	 //Category Loop
			 		if (key == suffix) {
				  	for (spi=0;spi<=100;spi++) {
				if (valObj["category"][spi]) {
				categoryArray[catArrayCnt]=spi;
				catArrayCnt+=1;
				}
			}
				for (spk=0;spk<categoryArray.length;spk++) {
				exportSTR+='**Category**: '+valObj["category"][categoryArray[spk]]["name"]+'\n';
				for (spj=0;spj<valObj["skills"].length;spj++) {
					if (valObj["skills"][spj]["category"] == categoryArray[spk]) {
					exportSTR+=valObj["skills"][spj]["skill"]["bp"]+'SP-'+enhance.find(valObj["skills"][spj]["skill"],"SP");		
					if (valObj["skills"][spj]["dependency"] != "") {
						var reqBP = valObj["skills"][spj]["dependency"].substr(2);			
						for (spm=0;spm<valObj["skills"].length;spm++) {
							if (valObj["skills"][spm]["id"] == reqBP) {
								exportSTR+=' [*Need ['+valObj["skills"][spm]["skill"]["bp"]+'SP-'+enhance.find(valObj["skills"][spm]["skill"],"SP")+'] to be unlocked*]\n';
							}
						}
					} else exportSTR+='\n';
					if (enhance.find(valObj["skills"][spj]["skill"],"SP").indexOf(indexTXT) != -1)
					exportSTR+=valObj["skills"][spj]["skill"]["desc"]+'\n';
					}
				}
			}
					exportSTR+="http://v1.cdn.android.brave.a-lim.jp/unit/img/unit_ills_thum_"+key+".png";}
					
					msg.channel.sendMessage(exportSTR);
					}
			} else 
				msg.channel.sendMessage("Please enter longer search query");
		}
	},*/
	/*"degln": {
		usage: "<name>",
		description: "return Dream Maker effects of identified unit",
		process: function(bot,msg,suffix){
			var sName = "";
			var sRarity = suffix.split(" ")[suffix.split(" ").length-1];
			if (isNaN(sRarity) == false) {
				for (i=0;i<suffix.split(" ").length-1;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-2)
						sName+=" ";
				}
			} else {
				sRarity = 8;
				for (i=0;i<suffix.split(" ").length;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-1)
						sName+=" ";
				}
			}	
			var sValid = true;
			if (sRarity < 8) {
				msg.channel.sendMessage("The listed unit is not Dream Evolution unit");
				sValid = false;
			}
			
			if ((sValid) && (sName != "") && (sName.length >= 3)) {
			for (i=0;i<unitListAll["rows"].length;i++) {
				if ((unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1)&&(unitListAll["rows"][i][3] == 8)){
					var sRef = unitListAll["rows"][i][1];
					break;
				}
			}
			if (!sRef)
					msg.channel.sendMessage(suffix + ' is not a valid DE query');	
			if (sRef) {
					for (var key in deGL) {
						var valObj = deGL[key];
						var exportSTR = "";
						var categoryArray = [];
						var catArrayCnt = 0;
		 	 //Category Loop
			 		if (key == sRef) {
				for (spi=0;spi<=100;spi++) {
				if (valObj["category"][spi]) {
				categoryArray[catArrayCnt]=spi;
				catArrayCnt+=1;
				}
				}
				for (spk=0;spk<categoryArray.length;spk++) {
				exportSTR+='**Category**: '+valObj["category"][categoryArray[spk]]["name"]+'\n';
				for (spj=0;spj<valObj["skills"].length;spj++) {
					if (valObj["skills"][spj]["category"] == categoryArray[spk]) {
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
				}
			}
					exportSTR+="http://v1.cdn.android.brave.a-lim.jp/unit/img/unit_ills_thum_"+key+".png";}
					msg.channel.sendMessage(exportSTR);
					};
			}
			} else 
				msg.channel.sendMessage("Please enter longer search query");
			}
	},*/
	"sp": {
		usage: "<name>",
		description: "return Dream Maker effects of identified unit",
		process: function(bot,msg,suffix){
			var sName = "";
			var sRarity = suffix.split(" ")[suffix.split(" ").length-1];
			if (isNaN(sRarity) == false) {
				for (i=0;i<suffix.split(" ").length-1;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-2)
						sName+=" ";
				}
			} else {
				sRarity = 0;
				for (i=0;i<suffix.split(" ").length;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-1)
						sName+=" ";
				}
			}
			var sValid = true;
			if (sRarity == 0) {
				sValid = false;
			}	
			if ((sName != "") && (sName.length >= 3)) {
			if (sValid) {
			for (i=0;i<unitListAll["rows"].length;i++) {
				if ((unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) && (sRarity == unitListAll["rows"][i][3])) {
					var sRef = unitListAll["rows"][i][1];
					break;
				}
			}
			} else {
			for (i=unitListAll["rows"].length-1;i>=0;i--) {
				if (unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) {
					var sRef = unitListAll["rows"][i][1];					
					break;
				}
			}
			}
			console.log(sRef);
			if (!sRef)
					msg.channel.sendMessage(suffix + ' is not a valid DE query');	
			if (sRef) {
					for (var key in de) {
						var valObj = de[key];
		 	 /*Category Loop*/
			 		if (key == sRef) {
					msg.channel.sendMessage(valObj["pre"]);
					};
					}
			}
			} else 
				msg.channel.sendMessage("Please enter longer search query");
			}
	},
	"ain": {
		usage: "<name>",
		description: "return Arena AI of identified unit",
		process: function(bot,msg,suffix){
			var sName = "";
			var sRarity = suffix.split(" ")[suffix.split(" ").length-1];
			if (isNaN(sRarity) == false) {
				for (i=0;i<suffix.split(" ").length-1;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-2)
						sName+=" ";
				}
			} else {
				sRarity = 0;
				for (i=0;i<suffix.split(" ").length;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-1)
						sName+=" ";
				}
			}

			var sValid = true;
			if (sRarity == 0) {
				sValid = false;
			}	
			if ((sName != "") && (sName.length >= 3)) {
			if (sValid) {
			for (i=0;i<unitListAll["rows"].length;i++) {
				if ((unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) && (sRarity == unitListAll["rows"][i][3])) {
					var sRef = unitListAll["rows"][i][1];
					break;
				}
			}
			} else {
			for (i=unitListAll["rows"].length-1;i>=0;i--) {
				if (unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) {
					var sRef = unitListAll["rows"][i][1];
					break;
				}
			}
			}
			if (!sRef)
					msg.channel.sendMessage(suffix + ' not found');	
			if (sRef) {
					for (var key in infoJP) {
					var valObj = infoJP[key];
					var exportSTR = "";
			 		if (key == sRef) {
					exportSTR+="**" +valObj.name+ " AI**\n " + ai.find(valObj) + "\n";
					exportSTR+="http://v1.cdn.android.brave.a-lim.jp/unit/img/unit_ills_thum_"+key+".png";
					msg.channel.sendMessage(exportSTR);
					break;
					}					
					};
			}
			} else 
				msg.channel.sendMessage("Please enter longer search query");
			}
	},
	"lsn": {
		usage: "<name>",
		description: "return Arena AI of identified unit",
		process: function(bot,msg,suffix){
			var sName = "";
			var sRarity = suffix.split(" ")[suffix.split(" ").length-1];
			if (isNaN(sRarity) == false) {
				for (i=0;i<suffix.split(" ").length-1;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-2)
						sName+=" ";
				}
			} else {
				sRarity = 0;
				for (i=0;i<suffix.split(" ").length;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-1)
						sName+=" ";
				}
			}
			var sValid = true;
			if (sRarity == 0) {
				sValid = false;
			}	
			if ((sName != "") && (sName.length >= 3)) {
			if (sValid) {
			for (i=0;i<unitListAll["rows"].length;i++) {
				if ((unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) && (sRarity == unitListAll["rows"][i][3])) {
					var sRef = unitListAll["rows"][i][1];
					msg.channel.sendMessage('**'+unitListAll["rows"][i][2]+'** LS\n'+unitListAll["rows"][i][5]);
					break;
				}
			}
			} else {
			for (i=unitListAll["rows"].length-1;i>=0;i--) {
				if (unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) {
					var sRef = unitListAll["rows"][i][1];
					msg.channel.sendMessage('**'+unitListAll["rows"][i][2]+'** LS\n'+unitListAll["rows"][i][5]);
					break;
				}
			}
			}
			if (!sRef)
					msg.channel.sendMessage(suffix + ' not found');	
			} else 
				msg.channel.sendMessage("Please enter longer search query");
			}
	},
	"skill": {
		usage: "<name>",
		description: "return Skill of identified unit",
		process: function(bot,msg,suffix){
			var sName = "";
			var sRarity = suffix.split(" ")[suffix.split(" ").length-1];
			if (isNaN(sRarity) == false) {
				for (i=0;i<suffix.split(" ").length-1;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-2)
						sName+=" ";
				}
			} else {
				sRarity = 0;
				for (i=0;i<suffix.split(" ").length;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-1)
						sName+=" ";
				}
			}
			var sValid = true;
			if (sRarity == 0) {
				sValid = false;
			}	
			if ((sName != "") && (sName.length >= 3)) {
			if (sValid) {
			for (i=0;i<unitListAll["rows"].length;i++) {
				if ((unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) && (sRarity == unitListAll["rows"][i][3])) {
					var sRef = i;
					break;
				}
			}
			} else {
			for (i=unitListAll["rows"].length-1;i>=0;i--) {
				if (unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) {
					var sRef = i;					
					break;
				}
			}
			}
			if (!sRef)
					msg.channel.sendMessage(suffix + ' not found');	
			if (sRef) {
					var tempmsg = "";
					tempmsg+='**'+unitListAll["rows"][i][2]+'**\n\n**LS:** '+unitListAll["rows"][i][5];
					if (unitListAll["rows"][sRef][18] != "")
						tempmsg+= '\n\n**ES:** '+unitListAll["rows"][i][18];
					if (unitListAll["rows"][sRef][19] != "")
						tempmsg+=' (Condition: '+unitListAll["rows"][sRef][19]+')';
					if (unitListAll["rows"][sRef][6] != "")	{
						tempmsg+= '\n\n**BB:** ';
						tempmsg+='(';
					if ((unitListAll["rows"][sRef][7] != "") && (unitListAll["rows"][sRef][7] != "NaN"))
						tempmsg+=unitListAll["rows"][sRef][7];
						else
						tempmsg+='0';
					tempmsg+='Hits/';
					if (unitListAll["rows"][sRef][8] != "")
						tempmsg+=unitListAll["rows"][sRef][8];
						else
						tempmsg+='0';
					tempmsg+='BC Fill/';
					if (unitListAll["rows"][sRef][9] != "")
						tempmsg+=unitListAll["rows"][sRef][9];
						else
						tempmsg+='0';
					tempmsg+='DC) ';
					tempmsg+=unitListAll["rows"][i][6];
					}
					if (unitListAll["rows"][sRef][10] != ""){
						tempmsg+= '\n\n**SBB:** ';
						tempmsg+='(';
					if ((unitListAll["rows"][sRef][11] != "") && (unitListAll["rows"][sRef][11] != "NaN"))
						tempmsg+=unitListAll["rows"][sRef][11];
						else
						tempmsg+='0';
					tempmsg+='Hits/';
					if (unitListAll["rows"][sRef][12] != "")
						tempmsg+=unitListAll["rows"][sRef][12];
						else
						tempmsg+='0';
					tempmsg+='BC Fill/';
					if (unitListAll["rows"][sRef][13] != "")
						tempmsg+=unitListAll["rows"][sRef][13];
						else
						tempmsg+='0';
					tempmsg+='DC) ';
					tempmsg+=unitListAll["rows"][i][10];
					}
					if (unitListAll["rows"][sRef][14] != ""){
						tempmsg+= '\n\n**UBB:** ';
						tempmsg+='(';
					if ((unitListAll["rows"][sRef][15] != "") && (unitListAll["rows"][sRef][15] != "NaN"))
						tempmsg+=unitListAll["rows"][sRef][15];
						else
						tempmsg+='0';
					tempmsg+='Hits/';
					if (unitListAll["rows"][sRef][16] != "")
						tempmsg+=unitListAll["rows"][sRef][16];
						else
						tempmsg+='0';
					tempmsg+='BC Fill/';
					if (unitListAll["rows"][sRef][17] != "")
						tempmsg+=unitListAll["rows"][sRef][17];
						else
						tempmsg+='0';
					tempmsg+='DC) ';
					tempmsg+=unitListAll["rows"][i][14];
					}
					msg.channel.sendMessage(tempmsg);
			}
			} else 
				msg.channel.sendMessage("Please enter longer search query");
			}
	},
	"esn": {
		usage: "<name>",
		description: "return Arena AI of identified unit",
		process: function(bot,msg,suffix){
			var sName = "";
			var sRarity = suffix.split(" ")[suffix.split(" ").length-1];
			if (isNaN(sRarity) == false) {
				for (i=0;i<suffix.split(" ").length-1;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-2)
						sName+=" ";
				}
			} else {
				sRarity = 0;
				for (i=0;i<suffix.split(" ").length;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-1)
						sName+=" ";
				}
			}
			var sValid = true;
			if (sRarity == 0) {
				sValid = false;
			}	
			if ((sName != "") && (sName.length >= 3)) {
			if (sValid) {
			for (i=0;i<unitListAll["rows"].length;i++) {
				if ((unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) && (sRarity == unitListAll["rows"][i][3])) {
					var sRef = i;
					break;
				}
			}
			} else {
			for (i=unitListAll["rows"].length-1;i>=0;i--) {
				if (unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) {
					var sRef = i;					
					break;
				}
			}
			}
			if (!sRef)
					msg.channel.sendMessage(suffix + ' not found');	
			if (sRef) {
				if (unitListAll["rows"][sRef][18] != "")
				{
					var exportSTR = '**'+unitListAll["rows"][i][2]+'** ES\n'+unitListAll["rows"][i][18];
					if (unitListAll["rows"][sRef][19] != "")
						exportSTR+=' (Condition: '+unitListAll["rows"][sRef][19]+')';
					msg.channel.sendMessage(exportSTR);
				} else
					msg.channel.sendMessage(unitListAll["rows"][i][2]+' does not have an ES');
			}
			} else 
				msg.channel.sendMessage("Please enter longer search query");
			}
	},
	"bbn": {
		usage: "<name>",
		description: "return Arena AI of identified unit",
		process: function(bot,msg,suffix){
			var sName = "";
			var sRarity = suffix.split(" ")[suffix.split(" ").length-1];
			if (isNaN(sRarity) == false) {
				for (i=0;i<suffix.split(" ").length-1;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-2)
						sName+=" ";
				}
			} else {
				sRarity = 0;
				for (i=0;i<suffix.split(" ").length;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-1)
						sName+=" ";
				}
			}
			var sValid = true;
			if (sRarity == 0) {
				sValid = false;
			}	
			if ((sName != "") && (sName.length >= 3)) {
			if (sValid) {
			for (i=0;i<unitListAll["rows"].length;i++) {
				if ((unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) && (sRarity == unitListAll["rows"][i][3])) {
					var sRef = i;
					break;
				}
			}
			} else {
			for (i=unitListAll["rows"].length-1;i>=0;i--) {
				if (unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) {
					var sRef = i;					
					break;
				}
			}
			}
			if (!sRef)
					msg.channel.sendMessage(suffix + ' not found');	
			if (sRef) {
				if (unitListAll["rows"][sRef][6] != "")
				{
					var exportSTR = '**'+unitListAll["rows"][i][2]+'** BB\n'
					exportSTR+='(';
					if ((unitListAll["rows"][sRef][7] != "") && (unitListAll["rows"][sRef][7] != "NaN"))
						exportSTR+=unitListAll["rows"][sRef][7];
						else
						exportSTR+='0';
					exportSTR+='Hits/';
					if (unitListAll["rows"][sRef][8] != "")
						exportSTR+=unitListAll["rows"][sRef][8];
						else
						exportSTR+='0';
					exportSTR+='BC Fill/';
					if (unitListAll["rows"][sRef][9] != "")
						exportSTR+=unitListAll["rows"][sRef][9];
						else
						exportSTR+='0';
					exportSTR+='DC) ';
					exportSTR+=unitListAll["rows"][i][6];
					msg.channel.sendMessage(exportSTR);
				} else
					msg.channel.sendMessage(unitListAll["rows"][i][2]+' does not have a BB Skill');
			}
			} else 
				msg.channel.sendMessage("Please enter longer search query");
			}
	},
	"sbbn": {
		usage: "<name>",
		description: "return Arena AI of identified unit",
		process: function(bot,msg,suffix){
			var sName = "";
			var sRarity = suffix.split(" ")[suffix.split(" ").length-1];
			if (isNaN(sRarity) == false) {
				for (i=0;i<suffix.split(" ").length-1;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-2)
						sName+=" ";
				}
			} else {
				sRarity = 0;
				for (i=0;i<suffix.split(" ").length;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-1)
						sName+=" ";
				}
			}
			var sValid = true;
			if (sRarity == 0) {
				sValid = false;
			}	
			if ((sName != "") && (sName.length >= 3)) {
			if (sValid) {
			for (i=0;i<unitListAll["rows"].length;i++) {
				if ((unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) && (sRarity == unitListAll["rows"][i][3])) {
					var sRef = i;
					break;
				}
			}
			} else {
			for (i=unitListAll["rows"].length-1;i>=0;i--) {
				if (unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) {
					var sRef = i;					
					break;
				}
			}
			}
			if (!sRef)
					msg.channel.sendMessage(suffix + ' not found');	
			if (sRef) {
				if (unitListAll["rows"][sRef][10] != "")
				{
					var exportSTR = '**'+unitListAll["rows"][i][2]+'** SBB\n'
					exportSTR+='(';
					if ((unitListAll["rows"][sRef][11] != "") && (unitListAll["rows"][sRef][11] != "NaN"))
						exportSTR+=unitListAll["rows"][sRef][11];
						else
						exportSTR+='0';
					exportSTR+='Hits/';
					if (unitListAll["rows"][sRef][12] != "")
						exportSTR+=unitListAll["rows"][sRef][12];
						else
						exportSTR+='0';
					exportSTR+='BC Fill/';
					if (unitListAll["rows"][sRef][13] != "")
						exportSTR+=unitListAll["rows"][sRef][13];
						else
						exportSTR+='0';
					exportSTR+='DC) ';
					exportSTR+=unitListAll["rows"][i][10];
					msg.channel.sendMessage(exportSTR);
				} else
					msg.channel.sendMessage(unitListAll["rows"][i][2]+' does not have a SBB Skill');
			}
			} else 
				msg.channel.sendMessage("Please enter longer search query");
			}
	},
	"ubbn": {
		usage: "<name>",
		description: "return Arena AI of identified unit",
		process: function(bot,msg,suffix){
			var sName = "";
			var sRarity = suffix.split(" ")[suffix.split(" ").length-1];
			if (isNaN(sRarity) == false) {
				for (i=0;i<suffix.split(" ").length-1;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-2)
						sName+=" ";
				}
			} else {
				sRarity = 0;
				for (i=0;i<suffix.split(" ").length;i++){
					sName+=suffix.split(" ")[i];
					if (i<suffix.split(" ").length-1)
						sName+=" ";
				}
			}
			var sValid = true;
			if (sRarity == 0) {
				sValid = false;
			}	
			if ((sName != "") && (sName.length >= 3)) {
			if (sValid) {
			for (i=0;i<unitListAll["rows"].length;i++) {
				if ((unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) && (sRarity == unitListAll["rows"][i][3])) {
					var sRef = i;
					break;
				}
			}
			} else {
			for (i=unitListAll["rows"].length-1;i>=0;i--) {
				if (unitListAll["rows"][i][2].toLowerCase().indexOf(sName.toLowerCase()) != -1) {
					var sRef = i;					
					break;
				}
			}
			}
			if (!sRef)
					msg.channel.sendMessage(suffix + ' not found');	
			if (sRef) {
				if (unitListAll["rows"][sRef][14] != "")
				{
					var exportSTR = '**'+unitListAll["rows"][i][2]+'** UBB\n'
					exportSTR+='(';
					if ((unitListAll["rows"][sRef][15] != "") && (unitListAll["rows"][sRef][15] != "NaN"))
						exportSTR+=unitListAll["rows"][sRef][15];
						else
						exportSTR+='0';
					exportSTR+='Hits/';
					if (unitListAll["rows"][sRef][16] != "")
						exportSTR+=unitListAll["rows"][sRef][16];
						else
						exportSTR+='0';
					exportSTR+='BC Fill/';
					if (unitListAll["rows"][sRef][17] != "")
						exportSTR+=unitListAll["rows"][sRef][17];
						else
						exportSTR+='0';
					exportSTR+='DC) ';
					exportSTR+=unitListAll["rows"][i][14];
					msg.channel.sendMessage(exportSTR);
				} else
					msg.channel.sendMessage(unitListAll["rows"][i][2]+' does not have a UBB Skill');
			}
			} else 
				msg.channel.sendMessage("Please enter longer search query");
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

function checkMessageForCommand(msg, isEdit) {
	//check if message is a command
	if(msg.author.id != bot.user.id && (msg.content.startsWith(Config.commandPrefix))){
        console.log("treating " + msg.content + " from " + msg.author + " as command");
		var cmdTxt = msg.content.split(" ")[0].substring(Config.commandPrefix.length);
        var suffix = msg.content.substring(cmdTxt.length+Config.commandPrefix.length+1);//add one for the ! and one for the space
        if(msg.isMentioned(bot.user)){
			try {
				cmdTxt = msg.content.split(" ")[1];
				suffix = msg.content.substring(bot.user.mention().length+cmdTxt.length+Config.commandPrefix.length+1);
			} catch(e){ //no command
				msg.channel.sendMessage("Yes?");
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
							msg.channel.sendMessage(info);
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
		else if(cmd) {
			if(Permissions.checkPermission(msg.author,cmdTxt)){
				try{
					cmd.process(bot,msg,suffix,isEdit);
				} catch(e){
					var msgTxt = "command " + cmdTxt + " failed :(";
					if(Config.debug){
						 msgTxt += "\n" + e.stack;
					}
					msg.channel.sendMessage(msgTxt);
				}
			} else {
				msg.channel.sendMessage("You are not allowed to run " + cmdTxt + "!");
			}
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
                msg.channel.sendMessage(msg.author + ", you called?");
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
