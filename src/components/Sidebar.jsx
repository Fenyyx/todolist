import React from 'react' // Importamos react para que funcione
import { Link } from 'react-router-dom'//Importamos el router para que modifique la url

const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar
