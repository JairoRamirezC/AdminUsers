import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faGithub } from "@fortawesome/free-brands-svg-icons"
// import { faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Content({state, handleSend}){

    return(
        <form className='content__section' onSubmit={handleSend}>
            <h1>{state.material}</h1>
            <h1>{state.medida}</h1>
            <div className='content__section-desc'>
                <p>{state.desc}</p>
                {/* <FontAwesomeIcon icon={faTwitter} className='icon-twitter'/> */}
                <span className='twitter'>{state.estado}</span>
                {/* <FontAwesomeIcon icon={faGithub} className='icon-github'/> */}
                <span className='github'>{state.fecha}</span>
            </div>
            <p className='github'>{state.cantidad}</p>
            <button type='submit'>Solicitar</button>
        </form>
    )
}