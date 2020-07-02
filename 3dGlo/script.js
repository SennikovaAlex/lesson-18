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
   
   
    // меню

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');
        
            const handlerMenu = () => {
                // if(!menu.style.transform || menu.style.transform === 'translate(-100%)') {
                //     menu.style.transform = 'translate(0)';
                // } else {
                //     menu.style.transform = 'translate(-100%)';
                // } 

                menu.classList.toggle('active-menu');
            }

        btnMenu.addEventListener('click', () => {
            handlerMenu();
        });
        closeBtn.addEventListener('click', () => {
            handlerMenu();
        });

        menuItems.forEach((elem) => 
            elem.addEventListener('click', handlerMenu));



    };

    toggleMenu();


// popup
let popupContent = document.querySelector('.popup-content');
    const togglePopUp = () => {
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');
            //let popupContent = document.querySelector('.popup-content');
        
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                
                // let animationAdd = setInterval(animationPopup, 10);
                animationPopup();
               
                
            });
        });

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };

    togglePopUp();

    let count = 1;
    let animationPopup = () => {
        let clientWidth = document.documentElement.clientWidth;    
        let goAnimation; 
           
        count += 1;
        
        popupContent.style.left = count + '%'; 

        if (count < 38 && clientWidth > 768){
            goAnimation = setTimeout(animationPopup, 15); 
        } else if (clientWidth < 768){
            popupContent.style.left = 23 + '%';
            } else {
            clearInterval(goAnimation);
            count = 1;
        }  
         
         

    };




});

