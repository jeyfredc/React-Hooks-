import React, {useState} from 'react'
import UserTable from './components/UserTable'
import {v4 as uuidv4} from 'uuid'
import AddUserForm from './components/AddUserForm'

function App() {

  const usersData = [
    {id: uuidv4(), name: 'Juan', username: 'Juanc10' },
    {id: uuidv4(), name: 'Camilo', username: 'Camilo20' },
    {id: uuidv4(), name: 'Michael', username: 'Michael5' },
  ]

  //State

  const [users, setUsers] = useState(usersData);

  // Agregar Usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  // Eliminar Usuarios
  const deleteUser = (id) => {

    const arrayFiltrado = users.filter(user => user.id !== id)

    setUsers(arrayFiltrado)
  }

  // Editar Usuarios 
  const editUser = () => {

  }

  return (
    <div className="Container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}


export default App;
