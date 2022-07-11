'use strict';
window.onload = function () {
  let dark = document.getElementById("dark");
  let light = document.getElementById("light");

  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;
  let appendMinutes = document.getElementById("minutes");
  let appendSeconds = document.getElementById("seconds");
  let appendMilliseconds = document.getElementById("milliseconds");
  let startButton = document.getElementById("start");
  let stopButton = document.getElementById("stop");
  let resetButton = document.getElementById("reset");
  let time;

  let timeRunning = false; //This let is needed to prevent the clock continuing indefinately if the start button is clicked multiple times

  dark.addEventListener("click", function () {
    document.body.style.backgroundColor="black";
  })

  light.addEventListener("click", function () {
    document.body.style.backgroundColor="white";
  })

  startButton.addEventListener("click", function() {
    if (!timeRunning){
      timeRunning = true;
      time = setInterval(startTimer, 10);
  }
})
  
    stopButton.addEventListener("click", function() {
      if (timeRunning){
      timeRunning = false;
      clearInterval(time);
    }
  }) //stops timer counting upwards
  

  resetButton.addEventListener("click", function() {
      clearInterval(time);
      timeRunning = false;
      minutes = "00";
      seconds = "00";
      milliseconds = "00";
      appendMinutes.innerHTML = minutes;
      appendSeconds.innerHTML = seconds;
      appendMilliseconds.innerHTML = milliseconds;
  }) //Clears the timer
  
    

  function startTimer () {
    milliseconds++; 
    
    if (milliseconds > 9){
      appendMilliseconds.innerHTML = milliseconds;
    }

    if(milliseconds <= 9){
      appendMilliseconds.innerHTML = "0" + milliseconds;
    } //stops the slight stuttering when it hits a second. Else if statements can't be used.
    
    if (milliseconds > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      milliseconds = 0;
      appendMilliseconds.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    } //seconds does not have the same stutter problem as milliseconds so the <= 9 statement is not needed

    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
  }
}