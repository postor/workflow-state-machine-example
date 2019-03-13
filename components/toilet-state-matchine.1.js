import StateMatchine from 'javascript-state-machine'

export const states = {
  open: 'open',
  closed: 'closed',
}


const transitions = [
  { name: '进入', from: states.closed, to: states.open },
  {
    name: '移出', from: states.open,to:states.closed 
  }
]


export default (init = states.closed) => new StateMatchine({
  init,
  transitions,
})