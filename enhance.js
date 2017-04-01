// Leader Skill Parse
var lsParseObj=[
		{	"skillid":"1", "cmt":"Stats Buff c:None","skillref":["@"]},
		{	"skillid":"2", "cmt":"Stats Buff c:Element","skillref":["@"]},
		{	"skillid":"3", "cmt":"Stats Buff c:Type","skillref":["@"]},
		{	"skillid":"4", "cmt":"Ailments Resist", "skillref":["@"]},
		{	"skillid":"5", "cmt":"Elemental Resist", "skillref":["!Resist Elemental DMG (","@","!)"]},
		//{"skillid":"6", "cmt":"","skillref":["@"]},
		//{"skillid":"7", "cmt":"","skillref":["@"]},
		{	"skillid":"8", "cmt":"Mitigate DMG","skillref":["!Reduce DMG (", "dmg% mitigation","!%)"]},
		{	"skillid":"9", "cmt":"BC Fill Per Turn","skillref":["bc fill per turn","!BC Fill Per Turn"]},
		{	"skillid":"10", "cmt":"HC Fill Rate+","skillref":["hc effectiveness%", "!% HC Fill Rate+"]},
		{	"skillid":"11", "cmt":"Stats Buff c:HP","skillref":["@"]},
		{	"skillid":"12", "cmt":"Drop Rate% c:HP","skillref":["@","! (HP<","hp below % buff requirement","!%)"]},
		{	"skillid":"13", "cmt":"BC Fill on Enemy Kill", "skillref":["bc fill on enemy defeat%", "!% Chance ", "bc fill on enemy defeat low", "!-", "bc fill on enemy defeat high", "!BC Fill on Enemy Kill"]},
		{	"skillid":"14", "cmt":"Chance Reduce DMG","skillref":["dmg reduction chance%", "!% Chance Reduce DMG (", "dmg reduction%", "!%)"]},
		{	"skillid":"15", "cmt":"Heal c:Defeat","skillref":["!Heal ", "hp% recover on enemy defeat low", "!-", "hp% recover on enemy defeat high", "!% HP when Enemy DEFEATED"]},
		{	"skillid":"16", "cmt":"Heal c:Win","skillref":["!Heal ", "hp% recover on battle win low", "!-", "hp% recover on battle win high", "!% HP when Battle WON"]},
		{	"skillid":"17", "cmt":"Chance HP Drain","skillref":["hp drain chance%", "!% Chance Drain ", "hp drain% low", "!-", "hp drain% high", "!% HP"]},
		//{"skillid":"18", "cmt":"","skillref":["@"]},
		{	"skillid":"19", "cmt":"Drop Rate%","skillref":["@"]},
		{	"skillid":"20", "cmt":"Ailment%","skillref":["@"]},
		{	"skillid":"21", "cmt":"XTurn Stats Buff","skillref":["@", "first x turns", "!Turns"]},
		//{"skillid":"22", "cmt":"","skillref":["@"]},
		{	"skillid":"23", "cmt":"BC Fill c:Won","skillref":["battle end bc fill low", "!-", "battle end bc fill high", "!% BC Fill when Battle WON"]},
		{	"skillid":"24", "cmt":"Heal when ATKed","skillref":["dmg% to hp% when attacked chance%", "!% Chance Heal ", "dmg% to hp% when attacked low", "!-", "dmg% to hp% when attacked high", "!% DMG when ATKed"]},
		{	"skillid":"25", "cmt":"BC Fill when ATKed","skillref":["bc fill when attacked%", "!% Chance ", "bc fill when attacked low", "!-", "bc fill when attacked high", "!BC Fill when ATKed"]},
		{	"skillid":"26", "cmt":"DMG Reflect","skillref":["dmg% reflect chance%", "!% Chance Reflect ", "dmg% reflect low", "!-", "dmg% reflect high", "!% DMG"]},
		{	"skillid":"27", "cmt":"Target Chance","skillref":["target% chance", "!% Chance to be Targeted", "@"]},
		{	"skillid":"28", "cmt":"Target Chance c:HP","skillref":["target% chance", "!% Chance to be Targeted", "! (HP<","hp below % passive requirement","!%)"]},
		{	"skillid":"29", "cmt":"Ignore Def","skillref":["ignore def%","!% Chance Ignore DEF"]},
		{	"skillid":"30", "cmt":"Stats Buff c:BB","skillref":["@"]},
		{	"skillid":"31", "cmt":"Spark DMG+/BC+","skillref":["@","! on Spark"]},
		{	"skillid":"32", "cmt":"BC Fill Rate+","skillref":["bb gauge fill rate%", "!% BC Fill Rate+"]},
		{	"skillid":"33", "cmt":"Heal Over Turn","skillref":["!Heal Over Turn (","turn heal low","!-","turn heal high","!)"]},
		{	"skillid":"34", "cmt":"Crit DMG+","skillref":["crit multiplier%", "!% CRIT DMG+"]},
		{	"skillid":"35", "cmt":"BC Fill on ATKing","skillref":["bc fill when attacking%","!% Chance ", "bc fill when attacking low", "!-", "bc fill when attacking low", "!BC Fill on ATKing"]},
		{	"skillid":"36", "cmt":"Additional Action","skillref":["additional actions", "!Additional Action(s)"]},
		{	"skillid":"37", "cmt":"Normal HitCount+","skillref":["!Normal HitCount +", "hit increase/hit", "!00% (", "@", "!% DMG+)"]},
		//{"skillid":"38", "cmt":"","skillref":["@"]},
		//{"skillid":"39", "cmt":"","skillref":["@"]},
		{	"skillid":"40", "cmt":"Stats Convert","skillref":["!Convert ","converted attribute","! to (","@","!)"]},
		{	"skillid":"41", "cmt":"Stats Buff c:ElementCount","skillref":["@"]},
		{	"skillid":"42", "cmt":"Stats Buff c:Gender","skillref":["@"]},
		{	"skillid":"43", "cmt":"DMG to 1","skillref":["take 1 dmg%", "!% Chance Reduce DMG to 1"]},
		{	"skillid":"44", "cmt":"Stats Buff in Number","skillref":["@"]},
		{	"skillid":"45", "cmt":"Negate Crit DMG","skillref":["!Negate Crit DMG (", "base crit% resist","!+","buff crit% resist", "!%)"]},
		{	"skillid":"46", "cmt":"Stats Base Buff c:HP","skillref":["@","!Based on HP ", "buff proportional to hp"]},
		{	"skillid":"47", "cmt":"BC Fill on Spark","skillref":["bc fill on spark%", "!% Chance ", "bc fill on spark low", "!-", "bc fill on spark high", "!BC Fill on Spark"]},
		{	"skillid":"48", "cmt":"Reduce BB Cost REQUIRED","skillref":["!Reduce ","reduced bb bc cost%","!% BB Cost REQUIRED"]},
		{	"skillid":"49", "cmt":"Reduce BB Gauge USED","skillref":["reduced bb bc use chance%","!% Chance Reduce ", "reduced bb bc use% low", "!-", "reduced bb bc use% high", "!% BB Gauge USED"]},
		{	"skillid":"50", "cmt":"Elemental Weakness DMG+","skillref":["elemental weakness multiplier%", "!% Element Weakness DMG+ ","@"]},
		//{"skillid":"51", "cmt":"","skillref":["@"]},
		//{"skillid":"52", "cmt":"","skillref":["@"]},
		{	"skillid":"53", "cmt":"Negate Crit Chance/DMG","skillref":["!Negate DMG Factors (","@","!)"]},
		//{"skillid":"54", "cmt":"","skillref":["@"]},
		{	"skillid":"55", "cmt":"Trigger Buff","skillref":["!Buff  [","#","!] ","!(HP <", "hp below % buff activation", "!)"]},
		//{"skillid":"56", "cmt":"","skillref":["@"]},
		//{"skillid":"57", "cmt":"","skillref":["@"]},
		{	"skillid":"58", "cmt":"Reduce DMG on Guard","skillref":["!Reduce DMG (", "guard increase mitigation%", "!%) on Guard"]},
		{	"skillid":"59", "cmt":"BC Fill when ATKed on Guard","skillref":["bc filled when attacked while guarded", "!BC Fill when ATKed on Guard"]},
		//{"skillid":"60", "cmt":"","skillref":["@"]},
		{	"skillid":"61", "cmt":"BC Fill on Guard","skillref":["bc filled on guard", "!BC Fill on Guard"]},
		{	"skillid":"62", "cmt":"Mitigate Elemental ATK","skillref":["dmg% mitigation for elemental attacks", "!% Element Atk Mitigated","@"]},
		{	"skillid":"63", "cmt":"Mitigate Elemental ATK XTurn","skillref":["dmg% mitigation for elemental attacks", "!% Element Atk Mitigated ","@", "! For the First ", "dmg% mitigation for elemental attacks buff for first x turns", "!Turns"]},
		{	"skillid":"64", "cmt":"BB ATK%+","skillref":["bb atk% buff", "!% BB ATK%+"]},
		{	"skillid":"65", "cmt":"BC Fill on Crit","skillref":["bc fill on crit min", "!-", "bc fill on crit max", "!BC Fill on Crit"]},
		{	"skillid":"66", "cmt":"Trigger Effect","skillref":["!Add  [","#","!] ","@"]},
		//{"skillid":"67", "cmt":"","skillref":["@"]},
		//{"skillid":"68", "cmt":"","skillref":["@"]},
		{	"skillid":"69", "cmt":"Angel Idol Chance","skillref":["angel idol recover counts", "! Time(s) (", "angel idol recover chance% low", "!%-", "angel idol recover chance% high", "!%) Chance Withstand a KNOCKOUT ATK"]},
		{	"skillid":"70", "cmt":"OD Fill Rate+","skillref":["od fill rate%", "!% OD Fill Rate+"]},
		{	"skillid":"71", "cmt":"Ails Counter","skillref":["!Chance to Counter Inflect ","@"]},
		{	"skillid":"72", "cmt":"BC/Heal at Begin","skillref":["@"]},
		{	"skillid":"73", "cmt":"Ails/Debuff Resists","skillref":["@"]},
		{"skillid":"74", "cmt":"ATK%+ to Ailed","skillref":["atk% buff when enemy has ailment", "!% ATK%+ to Ails-Infected Enemies ","@"]},
		{	"skillid":"75", "cmt":"Spark Debuff","skillref":["spark debuff chance%", "!% Chance Debuff Enemies to TAKE ", "spark debuff%", "!% DMG+ on SPARK for ", "spark debuff turns", "!Turn(s)"]},
		//{"skillid":"76", "cmt":"","skillref":["@"]},
		{	"skillid":"77", "cmt":"Negate Spark DMG","skillref":["!Negate Spark DMG (", "base spark dmg% resist","!+","buff spark dmg% resist", "!%)"]},
		{	"skillid":"78", "cmt":"Trigger Buff","skillref":["!Buff  [","#","!] ","!(Taken ", "damage threshold buff activation" ,"!DMG)"]},
		{	"skillid":"79", "cmt":"BB DMG Taken","skillref":["increase bb gauge", "!BC fill when TAKEN ", "damage threshold activation", "! DMG"]},
		{	"skillid":"80", "cmt":"Trigger Buff","skillref":["!Buff  [","#","!] ","!(Deal ", "damage dealt threshold buff activation" ,"!DMG)"]},
		{	"skillid":"81", "cmt":"BB DMG Dealt","skillref":["increase bb gauge", "!BC fill when DEALT ", "damage dealt threshold activation", "! DMG"]},
		{	"skillid":"82", "cmt":"Trigger Buff","skillref":["!Buff  [","#","!] ","!(Receive ", "bc receive count buff activation" ,"!BC)"]},
		//{"skillid":"83", "cmt":"","skillref":["@"]},
		{	"skillid":"84", "cmt":"Trigger Buff","skillref":["!Buff  [","#","!] ","!(Receive ", "hc receive count buff activation" ,"!HC)"]},
		//{"skillid":"85", "cmt":"","skillref":["@"]},
		{	"skillid":"86", "cmt":"Trigger Buff","skillref":["!Buff  [","#","!] ","!(Deal ", "spark count buff activation" ,"!Spark)"]},
		//{"skillid":"87", "cmt":"","skillref":["@"]},
		//{"skillid":"88", "cmt":"","skillref":["@"]},
		{	"skillid":"89", "cmt":"Trigger Buff","skillref":["!Buff  [","#","!] ","!(On Crit)"]},
		//{"skillid":"90", "cmt":"","skillref":["@"]},
		{	"skillid":"91", "cmt":"","skillref":["@"]},
		{	"skillid":"92", "cmt":"Negate Def Ignore DMG","skillref":["!Negate Def Ignore DMG (", "ignore def resist chance%", "!%)"]},
		{"skillid":"93", "cmt":"!Passive Elemental ATK","skillref":["!All Elements Added to ATK"]},
		//{"skillid":"94", "cmt":"","skillref":["@"]},
		//{"skillid":"95", "cmt":"","skillref":["@"]},
		{	"skillid":"96", "cmt":"Normal AOE ATK Chance","skillref":["chance to aoe","!% Chance for Normal AOE ATK (","aoe atk inc%", "!% DMG+)" ]},
		{	"skillid":"97", "cmt":"Quest EXP+","skillref":["xp gained increase%", "!% QUEST EXP+"]},
		{"skillid":"98", "cmt":"","skillref":["@"]},
		{	"skillid":"99", "cmt":"Sphere can be equipped regardless of category","skillref":["!Sphere can be equipped regardless of category"]},
		{	"skillid":"100", "cmt":"Crit Spark Chance","skillref":["@"]},
		{	"skillid":"101", "cmt":"Heal on Spark","skillref":["heal on spark%", "!% Chance Heal ", "heal on spark low", "!-", "heal on spark high", "! on SPARK"]},
		{	"skillid":"102", "cmt":"Passive Element Added","skillref":["!Add Element(s) to ATK ", "@"]},
		{	"skillid":"103", "cmt":"BB ATK% c:HP","skillref":["@"]},
		{"skillid":"104", "cmt":"Spark DMG+ c:HP","skillref":["@"]},
		{	"skillid":"105", "cmt":"Incredimentally Stats Buff","skillref":["!Incredimentally increase up to ", "@", "! within ", "turn count", "!Turns"]},
		{	"skillid":"106", "cmt":"Angel Idol c:Overdrive","skillref":["@"]},
		//{"skillid":"107", "cmt":"","skillref":["@"]},
		//{"skillid":"108", "cmt":"","skillref":["@"]},
		{	"skillid":"109", "cmt":"BC Fill Rate- Chance","skillref":["@"]},
		{	"skillid":"110", "cmt":"BB Gauge Drain Chance","skillref":["@"]},
		{	"skillid":"111", "cmt":"Skill AI Rate+","skillref":["@"]},
		{	"skillid":"112", "cmt":"ABP/CBP Pts+","skillref":["@"]},
		{	"skillid":"113", "cmt":"BB ATK% c:HP","skillref":["@"]},
		{	"skillid":"143", "cmt":"ATK Cap","skillref":["@"]},
      ];
		
