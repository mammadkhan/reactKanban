import React from 'react'

import "../styles/Task.css"

const Task = ({task}) => {
  return (
    <div className='task'>
      <h3 className='task_title'>{task.title}</h3>
      <p className='subtask_status'>{task.subtasks.filter(task=>task.done).length} of {task.subtasks.length} subtasks</p>
    </div>
  )
}

export default Task