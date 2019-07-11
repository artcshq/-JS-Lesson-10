window.addEventListener('DOMContentLoaded', function(){

         'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a;i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }   

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if (target == tab[i]) {
                    hideTabContent(0);
                     showTabContent(i);
                    break;
                }
            }
        }

    }); 

  

    // Timer

    let deadline = '2030-06-28';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
        
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds            
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
            

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if(t.hours <10){
                hours.textContent = `0${t.hours}`;
            }
            if(t.minutes <10){
                minutes.textContent = `0${t.minutes}`;
            }
            if(t.seconds <10){
                seconds.textContent = `0${t.seconds}`;
            }
            

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    function addZero(n){
       return (parseInt(n, 10) <10 ? '0' : '') + n;
    }

    setClock('timer', deadline);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        podrobnee = document.querySelectorAll(".description-btn");

        more.addEventListener('click', function(){
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
        
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    for(let i = 0;i < podrobnee.length;i++){
        podrobnee[i].addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
        });
    }

    //form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо, cкоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector("#form"),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();

        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length;i++){
            input[i].value = '';
        }
    });

    console.log(54);

    // let contactForm = document.querySelector("#form"),
    //     contactFormInput = contactForm.getElementsByTagName('input'),
    //     contactStatusMessage = document.createElement('div');

    //     contactStatusMessage.classList.add('status');

    //     contactForm.addEventListener('submit', function(event){
    //     event.preventDefault();
    //     contactForm.appendChild(contactStatusMessage);
    //     });

    // let request2 = new XMLHttpRequest();

    //     request2.open('POST', 'server.php');
    //     request2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    //  let contactFormData = new FormData(contactForm);

    //     let obj2 = {};
    //     contactFormData.forEach(function(value, key) {
    //         obj2[key] = value;
    //     });

    // let json2 = JSON.stringify(obj2);

    // request2.send(json2);

    //     request2.addEventListener('readystatechange', function() {
    //         if (request2.readyState < 4) {
    //             contactStatusMessage.innerHTML = message.loading;
    //         } else if(request2.readyState === 4 && request2.status == 200) {
    //             contactStatusMessage.innerHTML = message.success;
    //         } else {
    //             contactStatusMessage.innerHTML = message.failure;
    //         }
    //     });

    //     for (let b = 0; b < contactFormInput.length;b++){
    //         contactFormInput[b].value = '';
    //     }
    
       
});


localStorage.setItem('name', '1');
