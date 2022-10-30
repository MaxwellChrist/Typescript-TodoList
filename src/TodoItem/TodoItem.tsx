import React from 'react'
import { AppState as Props } from "../App";

interface AppState {
    todos: Props["todos"]
}

const TodoItem: React.FC<AppState> = ({ todos }) => {

    const renderList = (): JSX.Element[] => {
        return todos.map(item => {
            return (
                <li className="List">
                    <div className="List-header">
                        <h2>{item.name}</h2>
                    </div>
                    <p>Task completed: {item.completed ? <p>Yes</p> : <p>No</p>}</p>
                    <p className="List-note">{item.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()} 
        </ul>
    )
}

export default TodoItem