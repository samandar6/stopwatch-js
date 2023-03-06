let hour = document.querySelector('.stopwatch-block-timeBox-hour')
let minute = document.querySelector('.stopwatch-block-timeBox-minute')
let second = document.querySelector('.stopwatch-block-timeBox-secound')
let start  = document.querySelector('.stopwatch-block-btnBox-start')
let pauza = document.querySelector('.stopwatch-block-btnBox-stop')
let reset = document.querySelector('.stopwatch-block-btnBox-reset')

start.addEventListener('click', stopwatch)
pauza.addEventListener('click', pause)
reset.addEventListener('click', toZero)

function stopwatch() {
    second.innerHTML++
    
    if (second.innerHTML == 60) {
        second.innerHTML = 0
        minute.innerHTML++
    } else if (minute.innerHTML == 60) {
        minute.innerHTML = 0
        hour.innerHTML++
    }
    
    pauseTime = setTimeout(() => {
        stopwatch()
    }, 1000);   
}

function pause () {
    clearTimeout(pauseTime)
    pauseTime = null
}

function toZero() {
    second.innerHTML = '00'
    minute.innerHTML = '00'
    hour.innerHTML = '00'

    clearInterval(pauseTime)
}







