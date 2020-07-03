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

   countTimer('20 july 20');   
   
   
    // меню

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
        let menu = document.querySelector('menu'),
             body =  document.querySelector('body'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');
                     
            const handlerMenu = () => {               
                menu.classList.toggle('active-menu');                 
            }


            body.addEventListener('click', (event) => {                
                let target = event.target;  
                if(target.closest('.menu')) {
                    handlerMenu(); 
                } else if (target.closest('.active-menu') && target.tagName !== 'MENU' ) {
                    handlerMenu(); 
                } else if (target.tagName !== 'MENU'){
                    menu.classList.remove('active-menu')
                };        
            });


            

   
  
    };

    toggleMenu();



// popup
let popupContent = document.querySelector('.popup-content');
    const togglePopUp = () => {
        const popup = document.querySelector('.popup');
        const popupBtn = document.querySelectorAll('.popup-btn');
           
            
        
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                animationPopup();
               
                
            });
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;
            if(target.classList.contains('popup-close')) {
                popup.style.display = 'none';
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    popup.style.display = 'none';
                }
            };
                
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


    // табы 
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        
        const toggleTabContent = (index) => {
            
           for (let i=0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tabContent[i].classList.add('d-none');
                    tab[i].classList.remove('active');
                }
           } 
        };
        
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.service-header-tab');

                if(target) {

                    tab.forEach((item, i) => {                
                         if (item === target) {
                             toggleTabContent(i);
                        }
                });
               
            }
            
        
        });

    };
    tabs();



});

