import React from 'react';

// Redux
import { connect } from 'react-redux';
import { removeTodo, markTodoAsCompleted } from '../actions';

// React-bootstrap components
import ListGroup from 'react-bootstrap/ListGroup';

// Components
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => {
  return (
    <div className='d-flex flex-column mb-3'>
      <h1 className='text-center'>Todo List</h1>
      <NewTodoForm />
      <ListGroup className='border border-2'>
        {todos.map((todo, i) => {
          return (
            <TodoListItem
              key={i}
              todo={todo}
              onRemovePressed={onRemovePressed}
              onCompletedPressed={onCompletedPressed}
            />
          );
        })}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
