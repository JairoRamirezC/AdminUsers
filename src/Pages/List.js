import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Nav from '../Components/Nav'
import Context from '../Context/Context'

export default function List(){
    const data = useContext(Context)
    useEffect(()=>{
        data.getDatos()
    }, [])
    
    return(
        <div>
            <Nav/>
            <Link to='/Badge'>Go Back</Link>
            <h1>List Page</h1>
                <div className='content'>
                    {/* <h1>{data.info.material}</h1> */}
                    <h3>estado</h3>
                    <p>Descipcion</p>
                    <p></p>
                </div>
        </div>
    )
}