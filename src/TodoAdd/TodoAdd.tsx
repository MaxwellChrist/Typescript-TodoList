import React, { useState } from 'react'
import { AppState as Props } from "../App";

interface AppProps {
    setTodos: React.Dispatch<React.SetStateAction<Props["todos"]>>
    todos: Props["todos"]
}

const TodoAdd: React.FC<AppProps> = ({setTodos, todos}) => {

    const [input, setInput] = useState({
        id: "",
        name: "",
        completed: "",
        note: "",
    }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.name) return

        setTodos([
            ...todos,
            {
                id: parseInt(input.id),
                name: input.name,
                completed: input.completed,
                note: input.note
            }
        ]);

        setInput({
            id: "",
            name: "",
            completed: "",
            note: "",
        })
    }

    return (
        <div className="TodoAdd">
            <input 
                type="text"
                onChange={handleChange}
                className="TodoAdd-input"
                name="id"
                value={input.id}
                placeholder="ID"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="TodoAdd-input"
                name="name"
                value={input.name}
                placeholder="Name"
            />
            <input 
                type="checkbox"
                onChange={handleChange}
                className="TodoAdd-input"
                name="completed"
                value={input.completed}
                placeholder="Image Url"
            />
            <textarea
                onChange={handleChange}
                className="TodoAdd-input"
                name="note"
                value={input.note}
                placeholder="Note"
            />
            <button
                onClick={handleClick}
                className="TodoAdd-btn"
            >
                Add to List
            </button>
        </div>
    )
}

export default TodoAdd