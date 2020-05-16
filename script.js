function getutime() {
		var d = new Date();
		return Math.round(d.getTime()/1000);
	}

function updatedisp(e) {
	cleardatadisp();
	tdrinks = 0 
	ttime = 0 
	for (i = 0; i < e.length-1; i++) {
		tdrinks = tdrinks + parseFloat(e[i][0])
 	} 
 	for (i = 0; i < e.length-1; i++) {
		ttime = ttime + parseInt(e[i][1])
 	} 
 	if (tdrinks == 0) {
 		document.getElementById('Hourly Avg').innerHTML = 0;
 	}
 	else {
 		document.getElementById('Hourly Avg').innerHTML = (tdrinks/(ttime)).toFixed( 1 );
 	}
 	//IF ist the first drink of the night gettime and setstarttime 
 	if (e.length == 1) {
 		var STime = getstarttime().substring(11,17)
 		localStorage.setItem('Time',JSON.stringify(STime));
 		
 	}
	document.getElementById('Standards').innerHTML = tdrinks;
	document.getElementById('Minutes').innerHTML = ttime;
	document.getElementById('StartTime').innerHTML = JSON.parse(localStorage.getItem('Time'));

	for (i = 0; i < e.length; i++) {
 		el = document.createElement("P");
  		el.innerHTML = "S: " + e[e.length -(i+1)][0] + ", M: " + e[e.length -(i+1)][1];
 		document.getElementById('listspace').appendChild(el);
 	}
} 

function cleardatadisp() {
	document.getElementById('StartTime').innerHTML = ' ';
	document.getElementById('listspace').innerHTML = ' ';
	document.getElementById('Standards').innerHTML = ' ';
	document.getElementById('Minutes').innerHTML = ' ';
	document.getElementById('Hourly Avg').innerHTML = ' ';
}


function listadjust(b) {
	for (i = 0; i < b.length; i++) {
		if (i == (b.length-1)) {
			b[i][1] = 'In Progress...';
		}
	}
	return b;
}
function testforbadinput(e) {
	if (e == 0 || e == '') {
		return true 
	}
	else {
		return false
	}
}

function getstarttime() {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*10));
    return nd.toLocaleString();;
}
