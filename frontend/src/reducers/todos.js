// const initialState = [
//   {
//     id: 1,
//     title: 'First todo!',
//     description: 'Click here to enter your first todo no',
//     completed: true,
//   },
// ];

const initialState = [];

export default function todos(state=initialState, action) {
//   const todoList = state.slice();

  switch (action.type) {
    // case 'EDIT_TODO':
    //   const todoToEdit = todoList[action.id];
    //   todoToUpdate = action.item;
    //   return [];
    case 'ADD_TODO':
      return [...state, action.todo];
    case 'FETCH_TODOS':
      return [...state, ...action.todos];
    default:
      return state;
  }
}
