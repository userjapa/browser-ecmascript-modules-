let app

function getCurrentTime () {
  const now = new Date()
  time = {
    year: now.getFullYear(),
    month: now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1,
    day: now.getDate() < 10 ? `0${now.getDate()}` : now.getDate(),
    hour: now.getHours() < 10 ? `0${now.getHours()}` : now.getHours(),
    minute: now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes(),
    second: now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()
  }
  return time
}

const counter = {
  interval: null,
  start (callback) {
    if (this.interval) this.stop(this.interval)
    console.log('start')
    this.interval = setInterval(() => {
      const now = new Date()
      time = {
        year: now.getFullYear(),
        month: now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1,
        day: now.getDate() < 10 ? `0${now.getDate()}` : now.getDate(),
        hour: now.getHours() < 10 ? `0${now.getHours()}` : now.getHours(),
        minute: now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes(),
        second: now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds()
      }
      callback(time)
    }, 1000)
  },
  stop () {
    console.log('stop');
    clearInterval(this.interval)
  }
}

window.onload = () => {
  app = document.querySelector('#app')
  const times = app.querySelectorAll('time'),
        buttons = app.querySelectorAll('button'),
        now = getCurrentTime()
  times[0].setAttribute('datetime', `${now.year}-${now.month}-${now.day}  ${now.hour}:${now.minute}:${now.second}`)
  times[0].textContent = `${now.day}/${now.month}/${now.year}  ${now.hour}:${now.minute}:${now.second}`
  buttons[0].onclick = () => {
    counter.start(t => {
      times[1].setAttribute('datetime', `${t.year}-${t.month}-${t.day}  ${t.hour}:${t.minute}:${t.second}`)
      times[1].textContent = `${t.day}/${t.month}/${t.year}  ${t.hour}:${t.minute}:${t.second}`
    })
  }
  buttons[1].onclick = () => {
    counter.stop()
  }
}
