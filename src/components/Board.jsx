import React from 'react'
import {useSelector} from 'react-redux'

import '../styles/Board.css'
import Column from './Column'

import {ReactComponent as Add} from '../assets/add.svg'

const Board = () => {
    const board = useSelector((state)=>state.board)

  return (
    <main className='board'>
        {Object.entries(board[board.selected].columns).map((column)=>(
            <Column key={column.id} column={column} />
        ))}
        <button className='new_column'>
            <Add style={{width:"2.5rem", height:"2.5rem",fill:"var(--color-gray)"}}  />
            New Column            
        </button>
    </main>
    )
}

export default Board