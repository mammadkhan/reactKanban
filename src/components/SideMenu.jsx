import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { changeSelected } from '../state/board'
import '../styles/SideMenu.css'

import {ReactComponent as Add} from '../assets/add.svg'
import {ReactComponent as BoardIcon} from '../assets/board.svg'

const SideMenu = () => {
  const dispatch = useDispatch()
  const board = useSelector((state)=>state.board)


  return (
    <aside className='side_menu'>
      <h3 className='side_menu_title'>ALL BOARDS	&#40; {Object.entries(board).length} &#41;</h3>
      <ul>
        {Object.keys(board).map((title,index)=>(
          <li key={index}>
            <button className={'side_menu_boards' + (title===board.selected ? ' board_selected' : "")} onClick={(e)=>dispatch(changeSelected(e.target.innerText))}>
              <BoardIcon />
              {title}
            </button>
          </li>
        ))}
        <li><button className='create_new_board'><BoardIcon style={{marginRight:"1rem"}}/><Add style={{fill:"var(--color-primary)"}} width="16px" height="16px"/> Create New Board</button></li>
      </ul>
    </aside>
  )
}

export default SideMenu