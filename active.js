//skillParseObj
var skillParseObj=[
        /*{"skillid":"unknown", "skillref":["@"]},
		{"skillid":"bb bc fill on guard buff turns (114)", "skillref":["bb bc fill on guard","!BC Fill on Guard for ", "bb bc fill on guard buff turns (114)","!Turns ", "target area"]},
		{"skillid":"bb atk%", "skillref":["bb atk%", "!% ", "?element", "@", "! ","target area"]},
		{"skillid":"fixed damage", "skillref":["fixed damage", "!DMG ", "?element", "! ","target area"]},
		{"skillid":"bb added atk% based on hp", "skillref":["bb base atk%","!%+", "bb added atk% based on hp", "!% (based on ", "bb added atk% proportional to hp", "! HP) ", "?element", "! ","target area"]},
		{"skillid":"bb max atk% based on ally bb gauge and clear bb gauges", "skillref":["bb base atk%","!%+ (", "bb max atk% based on ally bb gauge and clear bb gauges", "!% MAX based on ALLIES BB gauge) ", "?element", "! ","target area"]},
		{"skillid":"bb atk% inc per use", "skillref":["bb base atk%","!%+", "bb atk% inc per use", "!%x", "bb atk% max number of inc", "! (max number of consecutive uses) ", "?element", "! ","target area"]},
        {"skillid":"random attack", "skillref":["!Random Hits"]},
        {"skillid":"hp drain buff turns (134)", "skillref":["hp drain chance%","!% Chance to drain ", "hp drain% low", "!%-", "hp drain% high", "!% HP for ", "hp drain buff turns (134)", "!Turns", "target type"]},
        {"skillid":"bb bc%", "skillref":["bb bc%", "!% BC+ (SELF)"]},
        {"skillid":"bb hc%", "skillref":["bb hc%", "!% HC+ (SELF)"]},
        {"skillid":"bbSelfBuff", "skillref":["@", "! (SELF)"]},
        {"skillid":"increase bb gauge", "skillref":["increase bb gauge","!BC Fill 1Turn"]},
        {"skillid":"increase bb gauge gradual turns (37)", "skillref":["increase bb gauge gradual","!BC Fill ","increase bb gauge gradual turns (37)", "!Turns"]},
        {"skillid":"dmg% reduction turns (36)", "skillref":["!Reduce DMG (", "dmg% reduction", "!%) ", "dmg% reduction turns (36)", "!Turns"]},
        {"skillid":"bb bc fill%", "skillref":["bb bc fill%", "!% BB Fill ", "target type"]},
        {"skillid":"bb bc fill", "skillref":["bb bc fill", "!BC Fill ", "target type"]},
        {"skillid":"buff turns (77)", "skillref":["bb gauge fill rate% buff", "!% BC Fill+ ", "target type", "! ", "buff turns (77)", "!Turns"]},
        {"skillid":"bc fill when attacked turns (38)", "skillref":["bc fill when attacked low", "!-", "bc fill when attacked high", "!BC Fill when ATKed (", "bc fill when attacked%", "!%) ", "target type", "! ", "bc fill when attacked turns (38)", "!Turns"]},
        {"skillid":"heal high", "skillref":["!Heal ", "! (", "heal low","!-","heal high", "!) ","target type"]},
        {"skillid":"angel idol effect this turn (12)", "skillref":["!Angel Idol ", "target type", "! 1Turn"]},
        {"skillid":"ailments cured", "skillref":["!Cure Ails"]},
        {"skillid":"remove all status ailments", "skillref":["!Cure Ails"]},
        {"skillid":"resist status ails turns", "skillref":["!Null Ails ", "resist status ails turns", "!Turns"]},
        {"skillid":"stat down immunity buff turns", "skillref":["!Null Debuffs ", "stat down immunity buff turns", "!Turns"]},
        {"skillid":"elements added turns", "skillref":["!Add ", "elements added", "! to ATK ", "target type", "! ", "elements added turns", "!Turns"]},
        {"skillid":"atk% buff (13)", "skillref":["atk% buff (13)", "!% ATK+ to ", "element buffed", "! ", "buff turns","!Turns"]},
        {"skillid":"def% buff (4)", "skillref":["def% buff (4)", "!% DEF ", "target type", "! ", "buff turns","!Turns"]},
        {"skillid":"defense% ignore turns (39)", "skillref":["!Ignore DEF ", "target type", "! ","defense% ignore turns (39)", "!Turns"]},
        {"skillid":"crit% buff (7)", "skillref":["crit% buff (7)", "!% CRIT+ ", "target type", "! ", "buff turns","!Turns"]},
        {"skillid":"buff turns (84)", "skillref":["crit multiplier%", "!% CRIT DMG+ ", "! ", "target type", "! ", "buff turns (84)","!Turns"]},
        {"skillid":"max hp% increase", "skillref":["max hp% increase", "!% Max HP+ till Death/Battle End"]},
        {"skillid":"spark dmg% buff (40)", "skillref":["spark dmg% buff (40)", "!% Spark DMG+ ", "target type", "! ", "buff turns","!Turns"]},
        {"skillid":"spark dmg received debuff turns (94)", "skillref":["spark dmg received apply%", "!% Chance Enemy receives ", "spark dmg% received", "!% Spark DMG+ ", "spark dmg received debuff turns (94)", "!Turns"]},
        {"skillid":"bc fill on spark buff turns (111)", "skillref":["bc fill on spark%", "!% Chance to Fill (", "bc fill on spark low", "!-", "bc fill on spark high", "!) BB on Spark", "@", "bc fill on spark buff turns (111)", "!Turns"]},
        {"skillid":"spark recover hp buff turns (135)", "skillref":["spark recover hp chance%", "!% Chance to Heal (", "spark recover hp low", "!-", "spark recover hp high", "!) on Spark ", "@", "spark recover hp buff turns (135)", "!Turns"]},
        {"skillid":"inflict atk% debuff (2)", "skillref":["!Add ","inflict atk% debuff chance% (74)", "!% Chance ", "inflict atk% debuff (2)", "!% Enemy ATK to ATK ", "target type", "! ", "buff turns","!Turns"]},
        {"skillid":"hit increase buff turns (50)", "skillref":["!Normal HitCount +", "hit increase/hit", "!00% (", "extra hits dmg%", "!% DMG) ", "target type", "! ", "hit increase buff turns (50)", "!Turns"]},
        {"skillid":"taunt turns (10000)", "skillref":["!Taunt (", "def% buff", "!% DEF+) ", "target type", "! ", "taunt turns (10000)", "!Turns"]},
        {"skillid":"shield turns (10002)", "skillref":["!Shield (", "shield element", "!, ", "shield hp", "!HP ", "shield def", "!DEF) ", "target type", "! ", "shield turns (10002)", "!Turns"]},
        {"skillid":"stealth turns (10001)", "skillref":["!Stealth (", "atk% buff", "!% ATK+ ", "crit% buff", "!% CRIT+) ", "target type", "! ", "stealth turns (10001)", "!Turns"]},
        {"skillid":"stats buff", "skillref":["@", "target type", "! ", "buff turns", "!Turns"]},
        {"skillid":"dot turns (71)", "skillref":["dot atk%", "!% DMG Each Turn ", "dot turns (71)", "!Turns"]},
        {"skillid":"buff turns (72)", "skillref":["bb atk% buff", "!% BB ATK%+ ", "target type", "! ", "buff turns (72)", "!Turns"]},
        {"skillid":"atk% buff turns (110)", "skillref":["atk% buff when enemy has ailment", "!% ATK%+ to ailment-infected enemies ", "target type", "! ", "atk% buff turns (110)", "!Turns"]},
        {"skillid":"crystals buff", "skillref":["@", "target type", "! ", "drop rate buff turns", "!Turns"]},
        {"skillid":"atk% buff (46)", "skillref":["!Convert ", "atk% buff (46)", "!% ","converted attribute", "! to ATK ", "target type", "! ", "% converted turns", "!Turns"]},
        {"skillid":"def% buff (47)", "skillref":["!Convert ", "def% buff (47)", "!% ","converted attribute", "! to DEF ", "target type", "! ", "% converted turns", "!Turns"]},
        {"skillid":"rec% buff (48)", "skillref":["!Convert ", "rec% buff (48)", "!% ","converted attribute", "! to REC ", "target type", "! ", "% converted turns", "!Turns"]},		
        {"skillid":"debuff skills", "skillref":["@"]},
        {"skillid":"ails", "skillref":["@"]},
        {"skillid":"counter inflict ailment turns", "skillref":["!Inflict ", "@", "! on ATKed ", "target type", "! ","counter inflict ailment turns", "!Turns"]},
        {"skillid":"elemental weakness buff turns", "skillref":["elemental weakness multiplier%", "!% Element Weakness DMG+ ", "@", "! ", "target type", "! ", "elemental weakness buff turns", "!Turns"]},
        {"skillid":"gradualhealbuff", "skillref":["@", "! (", "gradual heal low","!-","gradual heal high", "!) ", "target type", "! ", "gradual heal turns (8)", "!Turns"]},
        {"skillid":"ails buff", "skillref":["!Add ", "@", "!to ATK ", "target type", "! ","buff turns", "!Turns"]},
		{"skillid":"mitigate attacks", "skillref":["!Mitigate ", "@", "! based on Enemies' elements [16] ", "target type", "! for ", "buff turns", "!Turns"]},
		{"skillid":"dmg% mitigation for elemental attacks buff turns", "skillref":["!Mitigate ", "dmg% mitigation for elemental attacks", "!% from", "@", "! Attacks [39] ", "target type", "! for ", "dmg% mitigation for elemental attacks buff turns", "!Turns"]},
		{"skillid":"increase od gauge%", "skillref":["!Increase OD gauge by ", "increase od gauge%", "!%"]},
		{"skillid":"angel idol buff turns (91)", "skillref":["!Buff [", "angel idol recover chance%", "!% Chance to withstand a Knockout ATK (Heal ", "angel idol recover hp%", "!%)] ", "target type", "! ", "angel idol buff turns (91)", "!Turns"]},
		{"skillid":"angel idol buff (12)", "skillref":["!Buff [100% Chance to withstand a Knockout ATK (Heal ", "angel idol recover hp%", "!%)] ", "target type", "! "]},
		{"skillid":"revive unit chance%", "skillref":["revive unit chance%", "!% Chance Revive Dead Units (", "revive unit hp%", "!% HP)"]},
		{"skillid":"elemental barrier hp", "skillref":["!Grant ", "elemental barrier element", "! Barrier (", "elemental barrier hp", "!HP / ", "elemental barrier def", "! DEF / ", "elemental barrier absorb dmg%", "!% DMG Absordbed)"]},
		{"skillid":"hp recover from dmg buff turns (133)", "skillref":["hp recover from dmg chance","!% Chance to Recover ", "hp recover from dmg% low", "!%-", "hp recover from dmg% high", "!% HP from DMG for ", "hp recover from dmg buff turns (133)", "!Turns"]},	
		{"skillid":"self stats buff", "skillref":["@", "target type", "! ", "self stat buff turns", "!Turns"]},	
		{"skillid":"od fill rate buff turns (132)", "skillref":["od fill rate% buff", "!% OD Fill Rate ", "od fill rate buff turns (132)", "!Turn(s)"]},
		{"skillid":"spark dmg inc buff turns (131)", "skillref":["spark dmg inc chance%", "!% Chance for Critial Spark (", "spark dmg inc% buff", "!% DMG+) ","spark dmg inc buff turns (131)", "!Turn(s)"]},
		{"skillid":"guard increase mitigation buff turns (113)", "skillref":["!Increase ", "guard increase mitigation%", "!% DMG Reduced when Guarding ","guard increase mitigation buff turns (113)", "!Turn(s)"]},*/
		
		{	"skillid":"28", "cmt":"Fixed Damage","skillref":["fixed damage", "!DMG ", "?element", "! ","target area"]},
		{	"skillid":"1", "cmt":"BB ATK% t:normal","skillref":["bb atk%", "!%/","bb flat atk","! ", "?element", "@", "! ","target area"]},
		{"skillid":"29", "cmt":"BB ATK% t:element","skillref":["bb atk%", "!%/","bb flat atk","! ", "?element", "@", "! ","target area"]},
		{"skillid":"13", "cmt":"BB ATK% t:random","skillref":["bb atk%", "!%/","bb flat atk","! ", "?element", "@", "! Random Target"]},
		{"skillid":"14", "cmt":"BB ATK% t:drain","skillref":["bb atk%", "!%/","bb flat atk","! ", "?element", "@", "! ","target area", "!(Drain ","hp drain% low","!-","hp drain% high","!% HP)"]},
		{"skillid":"27", "cmt":"BB ATK% t:hp%","skillref":["bb atk%", "!%/","bb flat atk","! ", "?element", "@", "! (","hp% damage chance%","!Chance to Deal ","hp% damage low","!-","hp% damage low","!% Enemy's HP as DMG) ","target area"]},
		{"skillid":"47", "cmt":"BB ATK% t:hpbase","skillref":["bb base atk%","!%+", "bb added atk% based on hp", "!% (based on ", "bb added atk% proportional to hp", "! HP) ", "?element", "! ","target area"]},
		{"skillid":"61", "cmt":"BB ATK% t:allybb","skillref":["bb base atk%","!%+ (", "bb max atk% based on ally bb gauge and clear bb gauges", "!% MAX based on ALLIES BB gauge) ", "?element", "! ","target area"]},
		{"skillid":"64", "cmt":"BB ATK% t:inc","skillref":["bb base atk%","!%+", "bb atk% inc per use", "!%x", "bb atk% max number of inc", "! (max number of consecutive uses) ", "?element", "! ","target area"]},
		{	"skillid":"97", "cmt":"BB ATK% t:toweak","skillref":["@","! ", "?element", "target area"]}, /*"0,490,100,0,0,0,0"*/ 
		
		{	"skillid":"2", "cmt":"Heal t:normal","skillref":["!Heal ", "! (", "heal low","!-","heal high", "!) ","target type"]},
		{	"skillid":"3", "cmt":"Heal t:gradual","skillref":["@", "! (", "gradual heal low","!-","gradual heal high", "!) ", "target type", "! ", "gradual heal turns (8)", "!Turns"]},
		{	"skillid":"4", "cmt":"%BB Fill","skillref":["bb bc fill%", "!% BB Fill ", "target type"]},
		{	"skillid":"5", "cmt":"Stats Buff","skillref":["@", "target type", "! ", "buff turns", "!Turns"]},
		{	"skillid":"6", "cmt":"Drop Rates","skillref":["@"]},
		{	"skillid":"7", "cmt":"Angel Idol 100%","skillref":["!Buff [100% Chance to withstand a Knockout ATK (Heal ", "angel idol recover hp%", "!%)] ", "target type"]},
		{	"skillid":"8", "cmt":"Max HP%","skillref":["max hp% increase", "!% Max HP+"]},
		{	"skillid":"9", "cmt":"Debuff Stats","skillref":["@"]},
		//{"skillid":"10", "cmt":"","skillref":["@"]},
		{	"skillid":"11", "cmt":"Ailments","skillref":["@"]},
		//{"skillid":"12", "cmt":"","skillref":["@"]},
		//13 Above
		//14 Above
		//{"skillid":"15", "cmt":"","skillref":["@"]},
		{	"skillid":"16", "cmt":"Mitigate ","skillref":["!Mitigate ", "@", "! Enemies' ATK [16] ", "target type", "! for ", "buff turns", "!Turns"]},
		{	"skillid":"17", "cmt":"Null Ails","skillref":["!Negate Ailments ", "resist status ails turns", "!Turns"]},
		{	"skillid":"18", "cmt":"DMG% Reduction","skillref":["!Reduce DMG (", "dmg% reduction", "!%) ", "dmg% reduction turns (36)", "!Turns"]},
		{	"skillid":"19", "cmt":"BB Fill Per Turn","skillref":["increase bb gauge gradual","!BC Fill ","increase bb gauge gradual turns (37)", "!Turns"]},
		{	"skillid":"20", "cmt":"","skillref":["bc fill when attacked low", "!-", "bc fill when attacked high", "!BC Fill when ATKed (", "bc fill when attacked%", "!%) ", "target type", "! ", "bc fill when attacked turns (38)", "!Turns"]},
		//{"skillid":"21", "cmt":"","skillref":["@"]},
		{	"skillid":"22", "cmt":"Def Ignore","skillref":["!Ignore DEF ", "target type", "! ","defense% ignore turns (39)", "!Turns"]},
		{	"skillid":"23", "cmt":"Spark DMG+","skillref":["spark dmg% buff (40)", "!% Spark DMG+ ", "target type", "! ", "buff turns","!Turns"]},
		{	"skillid":"24", "cmt":"Stats Convert","skillref":["!Convert ", "converted attribute","!: " ,"@", "target type", "! ", "% converted turns", "!Turns"]},
		//{"skillid":"25", "cmt":"","skillref":["@"]},
		{	"skillid":"26", "cmt":"HitCount+","skillref":["!Normal HitCount +", "hit increase/hit", "!00% (", "@", "!% DMG) ", "target type", "! ", "hit increase buff turns (50)", "!Turns"]},
		//27 Above
		//28 Above
		//29
		{	"skillid":"30", "cmt":"Elemental Add","skillref":["!Add ", "elements added", "! to ATK ", "target type", "! ", "elements added turns", "!Turns"]},
		{	"skillid":"31", "cmt":"BC Fill Instant","skillref":["increase bb gauge","!BC Fill Instant", "target type"]},
		//{"skillid":"32", "cmt":"","skillref":["@"]},
		//{"skillid":"33", "cmt":"","skillref":["@"]},
		//{"skillid":"34", "cmt":"","skillref":["@"]},
		//{"skillid":"35", "cmt":"","skillref":["@"]},
		{	"skillid":"36", "cmt":"","skillref":["!Reduce DMG (", "dmg reduction% buff", "!%) ", "buff turns (36)", "!Turns"]},
		{	"skillid":"37", "cmt":"","skillref":["increase bb gauge gradual buff","!BC Fill Per Turn ","buff turns (37)", "!Turns"]},
		{	"skillid":"38", "cmt":"Cure Ails","skillref":["!Cure Ails"]},
		{	"skillid":"39", "cmt":"Mitigate Elemental ATK","skillref":["!Mitigate ", "dmg% mitigation for elemental attacks", "!% from", "@", "! Attacks [39] ", "! for ", "dmg% mitigation for elemental attacks buff turns", "!Turns", "target type"]},
		{	"skillid":"40", "cmt":"Ails Buff","skillref":["@"]},
		//{"skillid":"41", "cmt":"","skillref":["@"]},
		//{"skillid":"42", "cmt":"","skillref":["@"]},
		{	"skillid":"43", "cmt":"OD Gauge+","skillref":["!Increase OD gauge by ", "increase od gauge%", "!%"]},
		{	"skillid":"44", "cmt":"DoT","skillref":["dot atk%", "!% DMG Each Turn ", "dot turns (71)", "!Turns"]},
		{	"skillid":"45", "cmt":"Buff BB ATK%","skillref":["bb atk% buff", "!% BB ATK%+ ", "target type", "! ", "buff turns (72)", "!Turns"]},
		//{"skillid":"46", "cmt":"","skillref":["@"]},
		//47
		//{"skillid":"48", "cmt":"","skillref":["@"]},
		//{"skillid":"49", "cmt":"","skillref":["@"]},
		//{"skillid":"50", "cmt":"","skillref":["@"]},
		{	"skillid":"51", "cmt":"stat% debuff turns","skillref":["!Add [","inflict atk% debuff chance% (74)", "!% Chance ", "inflict atk% debuff (2)", "!% Enemy ATK for ","stat% debuff turns","!Turns] to ATK ", "target type", "! ", "buff turns","!Turns"]},
		{	"skillid":"52", "cmt":"BB Gauge Fill+","skillref":["bb gauge fill rate% buff", "!% BC Fill+ ", "target type", "! ", "buff turns (77)", "!Turns"]},
		{	"skillid":"53", "cmt":"Counter Ails","skillref":["!Inflict ", "@", "! on ATKed ", "target type", "! ","counter inflict ailment turns", "!Turns"]},
		{	"skillid":"54", "cmt":"Crit DMG%+","skillref":["crit multiplier%", "!% CRIT DMG+ ", "! ", "target type", "! ", "buff turns (84)","!Turns"]},
		{	"skillid":"55", "cmt":"EW DMG%+","skillref":["elemental weakness multiplier%", "!% Element Weakness DMG+ ", "@", "! ", "target type", "! ", "elemental weakness buff turns", "!Turns"]},
		{	"skillid":"56", "cmt":"Angel Idol Chance","skillref":["!Buff [", "angel idol recover chance%", "!% Chance to withstand a Knockout ATK (Heal ", "angel idol recover hp%", "!%)] ", "target type", "! ", "angel idol buff turns (91)", "!Turns"]},
		//{"skillid":"57", "cmt":"","skillref":["@"]},
		{	"skillid":"58", "cmt":"Spark Debuff","skillref":["spark dmg received apply%", "!% Chance Enemy receives ", "spark dmg% received", "!% Spark DMG+ ", "spark dmg received debuff turns (94)", "!Turns"]},
		//{"skillid":"59", "cmt":"","skillref":["@"]},
		//{"skillid":"60", "cmt":"","skillref":["@"]},
		//61
		{	"skillid":"62", "cmt":"Elemental Barrier","skillref":["!Grant ", "elemental barrier element", "! Barrier (", "elemental barrier hp", "!HP / ", "elemental barrier def", "! DEF / ", "elemental barrier absorb dmg%", "!% DMG Absordbed)"]},
		//{"skillid":"63", "cmt":"","skillref":["@"]},
		//64
		{	"skillid":"65", "cmt":"Ail DMG+","skillref":["atk% buff when enemy has ailment", "!% ATK%+ to ailment-infected enemies ", "target type", "! ", "atk% buff turns (110)", "!Turns"]},
		{	"skillid":"66", "cmt":"Revive","skillref":["revive unit chance%", "!% Chance Revive Dead Units (", "revive unit hp%", "!% HP)", "target type"]},
		{	"skillid":"67", "cmt":"BC on Spark","skillref":["bc fill on spark%", "!% Chance to Fill (", "bc fill on spark low", "!-", "bc fill on spark high", "!) BB on Spark", "@", "bc fill on spark buff turns (111)", "!Turns", "target type"]},
		{	"skillid":"68", "cmt":"Miti on Guard","skillref":["!Increase ", "guard increase mitigation%", "!% DMG Reduced when Guarding ","guard increase mitigation buff turns (113)", "!Turn(s)"]},
		{	"skillid":"69", "cmt":"BC on Guard","skillref":["bb bc fill on guard","!BC Fill on Guard for ", "bb bc fill on guard buff turns (114)","!Turns ", "target area"]},
		//{"skillid":"70", "cmt":"","skillref":["@"]},
		//{"skillid":"71", "cmt":"","skillref":["@"]},
		//{"skillid":"72", "cmt":"","skillref":["@"]},
		{	"skillid":"73", "cmt":"Negate Debuffs","skillref":["!Negate Debuffs ", "stat down immunity buff turns", "!Turns"]},
		//{"skillid":"74", "cmt":"","skillref":["@"]},
		//{"skillid":"75", "cmt":"","skillref":["@"]},
		//{"skillid":"76", "cmt":"","skillref":["@"]},
		//{"skillid":"77", "cmt":"","skillref":["@"]},
		{	"skillid":"78", "cmt":"Stats Buff t:self","skillref":["@", "target type", "! ", "self stat buff turns", "!Turns"]},
		//{"skillid":"79", "cmt":"","skillref":["@"]},
		//{"skillid":"80", "cmt":"","skillref":["@"]},
		//{"skillid":"81", "cmt":"","skillref":["@"]},
		//{"skillid":"82", "cmt":"","skillref":["@"]},
		{	"skillid":"83", "cmt":"Cri Spa","skillref":["spark dmg inc chance%", "!% Chance for Critial Spark (", "spark dmg inc% buff", "!% DMG+) ","spark dmg inc buff turns (131)", "!Turn(s)"]},
		{	"skillid":"84", "cmt":"OD Fill Rate+","skillref":["od fill rate% buff", "!% OD Fill Rate+ ", "od fill rate buff turns (132)", "!Turn(s)"]},
		{	"skillid":"85", "cmt":"Heal when ATKed","skillref":["hp recover from dmg chance","!% Chance to Heal ", "hp recover from dmg% low", "!%-", "hp recover from dmg% high", "!% DMG when ATKed for ", "hp recover from dmg buff turns (133)", "!Turns", "target type"]},
		{	"skillid":"86", "cmt":"HP Drain","skillref":["hp drain chance%","!% Chance to drain ", "hp drain% low", "!%-", "hp drain% high", "!% HP for ", "hp drain buff turns (134)", "!Turns", "target type"]},
		{"skillid":"87", "cmt":"Heal on Spark","skillref":["spark recover hp chance%", "!% Chance to Heal (", "spark recover hp low", "!-", "spark recover hp high", "!) on Spark ","@", "spark recover hp buff turns (135)", "!Turns", "target type"]},
		{	"skillid":"88", "cmt":"Spark SELF","skillref":["spark dmg inc%",'!% Spark DMG+ (SELF) for ',"spark dmg inc% turns (136)",'!Turns']},
		//{"skillid":"89", "cmt":"","skillref":["@"]},
		//{"skillid":"90", "cmt":"","skillref":["@"]},
		//{"skillid":"91", "cmt":"","skillref":["@"]},
		//{"skillid":"92", "cmt":"","skillref":["@"]},
		{	"skillid":"93", "cmt":"Negate DMG Factors","skillref":["!Negate DMG Factors (","@","!) for ","dmg resist turns","!Turns ", "target type"]},
		{	"skillid":"94", "cmt":"Normal ATK AOE","skillref":["chance to aoe","!% Chance Normal ATK AOE (","aoe atk inc%","!%+ DMG) for ","(n/a)","!Turns ","target type"]},
		//{"skillid":"95", "cmt":"","skillref":["@"]},
		//{"skillid":"96", "cmt":"","skillref":["@"]},
		//97
		/*{"skillid":"98", "cmt":"","skillref":["@"]},
		{"skillid":"99", "cmt":"","skillref":["@"]},
		{"skillid":"100", "cmt":"","skillref":["@"]},
		{"skillid":"101", "cmt":"","skillref":["@"]},
		{"skillid":"102", "cmt":"","skillref":["@"]},
		{"skillid":"103", "cmt":"","skillref":["@"]},
		{"skillid":"104", "cmt":"","skillref":["@"]},
		{"skillid":"105", "cmt":"","skillref":["@"]},
		{"skillid":"106", "cmt":"","skillref":["@"]},
		{"skillid":"107", "cmt":"","skillref":["@"]},
		{"skillid":"108", "cmt":"","skillref":["@"]},
		{"skillid":"109", "cmt":"","skillref":["@"]},
		{"skillid":"110", "cmt":"","skillref":["@"]},
		{"skillid":"111", "cmt":"","skillref":["@"]},
		{"skillid":"112", "cmt":"","skillref":["@"]},*/
		{	"skillid":"113", "cmt":"OD Fill at End","skillref":["@"]}, /*"0,0,300,3,140"*/
		/*{"skillid":"114", "cmt":"","skillref":["@"]},
		{"skillid":"115", "cmt":"","skillref":["@"]},
		{"skillid":"116", "cmt":"","skillref":["@"]},
		{"skillid":"117", "cmt":"","skillref":["@"]},
		{"skillid":"118", "cmt":"","skillref":["@"]},
		{"skillid":"119", "cmt":"","skillref":["@"]},
		{"skillid":"120", "cmt":"","skillref":["@"]},
		{"skillid":"121", "cmt":"","skillref":["@"]},
		{"skillid":"122", "cmt":"","skillref":["@"]},
		{"skillid":"123", "cmt":"","skillref":["@"]},
		{"skillid":"124", "cmt":"","skillref":["@"]},
		{"skillid":"125", "cmt":"","skillref":["@"]},*/
		{	"skillid":"126", "cmt":"Negate DOT","skillref":["@"]}, /*"2,1,120"*/
		/*{"skillid":"127", "cmt":"","skillref":["@"]},
		{"skillid":"128", "cmt":"","skillref":["@"]},
		{"skillid":"129", "cmt":"","skillref":["@"]},*/
		{	"skillid":"130", "cmt":"Debuff c:ATKed","skillref":["@"]}, //(procid:130;param:-20,-20,0,10,10,0,2,3,130)
		/*{"skillid":"131", "cmt":"","skillref":["@"]},*/
		{	"skillid":"132", "cmt":"DMG Factors Debuff","skillref":["@"]}, /*"15,0,15,0,1,130"*/ /*"15,15,20,20,1,160"*/
		/*{"skillid":"133", "cmt":"","skillref":["@"]},
		{"skillid":"134", "cmt":"","skillref":["@"]},
		{"skillid":"135", "cmt":"","skillref":["@"]},
		{"skillid":"136", "cmt":"","skillref":["@"]},
		{"skillid":"137", "cmt":"","skillref":["@"]},
		{"skillid":"138", "cmt":"","skillref":["@"]},
		{"skillid":"139", "cmt":"","skillref":["@"]},
		{"skillid":"140", "cmt":"","skillref":["@"]},
		{"skillid":"141", "cmt":"","skillref":["@"]},
		{"skillid":"142", "cmt":"","skillref":["@"]},
		{"skillid":"143", "cmt":"","skillref":["@"]},
		{"skillid":"144", "cmt":"","skillref":["@"]},
		{"skillid":"145", "cmt":"","skillref":["@"]},
		{"skillid":"146", "cmt":"","skillref":["@"]},
		{"skillid":"147", "cmt":"","skillref":["@"]},
		{"skillid":"148", "cmt":"","skillref":["@"]},
		{"skillid":"149", "cmt":"","skillref":["@"]},
		{"skillid":"150", "cmt":"","skillref":["@"]},
		{"skillid":"151", "cmt":"","skillref":["@"]},
		{"skillid":"152", "cmt":"","skillref":["@"]},
		{"skillid":"153", "cmt":"","skillref":["@"]},
		{"skillid":"154", "cmt":"","skillref":["@"]},
		{"skillid":"155", "cmt":"","skillref":["@"]},
		{"skillid":"156", "cmt":"","skillref":["@"]},
		{"skillid":"157", "cmt":"","skillref":["@"]},
		{"skillid":"158", "cmt":"","skillref":["@"]},
		{"skillid":"159", "cmt":"","skillref":["@"]},
		{"skillid":"160", "cmt":"","skillref":["@"]},
		{"skillid":"161", "cmt":"","skillref":["@"]},
		{"skillid":"162", "cmt":"","skillref":["@"]},
		{"skillid":"163", "cmt":"","skillref":["@"]},
		{"skillid":"164", "cmt":"","skillref":["@"]},
		{"skillid":"165", "cmt":"","skillref":["@"]},
		{"skillid":"166", "cmt":"","skillref":["@"]},
		{"skillid":"167", "cmt":"","skillref":["@"]},
		{"skillid":"168", "cmt":"","skillref":["@"]},
		{"skillid":"169", "cmt":"","skillref":["@"]},
		{"skillid":"170", "cmt":"","skillref":["@"]},
		{"skillid":"171", "cmt":"","skillref":["@"]},
		{"skillid":"172", "cmt":"","skillref":["@"]},
		{"skillid":"173", "cmt":"","skillref":["@"]},
		{"skillid":"174", "cmt":"","skillref":["@"]},
		{"skillid":"175", "cmt":"","skillref":["@"]},
		{"skillid":"176", "cmt":"","skillref":["@"]},
		{"skillid":"177", "cmt":"","skillref":["@"]},
		{"skillid":"178", "cmt":"","skillref":["@"]},
		{"skillid":"179", "cmt":"","skillref":["@"]},
		{"skillid":"180", "cmt":"","skillref":["@"]},
		{"skillid":"181", "cmt":"","skillref":["@"]},
		{"skillid":"182", "cmt":"","skillref":["@"]},
		{"skillid":"183", "cmt":"","skillref":["@"]},
		{"skillid":"184", "cmt":"","skillref":["@"]},
		{"skillid":"185", "cmt":"","skillref":["@"]},
		{"skillid":"186", "cmt":"","skillref":["@"]},
		{"skillid":"187", "cmt":"","skillref":["@"]},
		{"skillid":"188", "cmt":"","skillref":["@"]},
		{"skillid":"189", "cmt":"","skillref":["@"]},
		{"skillid":"190", "cmt":"","skillref":["@"]},
		{"skillid":"191", "cmt":"","skillref":["@"]},
		{"skillid":"192", "cmt":"","skillref":["@"]},
		{"skillid":"193", "cmt":"","skillref":["@"]},
		{"skillid":"194", "cmt":"","skillref":["@"]},
		{"skillid":"195", "cmt":"","skillref":["@"]},
		{"skillid":"196", "cmt":"","skillref":["@"]},
		{"skillid":"197", "cmt":"","skillref":["@"]},
		{"skillid":"198", "cmt":"","skillref":["@"]},
		{"skillid":"199", "cmt":"","skillref":["@"]},
		{"skillid":"200", "cmt":"","skillref":["@"]},*/
      ];
