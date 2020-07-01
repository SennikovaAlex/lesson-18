window.addEventListener('DOMContentLoaded', () => {
    
   'use strict';

    //timer
    
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining(){ 
        let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
         hours = Math.floor((timeRemaining / 60 / 60));
        return {
            timeRemaining, hours,minutes,seconds
        };
        };

       
           
            
      function updateClock() { 
            let timer = getTimeRemaining();
            
            function checkTime(i) {
                if (i<10) {
                i="0" + i;
            } 
            return i;
        };
            
        

            timerHours.textContent = checkTime(timer.hours);
            timerMinutes.textContent = checkTime(timer.minutes);
            timerSeconds.textContent = checkTime(timer.seconds);
           
        if(timer.timeRemaining <= 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
           clearInterval(end);
        } 
            
        }    
        
      
       let end = setInterval(updateClock, 1000);
        

    }

   countTimer('02 july 20'); 
   




});
