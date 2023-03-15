import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/SideMenu.css'

const SideMenu = () => {
  const board = useSelector((state)=>state.board)


  return (
    <aside className='side_menu'>
      <h3>ALL BOARDS	&#40; {Object.entries(board).length - 1} &#41;</h3>
      <ul>
        {Object.keys(board).map((title)=>(
          <li>{title}</li>
        ))}
      </ul>
    </aside>
  )
}

export default SideMenu