import React, {useState} from 'react'
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'
import {v4 as uuidv4} from 'uuid'

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
const [editUser, setEditUser] = useState(false)

const [currentUser, setCurrentUser]= useState({
  id: null, name: '', username: '', 
})

const editRow = (user) => {
  setEditUser(true)
  setCurrentUser({
    id: user.id, name: user.name, username: user.username
  })
}

const updateUser = (id, updateUser) => {
  setEditUser(false)
  setUsers(users.map(user => (user.id === id ? updateUser : user)))
}

  return (
    <div className="Container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editUser ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm 
                currentUser={currentUser}
                updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
          users={users} 
          deleteUser={deleteUser}
          editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}


export default App;
