import { useState } from 'react'

import '../styles/previewPasteles.css'
import { pastelesDet } from '../../assets/pastelesDet';

const Contenedor =()=> {

  return (
    <> 
    {pastelesDet.map((pastelesDet, index) => (
    <div className='container'>
        <div className="image-container">
            <img src={pastelesDet.fotoP}/>
        </div>
        <div key={index} className="text-container">
            <h2>{pastelesDet.name}</h2>
            <p>{pastelesDet.precio}</p>
        </div>     
        
    </div>
    ))}

    </>
  )
}

export default Contenedor;