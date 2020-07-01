'use strict';

const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];


const helloMessage = {
    0: 'Доброе утро.',
    1: 'Добрый день',
    2: 'Добрый вечер',
    3: 'Доброй ночи'
};

const dayDict = {
    0: [' дней'],
    1: [' день'],
    2: [' дня'],
    3: [' дня'],
    4: [' дня'],
    6: [' дней'],
    5: [' дней'],
    7: [' дней'],
    8: [' дней'],
    9: [' дней'],
    11: [' дней'],
    12: [' дней'],
    13: [' дней'],
    14: [' дней'], 
    15: [' дней'], 
    16: [' дней'], 
    17: [' дней'], 
    18: [' дней'], 
    19: [' дней'],    
}


function checkTime(i) {
    if (i<10) {
        i="0" + i;
    }
    return i;
}

function timeMessage() {
    let now = new Date();
    function getTime() {
        let hours = checkTime(now.getHours());
        let timeText;
        if(hours > 12) {
            hours = hours % 12;
            timeText = checkTime(hours) + ':' + checkTime(now.getMinutes()) + ':' + checkTime(now.getSeconds()) + ' PM';
        } else {
            timeText = checkTime(hours) + ':' + checkTime(now.getMinutes()) + ':' + checkTime(now.getSeconds()) + 'AM';
        }
        
        return timeText
    }
    
    function getTimesOfDay () {
        let x = now.getHours();
        let dayTime = (12 > x && x >= 6) ? 0 : (18 > x && x >= 12) ? 1 : (24 > x && x >= 18) ? 2 : 3 ;
    
        return dayTime;
    }
    
    function getTimeRemaining(deadline){ 
        let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        days = Math.floor(timeRemaining / 60 / 60 / 24);
    
        let dayText;
    
        if (days < 15) {
            dayText = dayDict[days]
        } else if (days < 100){
            dayText = dayDict[days % 10]
        } else {
            dayText = dayDict[days % 100 % 10]
        }
        
        return '' + days + '' + dayText;
        };
    
        

    document.body.innerHTML =  `<br> <span> ${helloMessage[getTimesOfDay()]} </span> <br> <span> Сегодня: ${week[now.getDay()]} Текущее время: ${getTime()} </span> <br> <span> </span> До нового 2021 года осталось: ${getTimeRemaining('01 january 2021')}`;
    
     
};

let messageStart = setInterval(timeMessage, 1000);






    

