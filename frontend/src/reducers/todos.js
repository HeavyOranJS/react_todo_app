const initialState = [];

export default function todos(state=initialState, action) {
//   const todoList = state.slice();

  switch (action.type) {
    // case 'EDIT_TODO':
    //   const todoToEdit = todoList[action.id];
    //   todoToUpdate = action.item;
    //   return [];
    case 'FETCH_TODOS':
      return [...state, ...action.todos];
    case 'ADD_TODO':
      return [...state, action.todo];
    default:
      return state;
  }
}
