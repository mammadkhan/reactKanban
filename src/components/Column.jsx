import React from 'react'
import { Droppable } from '@hello-pangea/dnd'

import '../styles/Column.css'

import Task from '../components/Task'

const Column = ({column}) => {
  return (
        <div className='column_container' >
            <h2 className='column_title'><span className='title_dot' style={{backgroundColor:column.color}}></span>{column.title} &#40; {column.cards.length} &#41;</h2>
            <Droppable droppableId={column.id}>
              {(provided)=>(
                <div className={column.cards.length > 0 ? 'column' : 'empty_column'} {...provided.droppableProps} ref={provided.innerRef}>
                  {column.cards.map((task,index)=>(
                      <Task key={index} task={task} index={index}/>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
        </div>
  )
}

export default Column