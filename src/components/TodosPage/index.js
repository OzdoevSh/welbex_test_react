import { connect } from 'react-redux';
import Todos from "./TodosPage";

import { getTodos } from '../../store/actions/getTodos';
import { deleteTodo } from '../../store/actions/deleteTodo';
import { editTodo } from '../../store/actions/editTodo';

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = {
  getTodos,
  deleteTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);