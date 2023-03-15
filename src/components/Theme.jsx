import React from 'react'
import { useDispatch } from 'react-redux'
import {setTheme} from '../state/ui'

import '../styles/Theme.css'

import {ReactComponent as Moon} from '../assets/moon.svg'
import {ReactComponent as Sun} from '../assets/sun.svg'

const Theme = () => {
    const dispatch = useDispatch()
  return (
    <div className='theme'>
        <Moon />
        <input type="checkbox" className='change_theme' onClick={()=>dispatch(setTheme())}/>
        <Sun />
    </div>
  )
}

export default Theme