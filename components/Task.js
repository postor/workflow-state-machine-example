import { Component } from 'react'

export default class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.loadStateFromFSM()
  }

  loadStateFromFSM() {
    console.log('loadStateFromFSM');
    const { fsm } = this.props
    console.log(fsm, this.props);
    if (!fsm) {
      console.log(fsm, this.props);
      return
    }
    this.setState({
      state: fsm.state,
      candos: fsm.transitions(),
    })
  }

  transition(t) {
    const { fsm } = this.props
    fsm[t]()
    this.loadStateFromFSM()
  }

  render() {
    const { state, candos = [] } = this.state
    return (<div>
      <span>当前状态：{state}</span>
      {candos.map((cando) => {
        return (<a key={cando} onClick={() => this.transition(cando)} style={{
          margin: '0 5px',
          color: 'blue',
        }}>{cando}</a>)
      })}
    </div>)
  }
}