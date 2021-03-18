import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Nav from '../Components/Nav'
import Form from '../Components/Form'
import Content from '../Components/Content'

export default function Badge(){
    const [form, setForm] = useState({
        id: '',
        material: '',
        cantidad: 0,
        medida: '',
        desc: '',
        estado: '',
        fecha: ''
    })

    const handleChange = (event, id)=> {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
    }

    return(
        <>
            <Nav/>
            <div className='link'>
                <Link to='/Badge/list' className='btn_list'>Go to Badge</Link>
            </div>
            <div className='badge__section'>
                <div className='content-left'>
                    <h1>Pagina Badge</h1>
                    <Form handleChange={handleChange} val={form}/>
                </div>
                <div className='content-right'>
                    <Content state={form}/>
                </div>
            </div>
        </>
    )
}