import React, { JSXElementConstructor, ReactElement } from 'react';
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import './style.css';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  function provided(provided: DroppableProvided, snapshot: DroppableStateSnapshot): ReactElement<HTMLElement, string | JSXElementConstructor<any>> {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="container">
      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {todos.map((todo) => (
          <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
