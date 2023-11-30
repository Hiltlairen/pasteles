import React from 'react'
import './stylesvistas/Welcome.css'
import NavegInf from '../componentes/organismos/barraNavegacion'
import Ubicaciones from '../componentes/organismos/ubicaciones'
import Menu from '../componentes/organismos/menu'
import Logo from '../componentes/moleculas/logo'
import Botonees from '../componentes/atomos/botonees'
import Sucursales from '../componentes/organismos/sucursales'
function VistaWelcome() {
  return (
    <div className='body'>
      <Sucursales />

      
    </div>

  )
}

export default VistaWelcome
