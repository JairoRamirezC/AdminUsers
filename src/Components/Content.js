import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Content(){
    return(
        <div className='content__section'>
            <h1>Nombre</h1>
            <h1>Apellido</h1>
            <div className='content__section-desc'>
                <p>Descipcion</p>
                <FontAwesomeIcon icon={faTwitter} className='icon-twitter'/>
                <span className='twitter'>@Twitter</span>
                <FontAwesomeIcon icon={faGithub} className='icon-github'/>
                <span className='github'>GitHub</span>
            </div>
            <button>Guardar</button>
        </div>
    )
}