// Variable Array	
var debuffArray=[{"skillid":"buff #1"}, {"skillid":"buff #2"}];
var selfstatsBuffArray=[{"skillid":"self atk% buff", "suffix":"% ATK+ "}, {"skillid":"self def% buff", "suffix":"% DEF+ "}, {"skillid":"self rec% buff", "suffix":"% REC+ "}, {"skillid":"self crit% buff", "suffix":"% CRIT Chance+ "}];
var statsBuffArray=[{"skillid":"atk% buff (1)", "suffix":"% ATK+ "}, {"skillid":"def% buff (3)", "suffix":"% DEF+ "}, {"skillid":"rec% buff (5)", "suffix":"% REC+ "}, {"skillid":"crit% buff (7)", "suffix":"% CRIT Chance+ "}, {"skillid":"atk% buff (13)", "suffix":"% ATK+ "}, {"skillid":"def% buff (14)", "suffix":"% DEF+ "}, {"skillid":"rec% buff (15)", "suffix":"% REC+ "}, {"skillid":"crit% buff (17)", "suffix":"% CRIT Chance+ "}];
var bbCrystalsBuffArray=[{"skillid":"bc drop rate% buff (10)", "suffix":"% BC+ "}, {"skillid":"hc drop rate% buff (9)", "suffix":"% HC+ "}, {"skillid":"item drop rate% buff (11)", "suffix":"% Item+ "}, {"skillid":"karma drop rate% buff", "suffix":"% Karma+ "}];
var bbSelfBuffArray=[{"skillid":"bb bc%", "suffix":"% BC+ "}, {"skillid":"bb hc%", "suffix":"% HC+ "}];
var gradualhealbuffArray=[{"skillid":"gradual heal high", "suffix":"Gradual Heal "}];
var ailsArray=[{"skillid":"injury%", "suffix":"% Injury "}, {"skillid":"weaken%", "suffix":"% Weak "}, {"skillid":"sick%", "suffix":"% Sick "}, {"skillid":"poison%", "suffix":"% Poison "}, {"skillid":"paralysis%", "suffix":"% Para "}, {"skillid":"curse%", "suffix":"% Curse "}];
var ailsBuffArray=[{"skillid":"injury% buff", "suffix":"% Injury "}, {"skillid":"weaken% buff", "suffix":"% Weak "}, {"skillid":"sick% buff", "suffix":"% Sick "}, {"skillid":"poison% buff", "suffix":"% Poison "}, {"skillid":"paralysis% buff", "suffix":"% Para "}, {"skillid":"curse% buff", "suffix":"% Curse "}];
var counterailsBuffArray=[{"skillid":"counter inflict injury% (81)", "suffix":"% Injury "}, {"skillid":"counter inflict weaken% (79)", "suffix":"% Weak "}, {"skillid":"counter inflict sick% (80)", "suffix":"% Sick "}, {"skillid":"counter inflict poison% (78)", "suffix":"% Poison "}, {"skillid":"counter inflict paralysis% (83)", "suffix":"% Para "}, {"skillid":"counter inflict curse% (82)", "suffix":"% Curse "}];
var esTrigger=[{"skillid":"trigger on bb", "suffix":"BB"}, {"skillid":"trigger on sbb", "suffix":"SBB"}, {"skillid":"trigger on ubb", "suffix":"UBB"}];
var bbWeakElementArray=[{"skillid":"fire units do extra elemental weakness dmg", "suffix":"fire"}, {"skillid":"water units do extra elemental weakness dmg", "suffix":"water"}, {"skillid":"earth units do extra elemental weakness dmg", "suffix":"earth"}, {"skillid":"thunder units do extra elemental weakness dmg", "suffix":"thunder"}, {"skillid":"light units do extra elemental weakness dmg", "suffix":"light"}, {"skillid":"dark units do extra elemental weakness dmg", "suffix":"dark"}];
var bbElementMitiArray=[{"skillid":"mitigate fire attacks", "suffix":"Fire"}, {"skillid":"mitigate water attacks", "suffix":"Water"}, {"skillid":"mitigate earth attacks", "suffix":"Earth"}, {"skillid":"mitigate thunder attacks", "suffix":"Thunder"}, {"skillid":"mitigate light attacks", "suffix":"Light"}, {"skillid":"mitigate dark attacks", "suffix":"Dark"}];
var bbElementMitiArray2=[{"skillid":"mitigate fire attacks (21)", "suffix":"Fire"}, {"skillid":"mitigate water attacks (22)", "suffix":"Water"}, {"skillid":"mitigate earth attacks (23)", "suffix":"Earth"}, {"skillid":"mitigate thunder attacks (24)", "suffix":"Thunder"}, {"skillid":"mitigate light attacks (25)", "suffix":"Light"}, {"skillid":"mitigate dark attacks (26)", "suffix":"Dark"}];
var bbDMGResistArray=[{"skillid":"crit chance buffed resist% (142)", "altid":"crit chance base resist% (142)", "suffix":"% Crit Chance "}, {"skillid":"crit dmg buffed damage resist% (143)", "altid":"crit dmg base damage resist% (143)", "suffix":"% Crit DMG "}, {"skillid":"strong buffed element damage resist% (144)", "altid":"strong base element damage resist% (144)", "suffix":"% Elemental Weakness DMG "},{"skillid":"spark dmg buffed resist% (145)", "altid":"spark dmg base resist% (145)", "suffix":"% Spark DMG "}];
var bbConvertArray=[{"skillid":"atk% buff (46)", "suffix":"% to ATK "}, {"skillid":"def% buff (47)", "suffix":"% to DEF "}, {"skillid":"rec% buff (48)", "suffix":"% to REC "}];
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
    	  
