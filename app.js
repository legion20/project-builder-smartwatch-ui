var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var setTime = setInterval(showtime, 1000);


function showtime()
{
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var day = today.getDay();

       toptime.innerHTML=hours+":"+ minutes;
       middletime.innerHTML= hours+":"+minutes;
       daydisplay.innerHTML= days[day];
}
setInterval(time,1000);