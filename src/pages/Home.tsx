import { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectTodos } from '../state/slices/todosSlice';

export const Home: FC = () => {
  const todos = useSelector(selectTodos);
  return (
    <div>
      <h1>Home</h1>
      <p>You have {todos.length} todos.</p>
    </div>
  );
};
