import React, {useState, useEffect} from 'react'
import data from "../Sample/data.json";
import {db} from '../JS Conect/Conection'

const Datos = React.createContext({})

export function DatosContext ({children}){
    const [view, setView] = useState([])
    const [info, setInfo] = useState(data)
    
    const add = async dat => {
        await db.collection('products').doc().set(Object.assign({}, dat))
        console.log('enviado')
    }
    
    const getDatos = db.collection('products').onSnapshot(querySnapshot => {
        querySnapshot.forEach(result => {
            console.log(result.data())
            // const check = result.data()
            // setView({check})
        })
    })

    return <Datos.Provider value={{info, setInfo, add, getDatos}}>
        {children}
    </Datos.Provider>
}

export default Datos