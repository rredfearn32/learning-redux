import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectTodos, remove } from '../state/slices/todosSlice';

export const Todos: FC = () => {
  const todos: string[] = useSelector(selectTodos);
  const dispatch = useDispatch();

  const removeTodo: (index: number) => void = (index) => {
    console.log('FOOBAR');
    dispatch(remove(index));
  };
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => removeTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
