import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import '../styles/Header.css'

import {ReactComponent as LogoDesktop} from '../assets/logo-desktop.svg'
import {ReactComponent as LogoDesktopDark} from '../assets/logo-desktop-dark.svg'
import {ReactComponent as Add} from '../assets/add.svg'
import {ReactComponent as More} from '../assets/more.svg'
import {ReactComponent as Down} from '../assets/down.svg'

const Header = () => {
    const dispatch = useDispatch()
    const board = useSelector((state)=>state.board)
    const ui = useSelector((state)=>state.ui)

    return (
    <header className='header'>
        <a href="/">{ui.theme === "dark" ? <LogoDesktop /> : <LogoDesktopDark/>}</a>
        <div className='header_right'>
            <h1 className='board_title'>{board.data[board.selected].title}</h1>
            <button className='mobile_board_selector'>Roadmap<Down/></button>
            <div className='header_right_right'>
                <button className='add_new_task'><Add style={{width:"1.1rem", height:"1.1rem"}}/><span className='add_new_task_text'>Add New Task</span></button>
                <button className='more'><More style={{transform:"scale(1.4)", fill:"var(--color-gray)"}}/></button>
            </div>
        </div>
    </header>
  )
}

export default Header