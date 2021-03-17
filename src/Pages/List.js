import React from 'react'
import {Link} from 'react-router-dom'
import Nav from '../Components/Nav'

export default function List(){
    return(
        <div>
            <Nav/>
            <Link to='/Badge'>Go Back</Link>
            <h1>List Page</h1>
            <div>
            <h1>Nombre</h1>
            <h1>Apellido</h1>
            <p>Descipcion</p>
            <p>@Twitter</p>
        </div>
        </div>
    )
}