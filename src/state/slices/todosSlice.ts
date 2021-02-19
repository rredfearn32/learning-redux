import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit';

interface TodoState {
  todos: {
    list: string[];
  };
}

type State = {
  list: string[];
};

const initialState: State = {
  list: [],
};

export const todosSlice = createSlice<State, SliceCaseReducers<State>>({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.list = [...state.list, action.payload];
    },
    remove: (state, action: PayloadAction<number>) => {
      if (action.payload >= 0) {
        const newList = [...state.list];
        newList.splice(action.payload, 1);
        state.list = newList;
      }
    },
  },
});

export const { add, remove } = todosSlice.actions;

export const selectTodos: (state: TodoState) => string[] = (state: TodoState) =>
  state.todos.list;

export default todosSlice.reducer;
