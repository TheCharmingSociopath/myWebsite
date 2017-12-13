	var bdate = new Date("November 22, 1997");

	function update() {
	var cdate = new Date();
	var diff = new Date(bdate - cdate);
	var month = document.getElementById('month');
	var day = document.getElementById('day');
	var hours = document.getElementById('hours');
	var minutes = document.getElementById('minutes');
	var seconds = document.getElementById('seconds');


	month.innerHTML=diff.getUTCMonth();
	day.innerHTML=diff.getUTCDate();
	hours.innerHTML=diff.getUTCHours();
	minutes.innerHTML=diff.getUTCMinutes();
	seconds.innerHTML=diff.getUTCSeconds();
	}


	update();
	setInterval(function () {
	update()
	}, 1000);