import React, { useEffect, useState } from 'react'

import axios from 'axios'

const App = () => {

  const [todos, setTodos] = useState([])

  const fetchTodos =  () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        console.log(response.data)
        setTodos(response.data)
      })
  }

  const deleteTodoById = (id) => {
    setTodos(state => state.filter(i => i.id !== id))
  }

  const removeTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(() => deleteTodoById(id))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <React.Fragment>
      <h1 style={containerStyles}>Todos</h1>
     <div style={containerStyles}>
     {todos ? todos.map((item => (
       <React.Fragment>
        <div>{item.title}</div>
        <button onClick={() => removeTodo(item.id)}>Delete</button>
       </React.Fragment>
      ))) : 'Loading'}
     </div>
    </React.Fragment>
  )
}


export default App;

const containerStyles = {
  textAlign: 'center'
}