import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import Nav from '../Components/Nav'
import Form from '../Components/Form'
import Content from '../Components/Content'
import DataContext from '../Context/Context'
import {db} from '../JS Conect/Conection'

export default function Badge(){
    
    //Se trabaja con el Context
    const data = useContext(DataContext)

    const [form, setForm] = useState({
        id: '',
        material: '',
        cantidad: 0,
        medida: '',
        desc: '',
        estado: '',
        fecha: ''
    })

    const handleChange = ({target}) => {
        const {name, value} = target
        setForm({
            ...form, [name]: value
        })
    }

    const handleSend = e => {
        e.preventDefault()
        const newData = {
            id: data.info.length + 1,
            material: form.material,
            cantidad: form.cantidad,
            medida: form.medida,
            desc: form.desc,
            estado: form.estado,
            fecha: form.fecha
        }
        data.setInfo([
            ...data.info, newData
        ])
        form.material = ''
        form.cantidad = 0
        form.medida = ''
        form.desc = ''
        form.estado = ''
        form.fecha = ''
        console.log('Se guarda la info')
        data.add(data.info)
    }

    // const add = async dat => {
    //     await db.collection('products').doc().set(Object.assign({}, dat))
    //     console.log('enviado')
    // }

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
                    <Content state={form} handleSend={handleSend}/>
                </div>
            </div>
        </>
    )
}