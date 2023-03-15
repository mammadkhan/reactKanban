import React from 'react'
import {useSelector} from 'react-redux'

const Board = () => {
    const board = useSelector((state)=>state.board)

  return (
    <main>
        {Object.entries(board[board.selected].columns).map(column=>(
            <div>
                <h2>{column[0]}</h2>
                <div>
                    {column[1].cards.map((task)=>(
                        <div>
                            <h3>{task.title}</h3>
                            <p>{task.getCompletedTasks()} of {task.subtasks.length} subtasks</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </main>
    )
}

export default Board