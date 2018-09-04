import StateMatchine from 'javascript-state-machine'

export const states = {
  init: '未分配',
  dispatched: '已分配',
  developing: '开发中',
  testing: '测试中',
  done: '通过测试',
  cancle: '已关闭',
}


const transitions = [
  { name: '分配研发人员', from: states.init, to: states.developing },
  { name: '提交测试', from: states.developing, to: states.testing },
  { name: '通过测试', from: states.testing, to: states.done },
  { name: '未通过测试', from: states.testing, to: states.init },
  {
    name: '关闭',
    from: [
      states.init,
      states.dispatched,
      states.developing,
      states.testing,
    ],
    to: states.cancle,
  },
  {
    name: '重置',
    from: [
      states.dispatched,
      states.developing,
      states.testing,
      states.done,
      states.cancle,
    ],
    to: states.init,
  },
]

export default (init = states.init) => new StateMatchine({
  init,
  transitions,
})