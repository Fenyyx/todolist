import React from 'react'// Importamos react para que funcione

const ItemList = ({ items, setItems }) => {
  const handleDelete = (id) => { // Manejamos el botón de Eliminar
    setItems(items.filter(item => item.id !== id)) // Uso filter para crear la nueva lista sin el objeto eliminado
  }

  return (
    <ul>
      {items.map(item => ( //listamos los objetos
        <li key={item.id}>
          {item.text}
          <button onClick={() => handleDelete(item.id)}>Eliminar</button> {/* Botón que elimina el objeto con el id que creamos en CreateItemForm */}
        </li>
      ))}
    </ul>
  )
}

export default ItemList
