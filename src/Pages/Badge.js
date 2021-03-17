import React from 'react'
import {Link} from 'react-router-dom'
import Nav from '../Components/Nav'
import Form from '../Components/Form'
import Content from '../Components/Content'

export default function Badge(){
    return(
        <>
            <Nav/>
            <div className='link'>
                <Link to='/Badge/list' className='btn_list'>Go to Badge</Link>
            </div>
            <div className='badge__section'>
                <div className='content-left'>
                    <h1>Pagina Badge</h1>
                    <Form/>
                </div>
                <div className='content-right'>
                    <Content/>
                </div>
            </div>
        </>
    )
}