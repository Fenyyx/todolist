import React, { useState } from 'react' // Importamos react para que funcione

const CreateItemForm = ({ setItems }) => { 
  const [text, setText] = useState('')  //Manejamos el texto que empieza vacío

  const handleSubmit = (e) => { // Cuando le damos a añadir se actualiza
    e.preventDefault() //evitamos que recargue la página
    setItems(prevItems => [
      ...prevItems,
      { id: Date.now(), text, completed: false } //generamos un identificador para la tarea, con el texto escrito por el usuario y decimos que no está completa
    ]) //Añade la tarea nueva a las anteriores
    setText('') // Actualizamos el botón de añadir para que quede vacío
  }

  return (
    <form onSubmit={handleSubmit}> {/* Se ejecuta al enviar el formmulario */}
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}  // Cuando el usuario escribe modifica el texto
        placeholder="Nueva tarea" 
      />
      <button type="submit">Añadir</button> 
    </form>
  )
}

export default CreateItemForm
