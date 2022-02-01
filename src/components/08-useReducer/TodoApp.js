import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import './style.css';
//import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';



//const initialState = [{
//    id: new Date().getTime(),
//    desc: 'Aprender React',
//    done: false
//}];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
    //return [{
    //    id: new Date().getTime(),
    //    desc: 'Aprender React',
    //    done: false
    //}]
}


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });

    }

    return <div>
        <h1>TodoApp ({todos.length})</h1>
        <hr />
        <div className='row'>
            {/* TodoList, todos, handleDelete, handleToggle */}

            <TodoList
                todos={todos}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
            />


            <div className='col-5'>
                <TodoAdd
                    handleAddTodo={handleAddTodo}
                />

            </div>
        </div>
    </div>;
};
