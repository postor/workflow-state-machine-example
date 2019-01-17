import initTask from '../components/task-state-matchine'
import Task from '../components/Task'
import layout from '../components/layout'

let tasks = [
  initTask(),
  initTask(),
  initTask(),
]

export default layout(() => (<div>
  <h1>任务列表</h1>
  <ul>
  {tasks.map((task, i) => {
    return (<li key={i}>
      <Task fsm={task} />
    </li>)
  })}
</ul>
</div>))