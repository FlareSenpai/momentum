// Time
var time = document.querySelector('.time');
const date = new Date();

time.innerHTML = date.getHours() + ':' + date.getMinutes();

// Background
const bgTime = date.getHours();

function responsiveBody() {
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
}

if(bgTime < 7 || bgTime >= 19) {
    document.body.style.backgroundImage = 'url(img/malam.jpg)';
    responsiveBody();
}else if(bgTime <= 15) {
    document.body.style.backgroundImage = 'url(img/siang.jpg)';
    responsiveBody();
}else if(bgTime >= 16) {
    document.body.style.backgroundImage = 'url(img/sore.jpg)';
    responsiveBody();
}