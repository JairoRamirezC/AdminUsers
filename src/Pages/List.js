import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import Nav from '../Components/Nav'
import Context from '../Context/Context'

export default function List(){
    // const [info, setInfo] = useState({})
    const data = useContext(Context)
    // setInfo({
    //     ...info, data
    // })

    console.log(data)
    return(
        <div>
            <Nav/>
            <Link to='/Badge'>Go Back</Link>
            <h1>List Page</h1>
            <div>
            <h1>{data.material}</h1>
            <h1>Apellido</h1>
            <p>Descipcion</p>
            <p>@Twitter</p>
        </div>
        </div>
    )
}