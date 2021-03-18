import React from 'react'

export default function Form({handleChange , val}){
    
    return(
        <form className='section__form'>
            <label htmlFor='name'>Material:</label><br/>
            <input type='text'
                id='name' 
                name='material'
                placeholder='Ingrese el material' 
                autoComplete='off'
                onChange={handleChange}
                value={val.material}/>
            <br/><br/>
            <label htmlFor='last-name'>medida:</label><br/>
            <input type='text'
                id='last-name' 
                name='medida'
                placeholder='Ingrese la medida' 
                autoComplete='off'
                onChange={handleChange}
                value={val.medida}/>
            <br/><br/>
            <label htmlFor='description'>Descripcion:</label><br/>
            <input type='text'
                id='description' 
                name='desc'
                placeholder='Ingrese la descripcion' autoComplete='off'
                onChange={handleChange}
                value={val.desc}/>
            <br/><br/>
            <label htmlFor='cantidad'>Estado:</label><br/>
            <input type='text'
                id='cantidad' 
                name='estado'
                placeholder='Ingrese el Estado' 
                autoComplete='off'
                onChange={handleChange}
                value={val.estado}/>
            <br/><br/>
            <label htmlFor='fecha'>Fecha:</label><br/>
            <input type='date'
                id='fecha' 
                name='fecha'
                placeholder='Ingresa la Fecha' 
                autoComplete='off'
                onChange={handleChange}
                value={val.fecha}/>
            <label htmlFor='cantidad'>Cantidad:</label><br/>
            <input type='number'
                id='cantidad' 
                name='cantidad'
                placeholder='Ingresa la Cantidad' 
                autoComplete='off'
                onChange={handleChange}
                value={val.cantidad}/>
        </form>
    )
}