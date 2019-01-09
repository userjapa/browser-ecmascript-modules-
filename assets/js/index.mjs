import { getCurrentTime, Counter } from './time.mjs'

let app
const counter = new Counter()

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
