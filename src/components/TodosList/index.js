import { connect } from 'react-redux';
import TodosList from "./TodosList";

import { editTodo } from '../../store/actions/editTodo';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  editTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);