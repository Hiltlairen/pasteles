import { useState } from 'react'
import '../styles/previewPasteles.css'
import PrevisualPastel from '../atomos/previewPasteles';
import Contenedor from '../moleculas/contenedorPastelesPrev';

function Menu () {

  return (
    <>
    <div className="scroll-box">
        <Contenedor />
    </div>
    </>
  )
}

export default Menu;