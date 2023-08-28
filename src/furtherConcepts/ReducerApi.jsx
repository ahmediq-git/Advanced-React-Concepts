import React, { useReducer, useState } from 'react';
import axios from 'axios';

const initialState = {
    todos: [],
    error: false,
    total: 0
}


const reducer = (state, action) => {
    switch (action.type) {
        case "GET_TODOS":
            return {
                ...state,
                todos: action.payload,
                error: false,
                total: action.payload.length
            }
        case "ADD_TODO":
            return {
                ...state,
                total: state.total + 1,
                todos: [...state.todos, action.payload]
            }
        case "EDIT_TODO":
            const updatedTodos = state.todos.map(note => 
                note.id === action.payload.id ? action.payload : note
            );
            return {
                ...state,
                todos: updatedTodos
            }
        case "REMOVE_TODO":
            console.log("Removing todo with ID:", action.payload);
            return {
                ...state,
                todos: state.todos.filter(note=>note.id === action.payload)
            }
        case "ERROR":
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}

function ReducerApi() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [note, setNote] = useState('');
    const [note2, setNote2] = useState('');
    const [noteNumber, setNoteNumber] = useState(1);
    const [noteNumber2, setNoteNumber2] = useState(1);

    const FetchNote = () => {
        axios.get('https://dummyjson.com/todos').then((response) => {
            dispatch({ type: "GET_TODOS", payload: response.data.todos });
        }).catch((err) => console.log(err));
    }

    const AddNote = (payload) => {
        axios.post("https://dummyjson.com/todos/add", { todo: payload, completed: false, userId: "48" }).then((response) => {
            dispatch({ type: "ADD_TODO", payload: response.data });
        }).catch((err) => console.log(err));
    }

    const EditNote = (noteId, note) => {
        const url = `https://dummyjson.com/todos/${noteId}`;
        axios.put(url, { todo: note, completed: false, userId: "48" }).then((response) => {
            dispatch({ type: "EDIT_TODO", payload: response.data });
        }).catch((err) => console.log(err));
    }

    const RemoveNote = (noteId) => {
        const url = `https://dummyjson.com/todos/${noteId}`;
        axios.delete(url).then(() => {
            dispatch({ type: "REMOVE_TODO", payload: noteId });
        }).catch((err) => console.log(err));
    }

    return (
        <div>
            <button onClick={FetchNote}>Fetch Notes/Update List</button>
            <br />
            <br />
            <input placeholder="Enter note" onChange={(e) => setNote(e.target.value)} />
            <button onClick={() => AddNote(note)}>Add Note</button>
            <br />
            <br />
            <input placeholder="enter note number" onChange={(e) => setNoteNumber(e.target.value)} />
            <input placeholder="Enter note" onChange={(e) => setNote2(e.target.value)} />
            <button onClick={() => EditNote(noteNumber, note2)}>Edit Note</button>
            <br />
            <br />
            <input placeholder="enter note number" onChange={(e) => setNoteNumber2(e.target.value)} />
            <button onClick={() => RemoveNote(noteNumber2)}>Remove Note</button>

            {state.todos.map((note) => (
                <div key={note.id}>
                    <br/>
                    <div>{note.todo}</div>
                    <div>{note.completed ? "Completed" : "Not Completed"}</div>
                </div>
            ))}
            <div>Total: {state.total}</div>
        </div>
    )
}

export default ReducerApi;
