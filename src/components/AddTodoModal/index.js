import AddTodoModal from "./AddTodoModal";
import { connect } from 'react-redux';
import { addTodo} from '../../store/actions/addTodo';
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  addTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoModal);