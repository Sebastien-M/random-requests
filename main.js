document.querySelector("button").addEventListener("click", function () {
    request();
})

function request() {
    // console.log("%c aaa", 'background: #222; color: #bada55');
    let one = Math.floor((Math.random() * 255) + 0);
    let two = Math.floor((Math.random() * 255) + 0);
    let three = Math.floor((Math.random() * 255) + 0);
    let four = Math.floor((Math.random() * 255) + 0);

    // console.log(`Request to  http://${one}.${two}.${three}.${four}`);
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://${one}.${two}.${three}.${four}`, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log(`Response of  http://${one}.${two}.${three}.${four}`);
            } else if (xhr.status === 403) {
                console.log(`%c http://${one}.${two}.${three}.${four}`, 'background: #222; color: #bada55');
            } else if (xhr.status === 400) {
                console.log(`%c http://${one}.${two}.${three}.${four}`, 'background: #222; color: #bada55');
            }
        }
    }

    xhr.send();
    xhr.timeout = 400;
}