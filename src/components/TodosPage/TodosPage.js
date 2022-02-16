import './TodosPage.css'
import TodosList from "../TodosList"
import { useEffect, useState } from 'react'
import AddTodoModal from '../AddTodoModal'
import Pagination from '@mui/material/Pagination';



function Todos(props) {
  const {
    todos,
    getTodos,
    deleteTodo,
  } = props

  const [page, setPage] = useState(1);

  useEffect(async () => {
    await getTodos((page - 1) * 10, 10)
  }, [])

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  async function onChangePage(event, page) {
    setPage(page)
    await getTodos((page - 1) * 10, 10)

  }

  return (
    <div className="container">
      <div className="addButton"><button onClick={handleOpenModal}>Добавить</button></div>
      <TodosList
        todos={todos}
        deleteTodo={deleteTodo}
      />
      <div>
        <Pagination count={20} color="primary" defaultPage={page} onChange={onChangePage} sx={{ margin: '20px' }} />
      </div>

      <AddTodoModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleCloseModal={handleCloseModal}
      />
    </div>

  )
}

export default Todos