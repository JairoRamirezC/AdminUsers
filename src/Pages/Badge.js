import React from 'react'
import {Link} from 'react-router-dom'
import Nav from '../Components/Nav'

export default function Badge(){
    return(
        <div>
            <Nav/>
            <Link to='/Badge/list'>Go to Badge</Link>
            <h1>Pagina Badge</h1>
        </div>
    )
}