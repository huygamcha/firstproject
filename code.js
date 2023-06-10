function countdown() {
    var endDate = new Date("2023-06-11 12:00:00"); // Thời gian kết thúc đếm ngược
  
    var countdownElement = document.getElementById("timing-time");
  
    var countdownInterval = setInterval(function() {
      var currentDate = new Date();
      var remainingTime = endDate - currentDate;
  
      if (remainingTime < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Hết thời gian";
        return;
      }
  
      var hours = Math.floor(remainingTime / (1000 * 60 * 60));
      var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      if (seconds >= 10 && minutes >= 10 ) {
      countdownElement.innerHTML = hours + ":" + minutes + ":" + seconds + "";
    }
      else if (seconds < 10 && minutes >= 10){
      countdownElement.innerHTML = hours + ":" + minutes + ":0" + seconds + "";

      }
      else if (seconds >= 10 && minutes < 10){
        countdownElement.innerHTML = hours + ":0" + minutes + ":" + seconds + "";
      }
      else if (seconds <10 && minutes < 10){
        countdownElement.innerHTML = hours + ":0" + minutes + ":0" + seconds + "";
  
        }
    }, 1000);
  }
  
  countdown();
  