import React, { useState } from 'react'// Importamos react para que funcione
import ItemList from '../components/ItemList' //Importamos la lista de objetos
import CreateItemForm from '../components/CreateItemForm' //Importamos el componente que crea objetos

const Home = () => {
  const [items, setItems] = useState([ //creamos una lista vacía para guardar las tareas que crearemos
  ])

  return (
    <div>
      <h2>Tareas</h2>
      <ItemList items={items} setItems={setItems} /> {/* Mostramos la lista con los objetos creados y permitimos que se creen y eliminen nuevas */}
      <CreateItemForm setItems={setItems} /> {/* Permite actualizar las tareas */}
    </div>
  )
}

export default Home
