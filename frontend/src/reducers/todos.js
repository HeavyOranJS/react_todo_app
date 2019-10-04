const initialState = [];

export default function todos(state = initialState, action) {
  const todoList = state.slice();

  switch (action.type) {
    case 'FETCH_TODOS':
      return [...state, ...action.todos];
    case 'ADD_TODO':
      return [...state, action.todo];
    case 'EDIT_TODO':
      // immutable todoList.splice(action.index, 1, action.todo);
      return [...todoList.slice(0, action.index), action.todo, ...todoList.slice(action.index + 1)];
    case 'DELETE_TODO':
      return [...todoList.slice(0, action.index), ...todoList.slice(action.index)];
    default:
      return state;
  }
}
