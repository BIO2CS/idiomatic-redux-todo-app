import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { toggleTodo, fetchTodos } from "../actions";
import TodoList from "./TodoList";
import { getVisibleTodoList } from "../reducers";

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodosAsync } = this.props;
    fetchTodosAsync(filter);
  }

  render() {
    return (<TodoList {...this.props}/>);
  }
}
const mapStateToProps = (state, { params }) => {
  const filter = params.filter || "all";
  return {
    todos: getVisibleTodoList(state, filter),
    filter: filter
  }
};

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
  fetchTodosAsync: (filter) => {
    dispatch(fetchTodos(filter));
  }
});

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList));

export default VisibleTodoList;
