import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { add } from '../state/slices/todosSlice';

export const AddTodo: FC = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const submitTodo = () => {
    dispatch(add(newTodo));
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitTodo();
        }}
      >
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.currentTarget.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
