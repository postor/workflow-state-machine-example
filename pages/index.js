import initTask from '../components/task-state-matchine'
import Task from '../components/Task'

let tasks = [
  initTask(),
  initTask(),
  initTask(),
]

export default () => (<ul>
  {tasks.map((task, i) => {
    return (<li key={i}>
      <Task fsm={task} />
    </li>)
  })}
</ul>)