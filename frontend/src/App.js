import React, {Component} from 'react';
import logo from './logo.svg';
import TodoItem from "./TodoItem"
import AddTodoItem from "./AddTodoItem"
import './App.css';

const API_ADRESS = 'http://127.0.0.1:8000/api/todos/'

class TodoList extends Component{
  constructor(props){
    super(props)
    this.state = {
      todos: [],
    }

    this.handleUpdate = this.handleUpdate.bind(this);    
  }

  handleUpdate(){
    console.log('fetching todolist (see fetched below)')
    let headers = {"Content-Type": "application/json"};
    fetch(API_ADRESS, {headers, })
      .then(res => res.json())
      .then(actualTodos => (
        this.setState({todos: actualTodos}))
      )
  }

  componentDidMount(){
    this.handleUpdate()
  }

  render(){
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleUpdate={this.handleUpdate} api_adress={API_ADRESS}/>)
    return <div> {todoItems} <AddTodoItem handleUpdate={this.handleUpdate} api_adress={API_ADRESS}/> </div> 
  }
}

export default TodoList;

