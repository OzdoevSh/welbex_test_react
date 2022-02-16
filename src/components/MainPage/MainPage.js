import './MainPage.css'
import icon from '../../assets/icons/todo.svg'
function MainPage(){
  return (
    <div className="container">
      <div>
        <img src={icon} style={{width: "500px"}}/>
      </div>
      <div>
        <h1>Добро пожаловать в приложение для планирования задач!</h1>
      </div>
    </div>
  )
}

export default MainPage;