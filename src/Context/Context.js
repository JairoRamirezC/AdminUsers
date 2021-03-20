import React, {useState} from 'react'
// import { useState } from 'react/cjs/react.development'

const Datos = React.createContext({})

export function DatosContext ({children}){
    const [info, setInfo] = useState([])

    return <Datos.Provider value={{info, setInfo}}>
        {children}
    </Datos.Provider>
}

export default Datos