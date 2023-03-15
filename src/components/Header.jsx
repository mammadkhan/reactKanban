import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import '../styles/Header.css'

import {ReactComponent as LogoDesktop} from '../assets/logo-desktop.svg'
import {ReactComponent as Add} from '../assets/add.svg'
import {ReactComponent as More} from '../assets/more.svg'
import {ReactComponent as Down} from '../assets/down.svg'

const Header = () => {
    const dispatch = useDispatch()
    const board = useSelector((state)=>state.board)

    return (
    <header className='header'>
        <a href="/"><LogoDesktop /></a>
        <div className='header_right'>
            <h1 className='board_title'>{board.selected}</h1>
            <button className='mobile_board_selector'>Roadmap<Down/></button>
            <div className='header_right_right'>
                <button className='add_new_task'><Add className="add_new_task_svg"/><span className='add_new_task_text'>Add New Task</span></button>
                <button className='more'><More className="more_svg" /></button>
            </div>
        </div>
    </header>
  )
}

export default Header