import React, {Component} from 'react'


class TodoItem extends Component{
    constructor(props){
      super(props)

      this.state = {
          completed: false,
      }
      this.toggleCompleted = this.toggleCompleted.bind(this);
      this.itemDelete = this.itemDelete.bind(this);
    }

    async itemDelete(){
        const headers = {"Content-Type": "application/json"};
        const api_adress_id = this.props.api_adress + this.props.item.id + '/';

        const res = await fetch(
            api_adress_id,
            {headers, method: "DELETE"}
        )
        this.props.handleUpdate()
    }

    async toggleCompleted(){
        const headers = {"Content-Type": "application/json"};
        const {id, title, description, completed} = this.props.item;
        const body = JSON.stringify({
            "id": id,
            "title": title,
            "description":description,
            "completed":!completed,
        })
        
        const res = await fetch(
                this.props.api_adress + id + '/',
                {headers, method: "PUT", body}
            )

        console.log(res);
        this.props.handleUpdate()
    }
  
    componentDidMount(){
        this.setState({completed: this.props.item.completed})
    }

    render(){
        const {id, title, description, completed} = this.props.item;
      return (
        <div className='todo-item'>
        <input type='checkbox' checked={completed} onChange={this.toggleCompleted}></input> 
         {title} - {description}
         <button onClick={()=>console.log('edit')}> TODO: Edit </button>
         <button onClick={this.itemDelete}> Delete </button>
        </div>
      )
    }
  }

export default TodoItem;