exports.find = function (objectAS, valObj) {
		  var uparams = [];
		  var bbSkillFound=0;
		  bbFound=false;
          var functionSTR="";

		  if (!bbFound)
          functionSTR+='';
			  for (i=0;i<skillParseObj.length;i++) {
                var skillSeek=skillParseObj[i]["skillid"];
                /*looking each effect array*/
                for (j in objectAS) {
                    /*resets var for each effect*/
                    var groupSTR="";
                    var effectFound=false;
					if (objectAS[j]["proc id"])
						var skillID=objectAS[j]["proc id"]
					else if (objectAS[j]["unknown proc id"])
						var skillID=objectAS[j]["unknown proc id"];                    
                    /*Check collective group buff*/
                    if (skillSeek=="5") {
                      for (ix in statsBuffArray) {
                          for (var effectKey in objectAS[j]) {var effectVal = objectAS[j][effectKey];
                            if (effectKey==statsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+statsBuffArray[ix]["suffix"];
                            }
                          }
                      }
					  if ((objectAS[j]["element buffed"]) && (objectAS[j]["element buffed"]!="all"))
						  groupSTR+='(to '+objectAS[j]["element buffed"].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})+' Units)';
                    } /*End Grouping check*/
                    
                    /*Check self stat buff*/
                    else if (skillSeek=="78") {
                      for (ix in selfstatsBuffArray) {
                          for (var effectKey in objectAS[j]) {var effectVal = objectAS[j][effectKey];
                            if (effectKey==selfstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+selfstatsBuffArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/					

                    /*Check collective group debuff*/
                    else if (skillSeek=="9") {
                      for (ix in debuffArray) {
                          for (var effectKey in objectAS[j]) {var effectVal = objectAS[j][effectKey];
                            if (effectKey==debuffArray[ix]["skillid"]) {
                              /*separator for multiple buffs*/
                              if (ix != 0)
                                groupSTR+=skillConnect;
                              groupSTR+=effectVal['proc chance%']+'% Chance ';
                              if (effectVal['atk% buff (2)'])
                                groupSTR+=effectVal['atk% buff (2)']+'% Enemy ATK '+objectAS[j]['buff turns']+'Turns';
                              if (effectVal['def% buff (4)'])
                                groupSTR+=effectVal['def% buff (4)']+'% Enemy DEF '+objectAS[j]['buff turns']+'Turns';
                            }
                          }
                      }
					  if (objectAS[j]['buff turns'])
							  groupSTR+=" Debuff " + objectAS[j]['buff turns'] + "Turns";
                    } /*End Grouping check*/
                    
                    /*Check BB Self buff*/
                    else if (skillSeek=="1") {
                      for (ix in bbSelfBuffArray) {
                          for (var effectKey in objectAS[j]) {var effectVal = objectAS[j][effectKey];
                            if (effectKey==bbSelfBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+bbSelfBuffArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
                    
                    /*Gradual heal*/
                    else if (skillSeek=="3") {
                      for (ix in gradualhealbuffArray) {
                          for (var effectKey in objectAS[j]) {var effectVal = objectAS[j][effectKey];
                            if (effectKey==gradualhealbuffArray[ix]["skillid"]) {
                              groupSTR+=gradualhealbuffArray[ix]["suffix"];
                              if (effectVal==99999)
                                groupSTR+="FULL"
                            }
                          }
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective group crystals buff*/
                    else if (skillSeek=="6") {
                      for (ix in bbCrystalsBuffArray) {
                          for (var effectKey in objectAS[j]) {var effectVal = objectAS[j][effectKey];
                            if (effectKey==bbCrystalsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+bbCrystalsBuffArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective ails rate*/
                    else if (skillSeek=="11") {
                      for (ix in ailsArray) {
                          for (var effectKey in objectAS[j]) {var effectVal = objectAS[j][effectKey];
                            if (effectKey==ailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+ailsArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective counter ails buff*/
                    else if (skillSeek=="53") {
                      for (ix in counterailsBuffArray) {
                          for (var effectKey in objectAS[j]) {var effectVal = objectAS[j][effectKey];
                            if (effectKey==counterailsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+counterailsBuffArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective ails buff*/
                    else if (skillSeek=="40") {
                      for (ix in ailsBuffArray) {
                          for (var effectKey in objectAS[j]) {var effectVal = objectAS[j][effectKey];
                            if (effectKey==ailsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+ailsBuffArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
					
                    /*Elemental mitigation check*/
                    else if (skillSeek=="16") {
                      var elementCount=0;
                      for (ix in bbElementMitiArray2) {
                          for (var effectKey in objectAS[j]) {var effectVal = objectAS[j][effectKey];
                            if (effectKey==bbElementMitiArray2[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=effectVal+'% '+bbElementMitiArray2[ix]["suffix"];
                            }
                          }
                      }
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else if (elementCount!=0)
                          groupSTR+=")"
					}
					
					else if (skillSeek=="39") {
                      var elementCount=0;
                      for (ix in bbElementMitiArray) {
                          for (var effectKey in objectAS[j]) {var effectVal = objectAS[j][effectKey];
                            if (effectKey==bbElementMitiArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=bbElementMitiArray[ix]["suffix"];
                            }
                          }
                      }
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else if (elementCount!=0)
                          groupSTR+=")"
					}
						                      
                    /*Elemental weakness check*/
                    else if (skillSeek=="55") {
                      var elementCount=0;
                      for (ix in bbWeakElementArray) {
                          for (var effectKey in objectAS[j]) {var effectVal = objectAS[j][effectKey];
                            if (effectKey==bbWeakElementArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=bbWeakElementArray[ix]["suffix"];

                            }
                          }
                      }
                        if (elementCount==6)
                          groupSTR="(ALL Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/
					else if (skillSeek=="24") {
						var bCount=0;
                      for (ix in bbConvertArray) {
                          for (var effectKey in objectAS[j]) {var effectVal = objectAS[j][effectKey];
                            if (effectKey==bbConvertArray[ix]["skillid"]) {
                                if (bCount>0)
                                  groupSTR+=",";
                                bCount+=1;
                                groupSTR+=effectVal+bbConvertArray[ix]["suffix"];

                            }
                          }
                      }
                    } /*End Grouping check*/
					else if (skillSeek=="93") {
                      for (ix in bbDMGResistArray) {
                          for (var effectKey in objectAS[j]) {var effectVal = objectAS[j][effectKey];
                            if (effectKey==bbDMGResistArray[ix]["skillid"]) {
                                groupSTR+=objectAS[j][bbDMGResistArray[ix]["altid"]]+'-'+objectAS[j][bbDMGResistArray[ix]["skillid"]]+bbDMGResistArray[ix]["suffix"];
                            }
                          }
                      }
                        if (elementCount==6)
                          groupSTR="(ALL Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/
                    else if (skillSeek=="132") {
						if (objectAS[j]["unknown proc param"]) {
						uparams = [];
						uparams = objectAS[j]["unknown proc param"].split(",");
							if(uparams[0]!=0 && uparams[2]!=0){
								groupSTR+=uparams[0]+'% Chance Enemy receives '+uparams[2]+'% CRIT DMG+ ';
							}
							if (groupSTR!='')
								groupSTR+=' & '
							if(uparams[1]!=0 && uparams[3]!=0){
								groupSTR+=uparams[1]+'% Chance Enemy receives '+uparams[3]+'% Elemental Weakness DMG+';	
							}
						groupSTR+=' for '+uparams[4]+'Turns ';
						}
					}
                    else if (skillSeek=="126") {
						if (objectAS[j]["unknown proc param"]) {
						uparams = [];
						uparams = objectAS[j]["unknown proc param"].split(",");
						groupSTR+='Negate '+uparams[0]+'% DOT DMG for '+uparams[1]+'Turns ';
						}
					}
					else if (skillSeek=="113") {
						if (objectAS[j]["unknown proc param"]) {
						uparams = [];
						uparams = objectAS[j]["unknown proc param"].split(",");
						groupSTR+=uparams[2]+' OD Fill+ at Turn End for '+uparams[3]+'Turns ';
						}
					}
					else if (skillSeek=="97") {
						if (objectAS[j]["unknown proc param"]) {
						uparams = [];
						uparams = objectAS[j]["unknown proc param"].split(",");
						groupSTR+=uparams[1]+'%/'+uparams[2];
						}
					}
					else if (skillSeek=="26") {
                      if (objectAS[j]["extra hits dmg%"]) 
                          groupSTR+=objectAS[j]["extra hits dmg%"];
					  else
						  groupSTR+="0";
                    }
					else if (skillSeek=="130") {
						if (objectAS[j]["unknown proc param"]) {
						uparams = [];
						uparams = objectAS[j]["unknown proc param"].split(",");
						groupSTR+="["+uparams[3]+"% Chance "+uparams[0]+" Enemy ATK /"+uparams[4]+"% Chance "+uparams[1]+" Enemy DEF for "+uparams[6]+"Turn(s)] when ATKed for "+uparams[7]+"Turn(s)";
						}
					}
                    //(procid:130;param:-20,-20,0,10,10,0,2,3,130)
					/*looping non grouping buff*/
                    if (skillID==skillSeek) {
                      effectFound=true;
                    } /*End non-grouping*/
                  
                  /*Build output string*/
                  if (effectFound) {
                  /*add connector if not first skill found*/
                      if (bbSkillFound != 0)
                        functionSTR+=skillConnect;
                        bbSkillFound+=1;
                      for (k in skillParseObj[i]["skillref"]) {
                        if (skillParseObj[i]["skillref"][k].charAt(0) == "@") {
                          functionSTR+=groupSTR;
                        } else if (skillParseObj[i]["skillref"][k].charAt(0) == "?") {
                          /*handling special obj values*/
                          var specialKey=skillParseObj[i]["skillref"][k].slice(1);
						  var specialValue='';
						  if (valObj) {
						  specialValue=valObj[specialKey];
                          specialValue=specialValue.charAt(0).toUpperCase().concat(specialValue.slice(1));
						  }
                          /*Extra BB Elements*/
						  if (skillID=="97") {
							switch (specialValue) {
								case "Fire":
									specialValue+=" to Earth Enemy ";
									break;
								case "Water":
									specialValue+=" to Fire Enemy ";
									break;
								case "Earth":
									specialValue+=" to Thunder Enemy ";
									break;
								case "Thunder":
									specialValue+=" to Water Enemy ";
									break;
								case "Light":
									specialValue+=" to Dark Enemy ";
									break;
								case "Dark":
									specialValue+=" to Light Enemy ";
									break;		
							}
						  } else if (skillID=="29") {
						  specialValue+=' ';	  
						  for (t in objectAS[j]["bb elements"])
							  specialValue+=objectAS[j]["bb elements"][t].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})+' ';
                          } else specialValue+=' ';
                          functionSTR+=specialValue;
                        } else if (skillParseObj[i]["skillref"][k].charAt(0) == "!") {
                          /*handling str additions*/
                          functionSTR+=skillParseObj[i]["skillref"][k].slice(1);
                        } else {
                          /*handling identified obj value*/
                          var callObjName=skillParseObj[i]["skillref"][k];
                          if (objectAS[j][callObjName]) {
                              var exportValue=objectAS[j][callObjName];
                              if (callObjName=="elements added" || callObjName=="element buffed")
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
                                case "attack":
                                  exportValue="ATK";
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
                              }
                              functionSTR+=exportValue;
                          }
                          else if (objectAS[j][callObjName]==0)
                            functionSTR+=objectAS[j][callObjName];
                          else
                            functionSTR+='0';
                        }
                      }
                  } /*End Output String Build*/
                }
              }
            /*check for missing skill effects*/
            if (bbSkillFound < objectAS.length) {
				for (n=0;n<objectAS.length;n++) {
				if (objectAS[n]["unknown proc id"]) {	
					functionSTR+='+ Undefined effect(s)['+'(procid:'+objectAS[n]["unknown proc id"]+';param:'+objectAS[n]["unknown proc param"]+')]';
					
				}
				}
            };
			return functionSTR;
          }

exports.trig = function (objectAS, valObj) {
		  var uparams = [];
		  var bbSkillFound=0;
		  bbFound=false;
          var functionSTR=" ";
		  if (!bbFound)
          functionSTR+='';
			  for (i=0;i<skillParseObj.length;i++) {
                var skillSeek=skillParseObj[i]["skillid"];
                /*looking each effect array*/
                    /*resets var for each effect*/
                    var groupSTR="";
                    var effectFound=false;
                    if (objectAS["proc id"])
						var skillID=objectAS["proc id"]
					else if (objectAS["unknown proc id"])
						var skillID=objectAS["unknown proc id"];
                    /*Check collective group buff*/
                    if (skillSeek=="5") {
                      for (ix in statsBuffArray) {
                          for (var effectKey in objectAS) {var effectVal = objectAS[effectKey];
                            if (effectKey==statsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+statsBuffArray[ix]["suffix"];
                            }
                          }
                      }
					  if ((objectAS["element buffed"]) && (objectAS["element buffed"]!="all"))
						  groupSTR+='(to '+objectAS["element buffed"].toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})+' Units)';
                    } /*End Grouping check*/
                    
                    /*Check self stat buff*/
                    else if (skillSeek=="78") {
                      for (ix in selfstatsBuffArray) {
                          for (var effectKey in objectAS) {var effectVal = objectAS[effectKey];
                            if (effectKey==selfstatsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+selfstatsBuffArray[ix]["suffix"];
                              effectFound=true;
                            }
                          }
                      }
                    } /*End Grouping check*/					

                    /*Check collective group debuff*/
                    else if (skillSeek=="9") {
                      for (ix in debuffArray) {
                          for (var effectKey in objectAS) {var effectVal = objectAS[effectKey];
                            if (effectKey==debuffArray[ix]["skillid"]) {
                              /*separator for multiple buffs*/
                              if (ix != 0)
                                groupSTR+=skillConnect;
                              groupSTR+=effectVal['proc chance%']+'% Chance ';
                              if (effectVal['atk% buff (2)'])
                                groupSTR+=effectVal['atk% buff (2)']+'% Enemy ATK '+objectAS['buff turns']+'Turns';
                              if (effectVal['def% buff (4)'])
                                groupSTR+=effectVal['def% buff (4)']+'% Enemy DEF '+objectAS['buff turns']+'Turns';
                            }
                          }
                      }
					  if (objectAS['buff turns'])
							  groupSTR+="Debuff " + objectAS['buff turns'] + "Turns";
                    } /*End Grouping check*/
                    
                    /*Check BB Self buff*/
                    else if (skillSeek=="1") {
                      for (ix in bbSelfBuffArray) {
                          for (var effectKey in objectAS) {var effectVal = objectAS[effectKey];
                            if (effectKey==bbSelfBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+bbSelfBuffArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
                    
                    /*Gradual heal*/
                    else if (skillSeek=="3") {
                      for (ix in gradualhealbuffArray) {
                          for (var effectKey in objectAS) {var effectVal = objectAS[effectKey];
                            if (effectKey==gradualhealbuffArray[ix]["skillid"]) {
                              groupSTR+=gradualhealbuffArray[ix]["suffix"];
                              if (effectVal==99999)
                                groupSTR+="FULL"
                            }
                          }
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective group crystals buff*/
                    else if (skillSeek=="6") {
                      for (ix in bbCrystalsBuffArray) {
                          for (var effectKey in objectAS) {var effectVal = objectAS[effectKey];
                            if (effectKey==bbCrystalsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+bbCrystalsBuffArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective ails rate*/
                    else if (skillSeek=="11") {
                      for (ix in ailsArray) {
                          for (var effectKey in objectAS) {var effectVal = objectAS[effectKey];
                            if (effectKey==ailsArray[ix]["skillid"]) {
                              groupSTR+=effectVal+ailsArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective counter ails buff*/
                    else if (skillSeek=="53") {
                      for (ix in counterailsBuffArray) {
                          for (var effectKey in objectAS) {var effectVal = objectAS[effectKey];
                            if (effectKey==counterailsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+counterailsBuffArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
                    
                    /*Check collective ails buff*/
                    else if (skillSeek=="40") {
                      for (ix in ailsBuffArray) {
                          for (var effectKey in objectAS) {var effectVal = objectAS[effectKey];
                            if (effectKey==ailsBuffArray[ix]["skillid"]) {
                              groupSTR+=effectVal+ailsBuffArray[ix]["suffix"];
                            }
                          }
                      }
                    } /*End Grouping check*/
					
                    /*Elemental mitigation check*/
                    else if (skillSeek=="16") {
                      var elementCount=0;
                      for (ix in bbElementMitiArray2) {
                          for (var effectKey in objectAS) {var effectVal = objectAS[effectKey];
                            if (effectKey==bbElementMitiArray2[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=effectVal+'% '+bbElementMitiArray2[ix]["suffix"];
                            }
                          }
                      }
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else if (elementCount!=0)
                          groupSTR+=")"
					}
					
					else if (skillSeek=="39") {
                      var elementCount=0;
                      for (ix in bbElementMitiArray) {
                          for (var effectKey in objectAS) {var effectVal = objectAS[effectKey];
                            if (effectKey==bbElementMitiArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=bbElementMitiArray[ix]["suffix"];
                            }
                          }
                      }
                        if (elementCount==6)
                          groupSTR="(ALL)"
                        else if (elementCount!=0)
                          groupSTR+=")"
					}
						                      
                    /*Elemental weakness check*/
                    else if (skillSeek=="55") {
                      var elementCount=0;
                      for (ix in bbWeakElementArray) {
                          for (var effectKey in objectAS) {var effectVal = objectAS[effectKey];
                            if (effectKey==bbWeakElementArray[ix]["skillid"]) {
                                if (elementCount>0)
                                  groupSTR+=",";
                                elementCount+=1;
                                if (elementCount==1)
                                  groupSTR+="("
                                groupSTR+=bbWeakElementArray[ix]["suffix"];

                            }
                          }
                      }
                        if (elementCount==6)
                          groupSTR="(ALL Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/
					else if (skillSeek=="24") {
						var bCount=0;
                      for (ix in bbConvertArray) {
                          for (var effectKey in objectAS) {var effectVal = objectAS[effectKey];
                            if (effectKey==bbConvertArray[ix]["skillid"]) {
                                if (bCount>0)
                                  groupSTR+=",";
                                bCount+=1;
                                groupSTR+=effectVal+bbConvertArray[ix]["suffix"];

                            }
                          }
                      }
                    } /*End Grouping check*/
					else if (skillSeek=="93") {
                      for (ix in bbDMGResistArray) {
                          for (var effectKey in objectAS) {var effectVal = objectAS[effectKey];
                            if (effectKey==bbDMGResistArray[ix]["skillid"]) {
                                groupSTR+=objectAS[bbDMGResistArray[ix]["altid"]]+'-'+objectAS[bbDMGResistArray[ix]["skillid"]]+bbDMGResistArray[ix]["suffix"];
                            }
                          }
                      }
                        if (elementCount==6)
                          groupSTR="(ALL Elements)"
                        else if (elementCount!=0)
                          groupSTR+=")"
                    } /*End Grouping check*/
                    else if (skillSeek=="132") {
						if (objectAS["unknown proc param"]) {
						uparams = [];
						uparams = objectAS["unknown proc param"].split(",");
							if(uparams[0]!=0 && uparams[2]!=0){
								groupSTR+=uparams[0]+'% Chance Enemy receives '+uparams[2]+'% CRIT DMG+ ';
							}
							if (groupSTR!='')
								groupSTR+=' & '
							if(uparams[1]!=0 && uparams[3]!=0){
								groupSTR+=uparams[1]+'% Chance Enemy receives '+uparams[3]+'% Elemental Weakness DMG+';	
							}
						groupSTR+=' for '+uparams[4]+'Turns ';
						}
					}
                    else if (skillSeek=="126") {
						if (objectAS["unknown proc param"]) {
						uparams = [];
						uparams = objectAS["unknown proc param"].split(",");
						groupSTR+='Negate '+uparams[0]+'% DOT DMG for '+uparams[1]+'Turns ';
						}
					}
					else if (skillSeek=="113") {
						if (objectAS["unknown proc param"]) {
						uparams = [];
						uparams = objectAS["unknown proc param"].split(",");
						groupSTR+=uparams[2]+' OD Fill+ at Turn End for '+uparams[3]+'Turns ';
						}
					}
					else if (skillSeek=="97") {
						if (objectAS["unknown proc param"]) {
						uparams = [];
						uparams = objectAS["unknown proc param"].split(",");
						groupSTR+=uparams[1]+'%/'+uparams[2];
						}
					}
					else if (skillSeek=="26") {
                      if (objectAS["extra hits dmg%"]) 
                          groupSTR+=objectAS["extra hits dmg%"];
					  else
						  groupSTR+="0";
                    }
				  	else if (skillSeek=="130") {
						if (objectAS["unknown proc param"]) {
						uparams = [];
						uparams = objectAS["unknown proc param"].split(",");
						groupSTR+="["+uparams[3]+"% Chance "+uparams[0]+" Enemy ATK /"+uparams[4]+"% Chance "+uparams[1]+" Enemy DEF for "+uparams[6]+"Turn(s)] when ATKed for "+uparams[7]+"Turn(s)";
						}
					}
                  /*looping non grouping buff*/
                    if (skillID==skillSeek) {
                      effectFound=true;
                    } /*End non-grouping*/
                  
                  /*Build output string*/
                  if (effectFound) {
                  /*add connector if not first skill found*/
                      if (bbSkillFound != 0)
                        functionSTR+=skillConnect;
                        bbSkillFound+=1;
                      for (k in skillParseObj[i]["skillref"]) {
                        if (skillParseObj[i]["skillref"][k].charAt(0) == "@") {
                          functionSTR+=groupSTR;
                        } else if (skillParseObj[i]["skillref"][k].charAt(0) == "?") {
                          /*handling special obj values*/
                          var specialKey=skillParseObj[i]["skillref"][k].slice(1); 
						  if (valObj) {
						  var specialValue=valObj[specialKey];
                          specialValue=specialValue.charAt(0).toUpperCase().concat(specialValue.slice(1));
						  } else var specialValue = "";
                          /*Extra BB Elements*/
                          if (bbFound && objectAS["bb elements"]) {
                            specialValue=objectAS["bb elements"];
                            specialValue=specialValue.toString().replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                          }
                          functionSTR+=specialValue;
                        } else if (skillParseObj[i]["skillref"][k].charAt(0) == "!") {
                          /*handling str additions*/
                          functionSTR+=skillParseObj[i]["skillref"][k].slice(1);
                        } else {
                          /*handling identified obj value*/
                          var callObjName=skillParseObj[i]["skillref"][k];
                          if (objectAS[callObjName]) {
                              var exportValue=objectAS[callObjName];
                              if (callObjName=="elements added" || callObjName=="element buffed")
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
                                  exportValue="ATK";
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
                              }
                              functionSTR+=exportValue;
                          }
                          else if (objectAS[callObjName]==0)
                            functionSTR+=objectAS[callObjName];
                          else
                            functionSTR+='';
                        }
                      }
                  } /*End Output String Build*/
              }
            /*check for missing skill effects*/
			return functionSTR;
          }
