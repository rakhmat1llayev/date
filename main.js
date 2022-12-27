const startDate = document.getElementById('start-date')
const endDate = document.getElementById('end-date')
const button = document.getElementById('button')
const output = document.getElementById('output')
const errorMsgStart = document.getElementById('errormsg-start')
const errorMsgEnd = document.getElementById('errormsg-end')

button.addEventListener('click', getDay)

function getDay(e) {
    errorMsgStart.innerText = !startDate.value ? 'Select start date' : ''
    if (!endDate.value) {
        errorMsgEnd.innerText = 'Select end date'
    } else {
        errorMsgEnd.innerText = ''
    }
    if (!startDate.value || !endDate.value) {
        return
    }
    if (startDate.value && endDate.value) {
        const start = new Date(startDate.value)
        const end = new Date(endDate.value)

        const timesDiff = end - start

        console.log(timesDiff)
        const days = timesDiff / (1000 * 60 * 60 * 24)

        output.innerHTML = `The difference between teo days is ${days} ${days > 1 ? 'days' : 'day'}`
    }
}

// clock features

const hoursEl = document.getElementById('hour')
const minutesEl = document.getElementById('minute')
const secondEl = document.getElementById('second')

function displayTime() {
    const date = new Date()


    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    hoursEl.innerText = hour < 10 ? '0' + hour : hour
    minutesEl.innerText = minute < 10 ? '0' + minute : minute
    secondEl.innerText = second < 10 ? '0' + second : second

}

setInterval(displayTime, 1000)




