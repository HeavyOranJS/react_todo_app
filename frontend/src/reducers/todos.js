const initialState = [];

export default function todos(state=initialState, action) {
  const todoList = state.slice();

  switch (action.type) {
    case 'FETCH_TODOS':
      return [...state, ...action.todos];
    case 'ADD_TODO':
      return [...state, action.todo];
    case 'EDIT_TODO':
      const {title, description, completed} = action.todo;
      const editedTodo = {
        'id': todoList[action.index].id,
        'title': title,
        'description': description,
        'completed': completed,
      };
      todoList.splice(action.index, 1, editedTodo);
      return todoList;
    case 'DELETE_TODO':
      todoList.splice(action.index, 1);
      return todoList;
    default:
      return state;
  }
}
