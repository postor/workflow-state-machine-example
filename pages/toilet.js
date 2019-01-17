import layout from '../components/layout'
import Toilet from '../components/Toilet'
import FSM,{states} from '../components/toilet-state-matchine'

export default layout(() => (<div>
  <h1>感应马桶</h1>
  <Toilet fsm={FSM(states.init)} />
</div>))