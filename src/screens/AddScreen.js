import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const AddScreen = () => {
    const todoRef = useRef();
    const categoryRef = useRef();
    const history = useHistory();

    const handleAdd = e => {
        const todo = todoRef.current.value;
        const category = categoryRef.current.value;

        const newTodo = {todo, category};

        fetch('http://localhost:5000/todos', {
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
                    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Write Todo" ref={todoRef}  required/>
                </div>
                <div className="mb-6">
                    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="category" ref={categoryRef} required />
                </div>
                <button type="submit" className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add</button>
            </form>
        </section>
    )
}

export default AddScreen
