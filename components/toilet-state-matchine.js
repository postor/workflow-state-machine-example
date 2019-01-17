import StateMatchine from 'javascript-state-machine'

export const states = {
  init: '初始（关闭）',
  using: '使用中（关闭）',
  timing: '倒计时中（开启）',
}

const TIME_LIMIT = 5000


const transitions = [
  { name: '有信号', from: states.init, to: states.using },
  {
    name: '无信号', from: states.using, to: function () {
      this.last = new Date() * 1
      return states.timing
    }
  },
  {
    name: '无信号', from: states.timing, to: function () {
      if (this.last + TIME_LIMIT < new Date() * 1) {
        return states.init
      }
      return states.timing
    }
  },
]


export default (init = states.init) => new StateMatchine({
  init,
  transitions,
  data: {
    last: 0
  }
})