// Variable Array
    /*LS group definition*/
    var lsstatsBuffArray=[{"skillid":"hp% buff", "suffix":"% HP "}, {"skillid":"atk% buff", "suffix":"% ATK "}, {"skillid":"def% buff", "suffix":"% DEF "}, {"skillid":"rec% buff", "suffix":"% REC "}, {"skillid":"crit% buff", "suffix":"% CRIT "}];
	var lsistatsBuffArray=[{"skillid":"hp% max buff", "suffix":"% HP "}, {"skillid":"atk% max buff", "suffix":"% ATK "}, {"skillid":"def% max buff", "suffix":"% DEF "}, {"skillid":"rec% max buff", "suffix":"% REC "}, {"skillid":"crit% max buff", "suffix":"% CRIT "}];
	var lsbasestatsBuffArray=[{"skillid":"atk% extra buff based on hp", "altid":"atk% base buff", "suffix":"% ATK "}, {"skillid":"def% extra buff based on hp", "altid":"def% base buff", "suffix":"% DEF "}, {"skillid":"rec% extra buff based on hp", "altid":"rec% base buff", "suffix":"% REC "}, {"skillid":"crit% extra buff based on hp", "altid":"crit% base buff", "suffix":"% CRIT "}];
	var lsDMGResistArray=[{"skillid":"crit chance buffed resist%", "altid":"crit chance base resist%", "suffix":"% Crit Chance "}, {"skillid":"crit dmg buffed damage resist%", "altid":"crit dmg base damage resist%", "suffix":"% Crit DMG "}, {"skillid":"strong buffed element damage resist%", "altid":"strong base element damage resist%", "suffix":"% Elemental Weakness DMG "}];
    var lsCrystalsBuffArray=[{"skillid":"bc drop rate% buff", "suffix":"% BC+ "}, {"skillid":"hc drop rate% buff", "suffix":"% HC+ "}, {"skillid":"item drop rate% buff", "suffix":"% Item+ "}, {"skillid":"karma drop rate% buff", "suffix":"% Karma+ "}, {"skillid":"zel drop rate% buff", "suffix":"% Zel+ "}];
    var lsXTurnsArray=[{"skillid":"first x turns atk% (1)", "suffix":"% ATK "}, {"skillid":"first x turns def% (3)", "suffix":"% DEF "}, {"skillid":"first x turns rec% (5)", "suffix":"% REC "}];
    var lsailsArray=[{"skillid":"injury%", "suffix":"% Injury "}, {"skillid":"weaken%", "suffix":"% Weak "}, {"skillid":"sick%", "suffix":"% Sick "}, {"skillid":"poison%", "suffix":"% Poison "}, {"skillid":"paralysis%", "suffix":"% Para "}, {"skillid":"curse%", "suffix":"% Curse "}];
	var lscailsArray=[{"skillid":"counter inflict injury%", "suffix":"% Injury "}, {"skillid":"counter inflict weaken%", "suffix":"% Weak "}, {"skillid":"counter inflict sick%", "suffix":"% Sick "}, {"skillid":"counter inflict poison%", "suffix":"% Poison "}, {"skillid":"counter inflict paralysis%", "suffix":"% Para "}, {"skillid":"counter inflict curse%", "suffix":"% Curse "}];
    var lsailsResistArray=[{"skillid":"injury resist%", "suffix":"Injury"}, {"skillid":"weaken resist%", "suffix":"Weaken"}, {"skillid":"sick resist%", "suffix":"Sick"}, {"skillid":"poison resist%", "suffix":"Poison"}, {"skillid":"paralysis resist%", "suffix":"Para"}, {"skillid":"curse resist%", "suffix":"Curse"}];
    var lsdbResistArray=[{"skillid":"atk down resist%", "suffix":"ATK down"}, {"skillid":"def down resist%", "suffix":"DEF down"}, {"skillid":"rec down resist%", "suffix":"REC down"}];
    var lsElementMitiArray=[{"skillid":"mitigate fire attacks", "suffix":"fire"}, {"skillid":"mitigate water attacks", "suffix":"water"}, {"skillid":"mitigate earth attacks", "suffix":"earth"}, {"skillid":"mitigate thunder attacks", "suffix":"thunder"}, {"skillid":"mitigate light attacks", "suffix":"light"}, {"skillid":"mitigate dark attacks", "suffix":"dark"}];
    var lsElementResistArray=[{"skillid":"fire resist%", "suffix":"fire"}, {"skillid":"water resist%", "suffix":"water"}, {"skillid":"earth resist%", "suffix":"earth"}, {"skillid":"thunder resist%", "suffix":"thunder"}, {"skillid":"light resist%", "suffix":"light"}, {"skillid":"dark resist%", "suffix":"dark"}];
    var lsWeakElementArray=[{"skillid":"fire units do extra elemental weakness dmg", "suffix":"fire"}, {"skillid":"water units do extra elemental weakness dmg", "suffix":"water"}, {"skillid":"earth units do extra elemental weakness dmg", "suffix":"earth"}, {"skillid":"thunder units do extra elemental weakness dmg", "suffix":"thunder"}, {"skillid":"light units do extra elemental weakness dmg", "suffix":"light"}, {"skillid":"dark units do extra elemental weakness dmg", "suffix":"dark"}];
    var esTrigger=[{"skillid":"trigger on bb", "suffix":"BB"}, {"skillid":"trigger on sbb", "suffix":"SBB"}, {"skillid":"trigger on ubb", "suffix":"UBB"}];
	var buffStatsArray=[]
    var skillConnect=' / ';
    var bbArray=["bb", "sbb","ubb"];
	var SPPassiveArray=["passive", "add to passive"];
	var bbAddArray=["add to bb", "add to sbb", "add to ubb"];
    var lsSplit=' - ';

	/*New Buff*/
	var indexTXT="Undefined effect(s)[";
	
	/*ATK proc ID*/
	var ATKproc = [ 1, 13, 47, 61, 64, 29];
	var triggerCon = ["spark count buff activation", "hp below % buff activation", "damage threshold buff activation", "damage dealt threshold buff activation", "hc receive count buff activation"];
    

