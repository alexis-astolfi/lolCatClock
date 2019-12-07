var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;

var updateClock = function() {
var timeEventJS = document.getElementById("timeEvent");
var lolCatJS = document.getElementById("lolcat");
var messageText;
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	
if (time == partyTime)	{
    messageText = "IZ PARTEE TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	} else if (time == napTime) {
    messageText = "IZ NAP TIME...";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	} else if (time == wakeUpTime) {
    messageText = "IZ TIME TO GETTUP.";
	image  = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	} else if (time < noon) {
    messageText = "Good morning!";
	} else if (time > evening) {
    messageText = "Good Evening!";
	} else {
    messageText = "Good afternoon!";
	}

timeEventJS.innerText = messageText;
lolCatJS.src = image;
showCurrentTime();
};
	
var showCurrentTime = function()	{
    // display the string on the webpage
var clock = document.getElementById('clock');
var currentTime = new Date();
 
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var meridian = "AM";
 
    // Set hours 
if (hours >= noon)	{ 
	meridian = "PM"; 
}  
if (hours > noon)	{ 
	hours = hours - 12; 
}
    // Set Minutes
if (minutes < 10)	{
	minutes = "0" + minutes;
} 
    // Set Seconds
if (seconds < 10)	{
	seconds = "0" + seconds;
}
    // put together the string that displays the time
var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
clock.innerText = clockTime;
};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyButton = 				document.getElementById("partyTimeButton");

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  partyButton.style.backgroundColor = "#0A8DAB";
	  partyButton.innerText = "Party Time!";
      // text in the button should read "Party Over"
      // color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
	  partyButton.style.backgroundColor = "#222";
	  partyButton.innerText = "Party Over";
      // text in the button should read "PARTY TIME!"
      // color of the button should be "#222" (bonus!)
   }
};

partyButton.addEventListener("click", partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var wakeUpEvent = function() {
	wakeUpTime = wakeUpTimeSelector.value;
};
var lunchEvent = function() {
	lunchTime = lunchTimeSelector.value;
};
var napEvent = function() {
	napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);





