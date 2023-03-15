import React from 'react'
import { Draggable } from '@hello-pangea/dnd'

import "../styles/Task.css"

const Task = ({task,index}) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided)=>(
        <div className='task' {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
          <h3 className='task_title'>{task.title}</h3>
          <p className='subtask_status'>{task.subtasks.filter(task=>task.done).length} of {task.subtasks.length} subtasks</p>
        </div>
      )}
    </Draggable>
  )
}

export default Task