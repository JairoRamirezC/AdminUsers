import React from 'react'
import logo from '../logo192.png'
import '../Styles/Components/nav.scss'

export default function Nav(){
    return(
        <div className='body'>
            <a>
                <img src={logo} alt='Logo'/>
            </a>
        </div>
    )
}