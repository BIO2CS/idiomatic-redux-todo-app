import { connect } from "react-redux";
import { withRouter } from "react-router";
import { toggleTodo } from "../actions";
import TodoList from "./TodoList";
import { getVisibleTodoList } from "../reducers";

const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodoList(state, params.filter)
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  }
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList));

export default VisibleTodoList;
