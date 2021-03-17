import React from 'react'

export default function Form(){
    return(
        <form className='section__form'>
            <label for='name'>Nombre:</label><br/>
            <input type='text'
                id='name' 
                placeholder='Ingrese su nombre' 
                autoComplete='off'/>
            <br/><br/>
            <label for='last-name'>Apellidos:</label><br/>
            <input type='text'
                id='last-name' 
                placeholder='Ingrese sus apellidos' 
                autoComplete='off'/>
            <br/><br/>
            <label for='description'>Descripcion:</label><br/>
            <input type='text'
                id='description' 
                placeholder='Ingrese la descripcion de su cargo' autoComplete='off'/>
            <br/><br/>
            <label for='twitter'>Cuenta Twitter:</label><br/>
            <input type='text'
                id='twitter' 
                placeholder='Cuenta de Twitter' 
                autoComplete='off'/>
        </form>
    )
}