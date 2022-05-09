// Time
var time = document.querySelector('.time');

const date = new Date();

time.innerHTML = date.getHours() + ':' + date.getMinutes();

// Background and time
var good = document.querySelector('.good');

const bgTime = date.getHours();

function responsiveBody() {
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
}

if(bgTime < 7 || bgTime >= 19) {
    document.body.style.backgroundImage = 'url(img/malam.jpg)';
    good.innerHTML = 'Selamat malam';
    responsiveBody();
}else if(bgTime <= 15) {
    document.body.style.backgroundImage = 'url(img/siang.jpg)';
    if(bgTime <= 10) {
        good.innerHTML = 'Selamat pagi';
    } else if (bgTime > 10){
        good.innerHTML = 'Selamat siang';
    }
    responsiveBody();
}else if(bgTime >= 16) {
    document.body.style.backgroundImage = 'url(img/sore.jpg)';
    good.innerHTML = 'Selamat sore';
    responsiveBody();
}

// Hamburger Menu
var burger = document.querySelector('.sidebar');

burger.addEventListener('click', function() {
    burger.classList.toggle('burger-animation');
});