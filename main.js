$(document).ready(function() {
	
	function displayTime() {
		
		let currentTime = new Date();
		let hours = currentTime.getHours();
		let minutes = currentTime.getMinutes();
		let seconds = currentTime.getSeconds();
		let meridiem = "AM"; // Default is AM

		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		
		if (minutes < 10) {
			minutes = "0" + minutes;
		}

		// If hours is greater than 12
		if (hours > 12) {
			hours = hours - 12;
			meridiem = "PM"
		}

		if (hours === 0) {
			hours = 12;
		}

		let clockDiv =  document.getElementById('clock');
		clockDiv.innerText = hours + ":" + minutes + ":" + seconds + meridiem;

	}

	displayTime();
	setInterval(displayTime, 1000);
	
});
