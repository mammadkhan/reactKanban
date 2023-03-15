import React from 'react'
import '../styles/Column.css'

import Task from '../components/Task'

const Column = ({column}) => {
  return (
    <div className='column_container'>
        <h2 className='column_title'><span className='title_dot' style={{backgroundColor:column[1].color}}></span>{column[0]} &#40; {column[1].cards.length} &#41;</h2>
        <div className={column[1].cards.length > 0 ? 'column' : 'empty_column'}>
            {column[1].cards.map((task,index)=>(
                <Task task={task}/>
                // <div key={index}>
                //     <h3>{task.title}</h3>
                //     <p>{task.subtasks.filter(task=>task.done).length} of {task.subtasks.length} subtasks</p>
                // </div>
            ))}
        </div>
    </div>
  )
}

export default Column