let time = {}

export function getCurrentTime () {
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

export function Counter() {
  return {
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
}
