import React from 'react';
import './ListTodo.scss'
import './AddTodo'
import AddTodo from "./AddTodo";
import {toast} from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            {id: '11s', title: 'Bùi Văn Chiến'},
            {id: '1dfd', title: 'Bùi Văn Huy'},
            {id: '1ffg', title: 'Bùi Văn Huân'},
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Wow so easy!")
    }
    handleClickDelete = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodo
        })
        toast.success("Delete success !")
    }
    handleClickEdit = (todo) => {
        let {listTodos, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0

        // Save
        if(isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = [...listTodos];
            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id))
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodoCopy,
                editTodo : ''
            })
            toast.success("Update todo success !")
            return
        }


        //Edit
        this.setState({
            editTodo: todo
        })

    }

    handlechangeEditTodo = (event) => {
        let editTodocopy = {...this.state.editTodo}
        editTodocopy.title = event.target.value;
        this.setState({
            editTodo: editTodocopy
        })

    }
    render() {
        let {listTodos, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0
        return (
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo}/>
                <div className="list-todo-content">
                    {listTodos.map((item, index) => {
                        return (
                            <div className="todo-child" key={item.id}>
                                { isEmptyObj === true ?
                                    <span className="text">{index + 1} - {item.title}</span>
                                    :
                                    <>
                                        {editTodo.id === item.id ?
                                            <span className="text">{index + 1} - <input onChange={(event) => this.handlechangeEditTodo(event)} value={editTodo.title}/></span>
                                            :
                                            <span className="text">{index + 1} - {item.title}</span>
                                        }
                                    </>
                                }
                                <div className="event">
                                    <button className="Edit" onClick={() => this.handleClickEdit(item)}>
                                        {isEmptyObj === false  && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }

                                    </button>
                                    <button className="Delete" onClick={() => this.handleClickDelete(item)}>Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        )
    }
}

export default ListTodo;