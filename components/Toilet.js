import { Component } from 'react'

const inputOptions = ['无信号', '有信号']
const inputMap = {
  '无信号': 0,
  '有信号': 1,
}
const outputMap = {
  '初始（关闭）': 0,
  '使用中（关闭）': 0,
  '倒计时中（开启）': 1,
}

export default class Toilet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      state: '',
      input: inputOptions[0],
      inputQueue: [],
      outputQueue: [],
    }
    this._toClean = []
  }

  componentDidMount() {
    this.loadStateFromFSM()
    const interval = setInterval(() => {
      const { input } = this.state
      const { inputQueue, outputQueue } = this.state
      const { fsm } = this.props

      if (fsm.can(input)) {
        fsm[input]()
      }

      this.setState({
        state: fsm.state,
        inputQueue: prepandQueueN(inputMap[input], inputQueue),
        outputQueue: prepandQueueN(outputMap[fsm.state], outputQueue),
      })

    }, 500)
    this._toClean.push(() => clearInterval(interval))
  }

  componentWillUnmount() {
    this._toClean.forEach(x => x())
  }

  loadStateFromFSM() {
    const { fsm } = this.props
    this.setState({
      state: fsm.state
    })
  }

  transition(t) {
    const { fsm } = this.props
    fsm[t]()
    this.loadStateFromFSM()
  }

  render() {
    const { state, input, inputQueue, outputQueue } = this.state
    return (<div>
      <label>输入（红外检测）</label>
      <select value={input} onChange={(e) => this.setState({ input: e.target.value })}>
        {inputOptions.map((x, i) => (<option key={i} value={x}>{x}</option>))}
      </select>
      <p>{inputQueue.join(',')}</p>
      <hr />
      <label>当前状态</label>
      <span>{state}</span>
      <hr />
      <label>输出（水阀控制）</label>
      <p>{outputQueue.join(',')}</p>
    </div>)
  }
}

function prepandQueueN(val, list) {
  const rtn = [val, ...list]
  rtn.length = 40
  return rtn
}