import React from 'react';
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (<div className='col-7'>

        <ul className='list-group list-group-flush'>
            {
                todos.map((todo, i) => (
                    // TodoListItem, todo, index, handleDelete, handleToggle
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        index={i}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />

                ))
            }
        </ul>
    </div >);
}
