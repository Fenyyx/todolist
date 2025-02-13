import React from 'react'// Importamos react para que funcione
import { useParams } from 'react-router-dom' //importamos el router para que modifique la url

const ItemDetails = ({ items }) => {
  const { id } = useParams() //usamos el id para modificar la url
  const item = items.find(i => i.id === parseInt(id)) //Usamos parse para convertir el id en número y se le asigna un objeto

  if (!item) {
    return <p>No encontrado</p>
  }

  return (
    <div>
      <h2>{item.text}</h2>
      <p>{item.completed ? 'Completada' : 'Pendiente'}</p>
    </div>
  )
}

export default ItemDetails
