// https://mindgrader.com/tutorials/1-how-to-create-a-simple-javascript-countdown-timer

Drupal.behaviors.x_date = {

  attach: function (context, settings) {

    // variables for time units
    var days, hours, minutes, seconds;
     
    // update the tag with id "countdown" every 1 second
    setInterval(function () {

      for(var id in settings.x_date) {

        var tag = document.getElementById(id);

        var deadline = settings.x_date[id];
        deadline = deadline * 1000;
     
        // find the amount of "seconds" between now and target
        var now = new Date().getTime();
        var s = (deadline - now) / 1000;

        if (s < 0) {
          location.reload(false);
        }
     
        // do some time calculations

        // these are approximates
        var years = s / (365*86400);
        var months = s / (30*86400);
        var weeks = s / (7*86400);

        var days = parseInt(s / 86400);
        s = parseInt(s % 86400);
         
        var hours = parseInt(s / 3600);
        s = parseInt(s % 3600);
         
        var minutes = parseInt(s / 60);
        var seconds = parseInt(s % 60);

        var text;
        if (years > 1) {
          text = years.toFixed(1) + ' years';
        }
        else
        if (months > 1) {
          text = months.toFixed(1) + ' months';
        }
        else
        if (weeks > 1) {
          text = weeks.toFixed(1) + ' weeks';
        }
        else
        if (days > 0) {
          text = (days + hours/24).toFixed(1) + ' days';
        }
        else
        if(hours > 0) {
          text = (hours + minutes/60).toFixed(1) + ' hours';
        }
        else
        if(minutes >= 5) {
          text = minutes + ' minutes';
        }
        else
        if(minutes > 0) {
          text = ('0' + minutes).substr(-2,2) + ':' + ('0' + seconds).substr(-2,2);
        }
        else
        if(seconds >= 0) {
          text = ("0" + seconds).substr(-2,2) + ' seconds';
        }
        else {
          text = '';
        }
         
        // format countdown string + set tag value
        tag.innerHTML = text

      }
     
    }, 1000);

  }

};
