const initialState = [];

export default function todos(state=initialState, action) {
  const todoList = state.slice();

  switch (action.type) {
    case 'FETCH_TODOS':
      return [...state, ...action.todos];
    case 'ADD_TODO':
      return [...state, action.todo];
    case 'EDIT_TODO':
      //REFACTOR
      const editedTodo = todoList[action.index];
      editedTodo.title = action.todo.title;
      editedTodo.description = action.todo.description;
      editedTodo.completed = action.todo.completed;
      todoList.splice(action.index, 1, editedTodo);
      return todoList;
    case 'TOGGLE_TODO':
      
      return state;
    case 'DELETE_TODO':
      todoList.splice(action.index, 1);
      return todoList;
    default:
      return state;
  }
}
