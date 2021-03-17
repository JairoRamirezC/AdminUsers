import React from 'react'
import logo from '../Media/react.png'

export default function Nav(){
    return(
        <div className='navBar'>
            <a href='#'>
                <img src={logo} alt='Logo' className='img_logo'/>
            </a>
            <div className='navBar__profile'>
                <h3>Nombre de usuario</h3>
                <img src='https://lh3.googleusercontent.com/ogw/ADGmqu8bLGDH-iNkzvEYQ6MIJGwU8pl0Ivzqin3cDgwx=s32-c-mo' alt='avatar_usuario' className='avatar'/>
            </div>
        </div>
    )
}