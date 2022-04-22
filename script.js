



let myName = prompt("İsminizi Giriniz")
let putName = document.querySelector("#myName")
putName.innerHTML = `${myName}`

function showTime () {
    const date = new Date()
    let h = date.getHours();
    let m = date.getMinutes()
    let s = date.getSeconds()
    const session = "am";
    
    if ( h == 0) {
        h = 12
    }

    if ( h < 12) {
        h = h - 12 ;
        session = "pm"
    }
    h = (h < 10) ? "0" + h: h;
    m = (m < 10) ? "0" + m: m;
    s = (s < 10) ? "0" + s: s;
    
    
    const time = h + ":" + m + ":" + s
    document.querySelector("#myClock").innerHTML= time;
    document.querySelector("#myClock").textContent= time;

    setTimeout(showTime, 1000);
}   
    showTime();