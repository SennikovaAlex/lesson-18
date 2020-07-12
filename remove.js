  // if(!menu.style.transform || menu.style.transform === 'translate(-100%)') {
                //     menu.style.transform = 'translate(0)';
                // } else {
                //     menu.style.transform = 'translate(-100%)';
                // } 







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

        while (target !== tabHeader) {

            if(target.classList.contains('service-header-tab')) {

                tab.forEach((item, i) => {

                     if (item === target) {
                         
                         toggleTabContent(i);
                    }
            });
            return;
        }
        target = target.parentNode;
    }
    });
};
tabs();






const closeOfClickOutside = () => {
    const body =  document.querySelector('body');    
    body.addEventListener('click', (event) => {
        let target = event.target;
        target = target.closest('menu');    
        if(event.target !== target && !event.target.closest('.menu')) {
            menu.classList.remove('active-menu');
        };
    });








    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu');
        const menu = document.querySelector('menu'),
             body =  document.querySelector('body'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');
                     
            const handlerMenu = () => {
                
                menu.classList.toggle('active-menu');                 
            }


            body.addEventListener('click', (event) => {
                
                let target = event.target;
                
                if(target.classList.contains('.menu')) {
                    console.log(target);
                    handlerMenu(); 
                };
                // if (menu.classList.contains('active-menu')) {
                    
                //     if(target.classList.contains('close-btn')) {
                //         handlerMenu(); 
              
                //     } else if (target.tagName == 'A'){
                     
                //         handlerMenu(); 
                //     }                
                // }
            })





            menu.addEventListener('click', (event) => {
                
                let target = event.target;
                
                if(target.classList.contains('close-btn')) 
                {
                    handlerMenu(); 
              
                 } else if (target.tagName == 'A'){
                     
                    handlerMenu(); 
                 }                
            });
            
        btnMenu.addEventListener('click', () => {
            handlerMenu();
            if (menu.classList.contains('active-menu')) {
                // closeOfClickOutside();
            };        
            
        });
    };

    toggleMenu();

























    const btnMenu = document.querySelector('.menu');
    const menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');
          
        const handlerMenu = () => {
            
            menu.classList.toggle('active-menu'); 
               
        }

        menu.addEventListener('click', (event) => {
            console.log(1);
            let target = event.target;
            
            if(target.classList.contains('close-btn')) 
            {
                handlerMenu(); 
          
             } else if (target.tagName == 'A'){
                 
                handlerMenu(); 
             }  

           
            
            
        });
        
    btnMenu.addEventListener('click', () => {
        handlerMenu();
        if (menu.classList.contains('active-menu')) {
            // closeOfClickOutside();
        };
        
    
        
    });






   