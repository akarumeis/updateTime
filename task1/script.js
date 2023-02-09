function updateTime() {
    let getHtmlHours = document.querySelector('.hours');
    let getHtmlMinutes = document.querySelector('.minutes');
    let getHtmlSeconds = document.querySelector('.seconds');

    const clock = new Date();

    getHtmlHours.innerHTML = clock.getHours();
    getHtmlMinutes.innerHTML = clock.getMinutes();
    getHtmlSeconds.innerHTML = clock.getSeconds();

}
setInterval(updateTime, 1000)