import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddScreen = () => {
    const [status, setStatus] = useState('Planning todo')
    const todoRef = useRef();
    const descriptionRef = useRef();
    const history = useHistory();
console.log(status)
    const handleAdd = e => {
        const todo = todoRef.current.value;
        const description = descriptionRef.current.value;

        const newTodo = { todo, description, status};

        fetch('https://mern-todo-sm.herokuapp.com/todos', {
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newTodo)
        }).then(res => res.json())
        .then(data => console.log(data));


        e.preventDefault();
        history.push('/')
    }

    return (
        <section className="max-w-screen-lg mx-auto py-24">
            <form className="w-96 mx-auto" onSubmit={handleAdd}>
                <div className="mb-6">
                    <input type="text" className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Write Todo" ref={todoRef}  required/>
                </div>
                <div className="mb-6">
                    <input type="text" className="shadow appearance-none border rounded w-full py-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Short Description" ref={descriptionRef} required />
                </div>
                <div className="mb-6">
                    <select className="border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-4 ring-purple-300 transition duration-300" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option defaultValue="Planning todo"  className="text-lg py-2 rounded-lg">Planning todo</option>
                        <option value="In Progress"  className="text-lg py-2 rounded-lg">In Progress</option>
                        <option value="Done" className="text-lg py-2 rounded-lg">Done</option>
                    </select>
                </div>
                <button type="submit" className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add</button>
            </form>
        </section>
    )
}

export default AddScreen
