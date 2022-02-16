
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/CloseSharp';


import Modal from 'react-modal';
import { useState } from 'react';

import './AddTodoModal.css'

const AddTodoModal = (props) => {
  const {
    openModal,
    handleCloseModal,
    addTodo,
  } = props

  const customStyles = {
    content: {
      top: '30%',
      left: '50%',
      width: '530px',
      height: '400px',
      transform: 'translate(-50%, -50%)',
      borderRadius: '25px',
      backgroundColor: 'white',
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly"
    },
  };


  const [title, setTitle] = useState('');
  const [userId, setUserId] = useState('');
  
  const completed = false

  function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const id = randomIntFromInterval(201, 1000)
 

  /// имитация добавления
  async function handleSubmit() {
    await addTodo(id, userId, title, completed)
    handleCloseModal()
    console.log(id, userId, title, completed )
    alert(`id: ${id}, title: ${title}, user_id: ${userId}, complete: ${completed}`)
  }

  return (
    <Modal isOpen={openModal} style={customStyles}>
      <div>
        <h2>Добавление контакта</h2>
        <IconButton
          style={{
            marginTop: "-200px",
            marginLeft: "450px",
            width: "40px"
          }}
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <div className="dataInputs">
        <FormControl>
          <InputLabel>Title</InputLabel>
          <Input 
            name="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </FormControl>
        <FormControl>
          <InputLabel>User Id</InputLabel>
          <Input 
            name="userId" 
            value={userId} 
            type="number"
            onChange={(e) => setUserId(e.target.value)} 
          />
        </FormControl>
        

      </div>
      <div>
        <FormControl>
          <Button
            variant="contained"
            style={{
              textTransform: "none",
              backgroundColor: "#1668b4",
              color: 'white',
              fontSize: '17px',
              fontWeight: 'bold'
            }}
            onClick={handleSubmit}
          >
            Сохранить
          </Button>
        </FormControl>
      </div>
    </Modal>
  )
}

export default AddTodoModal;