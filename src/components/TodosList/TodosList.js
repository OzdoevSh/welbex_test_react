import './TodosList.css'
import { useEffect, useState } from "react"
import { TextField } from '@material-ui/core'

function TodosList(props) {
  const {
    todos,
    getTodos,
    deleteTodo,
    editTodo
  } = props

  const [deleted, setDeleted] = useState(false)

  const [editing, setEditing] = useState(false)

  const [editableiD, setEditableId] = useState();
  const [editableTitle, setEditableTitle] = useState();


  function handleEditChange(){
    setEditing(!editing)
  }

  async function handleSaveEdited(){
    setEditing(false)
  }



  if(editing){
  return (
    <table className="todosTable">
      <thead>
        <tr>
          <th className="idCol">#</th>
          <th className="titleCol">Title</th>
          <th className="completedCol">Completed</th>
          <th className="actionsCol">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td><TextField defaultValue={todo.title} value={editableTitle} id={todo.id} fullWidth
                onChange={(e) => {
                  setEditableTitle(e.target.value)
                  setEditableId(e.target.id)
                }} 
              /></td>
              <td><input type="checkbox" defaultChecked={todo.completed}/></td>
              <td>
                <button className="editButton" 
                  onClick={async()=>{
                    ///имитация редактирования
                    setEditing(false)
                    await editTodo(editableiD, editableTitle)
                    alert("Отредактировано")
                  }}>
                    Сохранить
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>

  )} else return(
    <table className="todosTable">
    <thead>
      <tr>
        <th className="idCol">#</th>
        <th className="titleCol">Title</th>
        <th className="completedCol">Completed</th>
        <th className="actionsCol">Actions</th>
      </tr>
    </thead>
    <tbody>
      {todos?.map((todo) => {
        return (
          <tr>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>< input type="checkbox" defaultChecked={todo.completed}/></td>
            <td>
              <button className="editButton" onClick={handleEditChange}>Редактировать</button>
              <button className="deleteButton" onClick={async () => {
                await deleteTodo(todo.id)
                setDeleted(true)
              }}>Удалить</button>
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
  )
}

export default TodosList