// Known Sphere Name
var knownSP=[];
    
try {
	var buff = require("./buff.js");
} catch (e){
	console.log("Error in loading Buff function.\n"+e.stack);
};

try {
	var active = require("./active.js");
} catch (e){
	console.log("Error in loading AS function.\n"+e.stack);
};

exports.find = function (objectSP) {
		  /*Parsing LS Skills*/
		  var functionSTR="";
		  var uparams=[];
          var lsSkillFound=0;
          var genderTemp="";
          if (objectSP) {
              if (objectSP["effects"]) {
              for (pi=0;pi<lsParseObj.length;pi++) {
                var skillSeek=lsParseObj[pi]["skillid"];
				var skillCmt=lsParseObj[pi]["cmt"];
                /*looking each effect array*/
                for (pj=0;pj<objectSP["effects"].length;pj++){ 
					if (objectSP["effects"][pj]["passive"]) {
                    /*resets var for each effect*/
                    if (objectSP["effects"][pj]["passive"]['passive id'])
						var lsPassiveID=objectSP["effects"][pj]["passive"]['passive id'];
					else 
						var lsPassiveID=objectSP["effects"][pj]["passive"]['unknown passive id'];
                    var groupSTR="";
					var conSTR="";
                    var effectFound=false;
                    var triggerSkill="";
					if (objectSP["effects"][pj]["passive"]["triggered effect"])
						triggerSkill+=active.find(objectSP["effects"][pj]["passive"]["triggered effect"]);
					if (objectSP["effects"][pj]["passive"]["buff"])
						triggerSkill+=buff.find(objectSP["effects"][pj]["passive"]["buff"]);
					/*Check collective group buff*/
                    if (skillCmt.indexOf("Stats Buff c:")===0) {
                      for (ix in lsstatsBuffArray) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                            if (effectKey==lsstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsstatsBuffArray[ix]["suffix"];
                            }
                          }
                    }
                      /*checks unique elements requirements*/
					switch (lsPassiveID) {
						case "1":
							break;
						case "2":
							break;
						case "3":{ 	
							if (objectSP["effects"][pj]["passive"]["unit type buffed"]) 
													genderTemp=objectSP["effects"][pj]["passive"]["unit type buffed"].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          	groupSTR+=" ("+genderTemp+")";
						}
							break;
					
						case "11":{
							if (objectSP["effects"][pj]["passive"]["hp below % buff requirement"])
								groupSTR+=" (HP < "+objectSP["effects"][pj]["passive"]["hp below % buff requirement"]+"%)";
							if (objectSP["effects"][pj]["passive"]["hp above % buff requirement"])
								groupSTR+=" (HP >= "+objectSP["effects"][pj]["passive"]["hp above % buff requirement"]+"%)";
						}
							break;
						case "30":{
							if (objectSP["effects"][pj]["passive"]["bb gauge above % buff requirement"])
								groupSTR+=" (BB >= "+objectSP["effects"][pj]["passive"]["bb gauge above % buff requirement"]+"%)";
							if (objectSP["effects"][pj]["passive"]["bb gauge below % buff requirement"])
								groupSTR+=" (BB < "+objectSP["effects"][pj]["passive"]["bb gauge below % buff requirement"]+"%)";
						}
							break;
						case "41":
							groupSTR+=" ("+objectSP["effects"][pj]["passive"]["unique elements required"]+" elements required)";
							break;
						case "42":{
							if (objectSP["effects"][pj]["passive"]["gender required"]) 
													genderTemp=objectSP["effects"][pj]["passive"]["gender required"].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          	groupSTR+=" ("+genderTemp+")";     
             
						}
							break;
						case "44":
							break;
					}
                    } /*End Grouping check*/
                    /*Check collective group crystals buff*/
					else if (skillSeek=="40") {
                      for (ix in lsstatsBuffArray) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                            if (effectKey==lsstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsstatsBuffArray[ix]["suffix"];
                            }
                          }
                      }
					 }
                    else if (skillSeek=="105") {
                      for (ix in lsistatsBuffArray) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                            if (effectKey==lsistatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsistatsBuffArray[ix]["suffix"];
                            }
                          }
                      }
					 } 
					else if (skillSeek=="46") {
                      for (ix in lsbasestatsBuffArray) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                            if (effectKey==lsbasestatsBuffArray[ix]["skillid"]) {
                              groupSTR+=objectSP["effects"][pj]["passive"][lsbasestatsBuffArray[ix]["altid"]]+"-"+ effectVal+lsbasestatsBuffArray[ix]["suffix"];
                            }
                          }
                      }
					 } /*End Grouping check*/
					/*Check collective group crystals buff*/
                    else if (skillCmt.indexOf("Drop Rate%")==0) {
                      for (ix in lsCrystalsBuffArray) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                            if (effectKey==lsCrystalsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsCrystalsBuffArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
                    /*Check collective ails buff*/
                    else if (skillSeek=="20") {
                      for (ix in lsailsArray) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                            if (effectKey==lsailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsailsArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
					else if (skillSeek=="71") {
                      for (ix in lscailsArray) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                            if (effectKey==lscailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lscailsArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
                    /*Check collective ails resist buff*/
                    else if (skillSeek == "4" || skillSeek == "73") {
                      var resistCount=0;
					  var resistCount2=0;
					  var resistTxt='';
                      for (ix in lsailsResistArray) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                            if (effectKey==lsailsResistArray[ix]["skillid"]) {
								if (resistCount>0)
									resistTxt+=',';
								resistCount+=1;
								if (effectVal == 100){
								    resistCount2+=1;
								    resistTxt+=lsailsResistArray[ix]["suffix"];
								} else 
									resistTxt+='('+effectVal+'% '+lsailsResistArray[ix]["suffix"]+') ';
						        }
                          }
                      }
					  if (resistCount2!=0)
						  groupSTR+="Negate Ailments ";
                      if (resistCount2==6)
                          groupSTR+="(ALL)";
					  else 
						  groupSTR+=resistTxt;
					  if (skillSeek=="73") {
                      var resistCount=0;
					  var resistCount2=0;
				      var resistTxt='';
					  groupSTR+="Negate Debuffs "
                      for (ix in lsdbResistArray) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                            if (effectKey==lsdbResistArray[ix]["skillid"]) {
								if (resistCount>0)
									resistTxt+=',';
								resistCount+=1;
								if (effectVal == 100){
								    resistCount2+=1;
								    resistTxt+=lsdbResistArray[ix]["suffix"];
								} else 
									resistTxt+='('+effectVal+'% '+lsdbResistArray[ix]["suffix"]+') ';
		                        }
                          }
                      }
                        if (resistCount2==3)
                          groupSTR+="(ALL)";
						  else groupSTR+=resistTxt;
                      }
                    } /*End Grouping check*/
					else if (skillSeek=="53") {
                      for (ix in lsDMGResistArray) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                            if (effectKey==lsDMGResistArray[ix]["skillid"]) {
                              groupSTR+=objectSP["effects"][pj]["passive"][lsDMGResistArray[ix]["altid"]]+"-"+ effectVal+lsDMGResistArray[ix]["suffix"];
                            }
                          }
                      }
                    }
					/*Elemental mitigation check*/
                    else if (skillSeek==5) {
                      var elementCount=0;
                      for (ix in lsElementResistArray) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                            if (effectKey==lsElementResistArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                groupSTR+=effectVal+'% '+lsElementResistArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
					/*Elemental mitigation check*/
                    else if (skillCmt.indexOf("Mitigate Elemental")=="0") {
                      var elementCount=0;
                      for (ix in lsElementMitiArray) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                            if (effectKey==lsElementMitiArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=lsElementMitiArray[ix]["suffix"];
                            }
                          }
                      }
                        if (elementCount==6)
                          groupSTR="(All Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/
					/*Passive Elemental ATK check*/
                    else if (skillSeek=="102") {
                      if (objectSP["effects"][pj]["passive"]["elements added"]) {
						 var elementCount=objectSP["effects"][pj]["passive"]["elements added"].length;
						for (ix=0;ix<elementCount;ix++){
							    if (ix>0)
                                  groupSTR+=",";
                                if (ix==0)
                                  groupSTR+="("
                                groupSTR+=objectSP["effects"][pj]["passive"]["elements added"][ix];
						}
					  }
					 
                        if (elementCount==6)
                          groupSTR="(All Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/	
					else if (skillSeek=="31") {
                      if (objectSP["effects"][pj]["passive"]["bc drop% for spark"]) 
                          groupSTR+=objectSP["effects"][pj]["passive"]["bc drop% for spark"]+"% BC Drop ";
					  if (objectSP["effects"][pj]["passive"]["hc drop% for spark"]) 
                          groupSTR+=objectSP["effects"][pj]["passive"]["hc drop% for spark"]+"% HC Drop ";
					  if (objectSP["effects"][pj]["passive"]["damage% for spark"]) 
                          groupSTR+=objectSP["effects"][pj]["passive"]["damage% for spark"]+"% DMG ";
                    }
					else if (skillSeek=="37") {
                      if (objectSP["effects"][pj]["passive"]["extra hits dmg%"]) 
                          groupSTR+=objectSP["effects"][pj]["passive"]["extra hits dmg%"];
					  else
						  groupSTR+="0";
                    }
                    /*Elemental weakness check*/
                    else if (skillSeek=="50") {
                      var elementCount=0;
                      for (ix in lsWeakElementArray) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                            if (effectKey==lsWeakElementArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=lsWeakElementArray[ix]["suffix"];
                            }
                          }
                      }

                        if (elementCount==6)
                          groupSTR="(All Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/           
                    /*Check collective xturns buff*/
                    else if (skillSeek=="21") {
                      for (ix in lsXTurnsArray) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                            if (effectKey==lsXTurnsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsXTurnsArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
					/*Check collective trigger buff*/
					else if (skillSeek=="66") {
					  var TriggerCount=0;
                      for (ix in esTrigger) {
                          for (var effectKey in objectSP["effects"][pj]["passive"]) {var effectVal = objectSP["effects"][pj]["passive"][effectKey];
                             if(effectKey==esTrigger[ix]["skillid"]) {
								if (TriggerCount>0)
                                  groupSTR+=",";
                                TriggerCount+=1;
                                if (TriggerCount==1)
                                  groupSTR+="(";
                                groupSTR+=esTrigger[ix]["suffix"];

						  }
                          }
                      }
					  if (TriggerCount==3)
					     groupSTR="(ALL)"
					  else
					     groupSTR+=")";
                    } /*End Grouping check*/
                    else if (skillSeek=="100") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {	
							uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'% Chance for Critial Spark ('+uparams[1]+'% DMG+)} ';
						}
					}
					else if (skillSeek=="106") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
							groupSTR+=' {After OverDrive, '+uparams[2]+' Time(s) '+uparams[1]+'% Chance Withstand a KNOCKOUT ATK (Heal '+uparams[3]+'% HP)} ';
						}
					}
					else if (skillSeek=="112") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'%ABP+ '+uparams[1]+'%CBP+} ';
						}
					}
					else if (skillSeek=="111") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'%Chance+ to BB/SBB in Arena/Coliseum} ';
						}
					}
					else if (skillSeek=="110") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[4]+'% Chance to Drain '+uparams[2]+'%/'+uparams[3]+'% Enemy BB/SBB in Arena/Coliseum} ';
						}
					}
					else if (skillSeek=="109") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[1]+'% Chance to Debuff '+uparams[0]+'%'+'% BB Fill Rate in Arena/Coliseum for '+uparams[2]+'Turn(s)} ';
						}
					}					
					else if (skillSeek=="103") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
						uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
						if ((uparams[0]==uparams[1]) && (uparams[0]==uparams[2]) && (uparams[2]==uparams[1]))
							groupSTR+=' {'+uparams[0]+'BB ATK%+ (HP >= '+uparams[3]+'%) } ';
						else { 
							for (u in uparams) {
								if (uparams[0]>0)
								groupSTR+=' {'+uparams[0]+'BB ATK%+ to BB ';
								if (uparams[1]>0)
								groupSTR+=' {'+uparams[1]+'BB ATK%+ to SBB ';
								if (uparams[2]>0)
								groupSTR+=' {'+uparams[2]+'BB ATK%+ to UBB ';
								groupSTR+='(HP >= '+uparams[3]+'%) } ';
							}
						}	
						}
					}
					else if (skillSeek=="113") {
						uparams = [];
						if ((objectSP["effects"][pj]["passive"]["unknown passive params"]) && (lsPassiveID==113)) {
						uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
						var uparams2 = uparams[1].split("&");
						if ((uparams2[0]==uparams2[1]) && (uparams2[0]==uparams2[2]) && (uparams2[2]==uparams2[1]))
							groupSTR+=' {'+uparams2[0]+'BB ATK%+ (HP >= '+uparams[2]+'%) } ';
						else { 
							for (u in uparams) {
								if (uparams2[0]>0)
								groupSTR+=' {'+uparams2[0]+'BB ATK%+ to BB ';
								if (uparams2[1]>0)
								groupSTR+=' {'+uparams2[1]+'BB ATK%+ to SBB ';
								if (uparams2[2]>0)
								groupSTR+=' {'+uparams2[2]+'BB ATK%+ to UBB ';
								groupSTR+='(HP >= '+uparams[2]+'%) } ';
							}
						}	
						}
					}
					else if (skillSeek=="143") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
						uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
						groupSTR+=' {Increase ATK Cap to '+uparams[0]+'} ';
						}
					}  
					else if (skillSeek=="72") {
						uparams = [];
						if (objectSP["effects"][pj]["passive"]["unknown passive params"]) {
						uparams = objectSP["effects"][pj]["passive"]["unknown passive params"].split(",");
						if (uparams[0] == 1)
							groupSTR+="Heal Over Turn Effect ";
						if (uparams[1] == 1){
							if(uparams[0] == 1)
								functionSTR+="& ";
							groupSTR+="BB Fill Each Turn Effect "
						}
						groupSTR+='Incur At The Begin of Turn (Exceptions for 1st Turn in Arena and Colo)';
						}
					}
                  /*looping non grouping buff*/
                    if (lsPassiveID==skillSeek) {
                      effectFound=true;
                    } /*End non-grouping*/
                  
                  /*Build output string*/
                  if (effectFound) {
                  /*add connector if not first skill found*/
                      if (lsSkillFound != 0)
                        functionSTR+=skillConnect;
                      lsSkillFound+=1;
                      for (k in lsParseObj[pi]["skillref"]) {
						  if (lsParseObj[pi]["skillref"][k].charAt(0) == "@") {
                          functionSTR+=groupSTR;
                        } else if (lsParseObj[pi]["skillref"][k].charAt(0) == "?") {
                          /*handling special obj values*/
                          var specialKey=lsParseObj[pi]["skillref"][k].slice(1);
                          functionSTR+=specialValue;
						} else if (lsParseObj[pi]["skillref"][k].charAt(0) == "#") {
                          /*handling trigger skill*/
                          functionSTR+=triggerSkill;
                        } else if (lsParseObj[pi]["skillref"][k].charAt(0) == "!") {
                          /*handling str additions*/
                          functionSTR+=lsParseObj[pi]["skillref"][k].slice(1);
                        } else {
                          /*handling identified obj value*/
                          var callObjName=lsParseObj[pi]["skillref"][k];
                          if (objectSP["effects"][pj]["passive"][callObjName]) {
                              var exportValue=objectSP["effects"][pj]["passive"][callObjName];
                              if (callObjName=="element buffed")
                                exportValue=exportValue.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                              /*value replacement and formatting*/
                              switch (exportValue) {
                                case "aoe":
                                  exportValue="(AOE)";
                                  break;
                                case "single":
                                  exportValue="(TGT)";
                                  break;
                                case "party":
                                  exportValue="(ALL)";
                                  break;
                                case "self":
                                  exportValue="(SELF)";
                                  break;
                                case "recovery":
                                  exportValue="REC";
                                  break;
                                case "defense":
                                  exportValue="DEF";
                                  break;
                                case "hp":
                                  exportValue="HP";
                                  break;
                                case "remaining":
                                  exportValue="LEFT";
                                  break;
                                case "lost":
                                  exportValue="LOST";
                                  break;
                              }
                              functionSTR+=exportValue;
                          }
                          else if (objectSP["effects"][pj]["passive"][callObjName]==0)
                            functionSTR+=objectSP["effects"][pj]["passive"][callObjName];
                          else
                            functionSTR+='Unknown';
                        }
                      } /*End loop for REF*/
                      if (objectSP["effects"][pj]["passive"]["elements buffed"]) {
                        eleString=' ('+objectSP["effects"][pj]["passive"]["elements buffed"]+')';
                        eleString=eleString.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                        functionSTR+=eleString;
                      }
                      else if ((skillSeek!="element weakness") && (genderTemp==""))
                        functionSTR+='';
                  } /*End Output String Build*/
                };
					if (objectSP["effects"][pj]["add to passive"]) {
                    /*resets var for each effect*/
                    if (objectSP["effects"][pj]["add to passive"]['passive id'])
						var lsPassiveID=objectSP["effects"][pj]["add to passive"]['passive id'];
					else 
						var lsPassiveID=objectSP["effects"][pj]["add to passive"]["unknown passive id"];						
                    var groupSTR="";
					var conSTR="";
                    var effectFound=false;
                    var triggerSkill="";
					if (objectSP["effects"][pj]["add to passive"]["triggered effect"])
						triggerSkill+=active.find(objectSP["effects"][pj]["add to passive"]["triggered effect"]);
					if (objectSP["effects"][pj]["add to passive"]["buff"])
						triggerSkill+=buff.find(objectSP["effects"][pj]["add to passive"]["buff"]);
					/*Check collective group buff*/
                    if (skillCmt.indexOf("Stats Buff c:")===0) {
                      for (ix in lsstatsBuffArray) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                            if (effectKey==lsstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsstatsBuffArray[ix]["suffix"];
                            }
                          }
                    }
                      /*checks unique elements requirements*/
					switch (lsPassiveID) {
						case "1":
							break;
						case "2":
							break;
						case "3":{ 	
							if (objectSP["effects"][pj]["add to passive"]["unit type buffed"]) 
													genderTemp=objectSP["effects"][pj]["add to passive"]["unit type buffed"].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          	groupSTR+=" ("+genderTemp+")";
						}
							break;
					
						case "11":{
							if (objectSP["effects"][pj]["add to passive"]["hp below % buff requirement"])
								groupSTR+=" (HP < "+objectSP["effects"][pj]["add to passive"]["hp below % buff requirement"]+"%)";
							if (objectSP["effects"][pj]["add to passive"]["hp above % buff requirement"])
								groupSTR+=" (HP >= "+objectSP["effects"][pj]["add to passive"]["hp above % buff requirement"]+"%)";
						}
							break;
						case "30":{
							if (objectSP["effects"][pj]["add to passive"]["bb gauge above % buff requirement"])
								groupSTR+=" (BB >= "+objectSP["effects"][pj]["add to passive"]["bb gauge above % buff requirement"]+"%)";
							if (objectSP["effects"][pj]["add to passive"]["bb gauge below % buff requirement"])
								groupSTR+=" (BB < "+objectSP["effects"][pj]["add to passive"]["bb gauge below % buff requirement"]+"%)";
						}
							break;
						case "41":
							groupSTR+=" ("+objectSP["effects"][pj]["add to passive"]["unique elements required"]+" elements required)";
							break;
						case "42":{
							if (objectSP["effects"][pj]["add to passive"]["gender required"]) 
													genderTemp=objectSP["effects"][pj]["add to passive"]["gender required"].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          	groupSTR+=" ("+genderTemp+")";     
             
						}
							break;
						case "44":
							break;
					}
                    } /*End Grouping check*/
                    /*Check collective group crystals buff*/
					else if (skillSeek=="40") {
                      for (ix in lsstatsBuffArray) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                            if (effectKey==lsstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsstatsBuffArray[ix]["suffix"];
                            }
                          }
                      }
					 }
                    else if (skillSeek=="105") {
                      for (ix in lsistatsBuffArray) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                            if (effectKey==lsistatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsistatsBuffArray[ix]["suffix"];
                            }
                          }
                      }
					 } 
					else if (skillSeek=="46") {
                      for (ix in lsbasestatsBuffArray) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                            if (effectKey==lsbasestatsBuffArray[ix]["skillid"]) {
                              groupSTR+=objectSP["effects"][pj]["add to passive"][lsbasestatsBuffArray[ix]["altid"]]+"-"+ effectVal+lsbasestatsBuffArray[ix]["suffix"];
                            }
                          }
                      }
					 } /*End Grouping check*/
					/*Check collective group crystals buff*/
                    else if (skillCmt.indexOf("Drop Rate%")==0) {
                      for (ix in lsCrystalsBuffArray) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                            if (effectKey==lsCrystalsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsCrystalsBuffArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
                    /*Check collective ails buff*/
                    else if (skillSeek=="20") {
                      for (ix in lsailsArray) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                            if (effectKey==lsailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsailsArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
					else if (skillSeek=="71") {
                      for (ix in lscailsArray) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                            if (effectKey==lscailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lscailsArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
                    /*Check collective ails resist buff*/
                    else if (skillSeek == "4" || skillSeek == "73") {
                      var resistCount=0;
					  var resistCount2=0;
					  var resistTxt='';
                      for (ix in lsailsResistArray) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                            if (effectKey==lsailsResistArray[ix]["skillid"]) {
								if (resistCount>0)
									resistTxt+=',';
								resistCount+=1;
								if (effectVal == 100){
								    resistCount2+=1;
								    resistTxt+=lsailsResistArray[ix]["suffix"];
								} else 
									resistTxt+='('+effectVal+'% '+lsailsResistArray[ix]["suffix"]+') ';
						        }
                          }
                      }
					  if (resistCount2!=0)
						  groupSTR+="Negate Ailments ";
                      if (resistCount2==6)
                          groupSTR+="(ALL)";
					  else 
						  groupSTR+=resistTxt;
					  if (skillSeek=="73") {
                      var resistCount=0;
					  var resistCount2=0;
				      var resistTxt='';
					  groupSTR+="Negate Debuffs "
                      for (ix in lsdbResistArray) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                            if (effectKey==lsdbResistArray[ix]["skillid"]) {
								if (resistCount>0)
									resistTxt+=',';
								resistCount+=1;
								if (effectVal == 100){
								    resistCount2+=1;
								    resistTxt+=lsdbResistArray[ix]["suffix"];
								} else 
									resistTxt+='('+effectVal+'% '+lsdbResistArray[ix]["suffix"]+') ';
		                        }
                          }
                      }
                        if (resistCount2==3)
                          groupSTR+="(ALL)";
						  else groupSTR+=resistTxt;
                      }
                    } /*End Grouping check*/
					else if (skillSeek=="53") {
                      for (ix in lsDMGResistArray) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                            if (effectKey==lsDMGResistArray[ix]["skillid"]) {
                              groupSTR+=objectSP["effects"][pj]["add to passive"][lsDMGResistArray[ix]["altid"]]+"-"+ effectVal+lsDMGResistArray[ix]["suffix"];
                            }
                          }
                      }
                    }
					/*Elemental mitigation check*/
                    else if (skillSeek==5) {
                      var elementCount=0;
                      for (ix in lsElementResistArray) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                            if (effectKey==lsElementResistArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                groupSTR+=effectVal+'% '+lsElementResistArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
					/*Elemental mitigation check*/
                    else if (skillCmt.indexOf("Mitigate Elemental")=="0") {
                      var elementCount=0;
                      for (ix in lsElementMitiArray) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                            if (effectKey==lsElementMitiArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=lsElementMitiArray[ix]["suffix"];
                            }
                          }
                      }
                        if (elementCount==6)
                          groupSTR="(All Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/
					/*Passive Elemental ATK check*/
                    else if (skillSeek=="102") {
                      if (objectSP["effects"][pj]["add to passive"]["elements added"]) {
						 var elementCount=objectSP["effects"][pj]["add to passive"]["elements added"].length;
						for (ix=0;ix<elementCount;ix++){
							    if (ix>0)
                                  groupSTR+=",";
                                if (ix==0)
                                  groupSTR+="("
                                groupSTR+=objectSP["effects"][pj]["add to passive"]["elements added"][ix];
						}
					  }
					 
                        if (elementCount==6)
                          groupSTR="(All Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/	
					else if (skillSeek=="31") {
                      if (objectSP["effects"][pj]["add to passive"]["bc drop% for spark"]) 
                          groupSTR+=objectSP["effects"][pj]["add to passive"]["bc drop% for spark"]+"% BC Drop ";
					  if (objectSP["effects"][pj]["add to passive"]["hc drop% for spark"]) 
                          groupSTR+=objectSP["effects"][pj]["add to passive"]["hc drop% for spark"]+"% HC Drop ";
					  if (objectSP["effects"][pj]["add to passive"]["damage% for spark"]) 
                          groupSTR+=objectSP["effects"][pj]["add to passive"]["damage% for spark"]+"% DMG ";
                    }
					else if (skillSeek=="37") {
                      if (objectSP["effects"][pj]["add to passive"]["extra hits dmg%"]) 
                          groupSTR+=objectSP["effects"][pj]["add to passive"]["extra hits dmg%"];
					  else
						  groupSTR+="0";
                    }
                    /*Elemental weakness check*/
                    else if (skillSeek=="50") {
                      var elementCount=0;
                      for (ix in lsWeakElementArray) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                            if (effectKey==lsWeakElementArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=lsWeakElementArray[ix]["suffix"];
                            }
                          }
                      }

                        if (elementCount==6)
                          groupSTR="(All Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/           
                    /*Check collective xturns buff*/
                    else if (skillSeek=="21") {
                      for (ix in lsXTurnsArray) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                            if (effectKey==lsXTurnsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+lsXTurnsArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
					/*Check collective trigger buff*/
					else if (skillSeek=="66") {
					  var TriggerCount=0;
                      for (ix in esTrigger) {
                          for (var effectKey in objectSP["effects"][pj]["add to passive"]) {var effectVal = objectSP["effects"][pj]["add to passive"][effectKey];
                             if(effectKey==esTrigger[ix]["skillid"]) {
								if (TriggerCount>0)
                                  groupSTR+=",";
                                TriggerCount+=1;
                                if (TriggerCount==1)
                                  groupSTR+="(";
                                groupSTR+=esTrigger[ix]["suffix"];

						  }
                          }
                      }
					  if (TriggerCount==3)
					     groupSTR="(ALL)"
					  else
					     groupSTR+=")";
                    } /*End Grouping check*/
                    else if (skillSeek=="100") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {	
							uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'% Chance for Critial Spark ('+uparams[1]+'% DMG+)} ';
						}
					}
					else if (skillSeek=="106") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
							groupSTR+=' {After OverDrive, '+uparams[2]+' Time(s) '+uparams[1]+'% Chance Withstand a KNOCKOUT ATK (Heal '+uparams[3]+'% HP)} ';
						}
					}
					else if (skillSeek=="112") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'%ABP+ '+uparams[1]+'%CBP+} ';
						}
					}
					else if (skillSeek=="111") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[0]+'%Chance+ to BB/SBB in Arena/Coliseum} ';
						}
					}
					else if (skillSeek=="110") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[4]+'% Chance to Drain '+uparams[2]+'%/'+uparams[3]+'% Enemy BB/SBB in Arena/Coliseum} ';
						}
					}
					else if (skillSeek=="109") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
							uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
							groupSTR+=' {'+uparams[1]+'% Chance to Debuff '+uparams[0]+'%'+'% BB Fill Rate in Arena/Coliseum for '+uparams[2]+'Turn(s)} ';
						}
					}					
					else if (skillSeek=="103") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
						uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
						if ((uparams[0]==uparams[1]) && (uparams[0]==uparams[2]) && (uparams[2]==uparams[1]))
							groupSTR+=' {'+uparams[0]+'BB ATK%+ (HP >= '+uparams[3]+'%) } ';
						else { 
							for (u in uparams) {
								if (uparams[0]>0)
								groupSTR+=' {'+uparams[0]+'BB ATK%+ to BB ';
								if (uparams[1]>0)
								groupSTR+=' {'+uparams[1]+'BB ATK%+ to SBB ';
								if (uparams[2]>0)
								groupSTR+=' {'+uparams[2]+'BB ATK%+ to UBB ';
								groupSTR+='(HP >= '+uparams[3]+'%) } ';
							}
						}	
						}
					}
					else if (skillSeek=="113") {
						uparams = [];
						if ((objectSP["effects"][pj]["add to passive"]["unknown passive params"]) && (lsPassiveID==113)) {
						uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
						var uparams2 = uparams[1].split("&");
						if ((uparams2[0]==uparams2[1]) && (uparams2[0]==uparams2[2]) && (uparams2[2]==uparams2[1]))
							groupSTR+=' {'+uparams2[0]+'BB ATK%+ (HP >= '+uparams[2]+'%) } ';
						else { 
							for (u in uparams) {
								if (uparams2[0]>0)
								groupSTR+=' {'+uparams2[0]+'BB ATK%+ to BB ';
								if (uparams2[1]>0)
								groupSTR+=' {'+uparams2[1]+'BB ATK%+ to SBB ';
								if (uparams2[2]>0)
								groupSTR+=' {'+uparams2[2]+'BB ATK%+ to UBB ';
								groupSTR+='(HP >= '+uparams[2]+'%) } ';
							}
						}	
						}
					}
					else if (skillSeek=="143") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
						uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
						groupSTR+=' {Increase ATK Cap to '+uparams[0]+'} ';
						}
					}  
					else if (skillSeek=="72") {
						uparams = [];
						if (objectSP["effects"][pj]["add to passive"]["unknown passive params"]) {
						uparams = objectSP["effects"][pj]["add to passive"]["unknown passive params"].split(",");
						if (uparams[0] == 1)
							groupSTR+="Heal Over Turn Effect ";
						if (uparams[1] == 1){
							if(uparams[0] == 1)
								functionSTR+="& ";
							groupSTR+="BB Fill Each Turn Effect "
						}
						groupSTR+='Incur At The Begin of Turn (Exceptions for 1st Turn in Arena and Colo)';
						}
					}
                  /*looping non grouping buff*/
                    if (lsPassiveID==skillSeek) {
                      effectFound=true;
                    } /*End non-grouping*/
                  
                  /*Build output string*/
                  if (effectFound) {
                  /*add connector if not first skill found*/
                      functionSTR+="Upgrade LS+:";
					  if (lsSkillFound != 0)
                        functionSTR+=skillConnect;
                      lsSkillFound+=1;
                      for (k in lsParseObj[pi]["skillref"]) {
						  if (lsParseObj[pi]["skillref"][k].charAt(0) == "@") {
                          functionSTR+=groupSTR;
                        } else if (lsParseObj[pi]["skillref"][k].charAt(0) == "?") {
                          /*handling special obj values*/
                          var specialKey=lsParseObj[pi]["skillref"][k].slice(1);
                          functionSTR+=specialValue;
						} else if (lsParseObj[pi]["skillref"][k].charAt(0) == "#") {
                          /*handling trigger skill*/
                          functionSTR+=triggerSkill;
                        } else if (lsParseObj[pi]["skillref"][k].charAt(0) == "!") {
                          /*handling str additions*/
                          functionSTR+=lsParseObj[pi]["skillref"][k].slice(1);
                        } else {
                          /*handling identified obj value*/
                          var callObjName=lsParseObj[pi]["skillref"][k];
                          if (objectSP["effects"][pj]["add to passive"][callObjName]) {
                              var exportValue=objectSP["effects"][pj]["add to passive"][callObjName];
                              if (callObjName=="element buffed")
                                exportValue=exportValue.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                              /*value replacement and formatting*/
                              switch (exportValue) {
                                case "aoe":
                                  exportValue="(AOE)";
                                  break;
                                case "single":
                                  exportValue="(TGT)";
                                  break;
                                case "party":
                                  exportValue="(ALL)";
                                  break;
                                case "self":
                                  exportValue="(SELF)";
                                  break;
                                case "recovery":
                                  exportValue="REC";
                                  break;
								case "attack":
                                  exportValue="REC";
                                  break;
                                case "defense":
                                  exportValue="DEF";
                                  break;
                                case "hp":
                                  exportValue="HP";
                                  break;
                                case "remaining":
                                  exportValue="LEFT";
                                  break;
                                case "lost":
                                  exportValue="LOST";
                                  break;
                              }
                              functionSTR+=exportValue;
                          }
                          else if (objectSP["effects"][pj]["add to passive"][callObjName]==0)
                            functionSTR+=objectSP["effects"][pj]["add to passive"][callObjName];
                          else
                            functionSTR+='(N/A)';
                        }
                      } /*End loop for REF*/
                      if (objectSP["effects"][pj]["add to passive"]["elements buffed"]) {
                        eleString=' ('+objectSP["effects"][pj]["add to passive"]["elements buffed"]+')';
                        eleString=eleString.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                        functionSTR+=eleString;
                      }
                      else if ((skillSeek!="element weakness") && (genderTemp==""))
                        functionSTR+='';
                  } /*End Output String Build*/
                };
				}}
				for (pj=0;pj<objectSP["effects"].length;pj++)
					for (pk=0;pk<bbAddArray.length;pk++) {
						if (objectSP["effects"][pj][bbAddArray[pk]]) {
	                      if (lsSkillFound != 0)
    	                    functionSTR+=skillConnect;
        	              lsSkillFound+=1;
  						  functionSTR+="Upgrade unit's "+bbArray[pk].toUpperCase()+" ["+active.trig(objectSP["effects"][pj][bbAddArray[pk]])+"]";
						}
					}

            /*check for missing skill effects*/
            if (lsSkillFound < objectSP["effects"].length) {
			  var uparams = [];
			  for (n=0;n<objectSP["effects"].length;n++) {
				  for(SPArray=0;SPArray<SPPassiveArray.length;SPArray++){
              		if (objectSP["effects"][n][SPPassiveArray[SPArray]]){
			  if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"]){	
				/*if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 100) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						functionSTR+=' {'+uparams[0]+'% Chance for Critial Spark ('+uparams[1]+'% DMG+)} ';
				}
				else if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 106) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						functionSTR+=' {After OverDrive, '+uparams[2]+' Time(s) '+uparams[1]+'% Chance Withstand a KNOCKOUT ATK (Heal '+uparams[3]+'% HP)} ';
				}
				else if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 103) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						functionSTR+=' {'+uparams[0]+'BB ATK%+ (HP >= '+uparams[3]+'%) } ';
				}
				else if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 143) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						functionSTR+=' {Increase ATK Cap to '+uparams[0]+'} ';
				}
				else if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 112) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						functionSTR+=' {'+uparams[0]+'%ABP+ '+uparams[1]+'%CBP+} ';
				}
				else if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 111) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						functionSTR+=' {'+uparams[0]+'%Chance+ to BB/SBB in Arena/Coliseum} ';
				}
				else if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 110) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						functionSTR+=' {'+uparams[4]+'% Chance to Drain '+uparams[2]+'%/'+uparams[3]+'% Enemy BB/SBB in Arena/Coliseum} ';
				}
				else if (objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"] == 72) {
						uparams = [];
						uparams = objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"].split(",");
						if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
						if (uparams[0] == 1)
							functionSTR+="Heal Each Turn Effect ";
						if (uparams[1] == 1){
							if(uparams[0] == 1)
								functionSTR+="& ";
							functionSTR+="BB Fill Each Turn Effect "
						}
						functionSTR+='Incur At The Begin of Turn (Exceptions for 1st Turn in Arena and Colo)';
				}
				else {*/
              	if (SPPassiveArray[SPArray] == "add to passive")
							functionSTR+="Upgrade LS ";
				functionSTR+='+ Undefined effect(s)['+'(passiveid:'+objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive id"]+';param:'+objectSP["effects"][n][SPPassiveArray[SPArray]]["unknown passive params"]+')]';
              	//}
			  } else 
			  	functionSTR+='+ Undefined effect(s)[]';
              }
				  }
			}
            }
          }
			}
              /*End of LS Effects Loop*/
		  if (functionSTR) return functionSTR;
}