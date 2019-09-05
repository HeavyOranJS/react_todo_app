import React, {Component} from 'react';
import './App.css';


class AddTodoItem extends Component{
    constructor(props){
        super(props)

        this.state = {
            itemName:'',
            itemDescription:''
        }

        this.addTodoItem = this.addTodoItem.bind(this)
    }

    addTodoItem(){
        const {itemName, itemDescription} = this.state
        const headers = {"Content-Type": "application/json"};
        const body = JSON.stringify({"title": itemName, "completed":false, "description": itemDescription})
        fetch(this.props.api_adress, {headers, method: "POST", body})
          .then(res => res.json())
          .then(res => console.log("additem status" + res.status))
    }

    render(){      
      return <div>
        <input 
            name='todoItemName' 
            placeholder='item name' 
            type='text' 
            onChange={(event) => this.setState({itemName: event.target.value})}>
        </input>
        <textarea 
            name='todoItemDescription' 
            placeholder='item description' 
            rows="4" 
            cols="50" 
            onChange={(event) => this.setState({itemDescription: event.target.value})}>
        </textarea>
        <button 
            onClick={()=>{
                this.addTodoItem();
                this.props.handleUpdate()}
            }>Add item</button>
        <button onClick={()=>console.log('TODO: clearall')}>Clear all</button>
      </div> 
    }
}

export default AddTodoItem;
