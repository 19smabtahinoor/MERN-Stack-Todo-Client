import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const EditScreen = () => {
    const [todo, setTodo] = useState({});
    const { id } = useParams();
    const history = useHistory();

    //fetching the data
    useEffect(() => {
        fetch(`http://localhost:5000/todos/${id}`)
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [id])

    //update todo
    const handleTodo = (e) => {
        const currentTodo = e.target.value;
        const todoInfo = { ...todo };
        todoInfo.todo = currentTodo;
        setTodo(todoInfo)
    }
    //update description 
    const handleDescription = (e) => {
        const currentDescription= e.target.value;
        const todoInfo = { ...todo };
        todoInfo.description = currentDescription;
        setTodo(todoInfo)
    }
    //update status
    const handleStatus = (e) => {
        const currentStatus = e.target.value;
        const todoInfo = { ...todo };
        todoInfo.status = currentStatus;
        setTodo(todoInfo)
    }

    //handle edit 
    const handleEditUser = e => {
        e.preventDefault();
        fetch(`http://localhost:5000/todos/${id}`, {
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(todo)
        }).then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                alert('Updated')
            }
            history.push('/')
        })
    }

    return (
        <section className="max-w-screen-lg mx-auto py-24">
            <form className="w-96 mx-auto" onSubmit={handleEditUser}>
                <div className="mb-6">
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Write Todo"
                        value={todo.todo || " "}
                        onChange={handleTodo}
                        required />
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="category"
                        value={todo.description || " "}
                        onChange={handleDescription}
                        required />
                </div>
                <div className="mb-6">
                    <select 
                    className="border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-4 ring-purple-300 transition duration-300" 
                    value={todo.status || " "} 
                    onChange={handleStatus}
                    >
                        <option defaultValue="Planning todo" className="text-lg py-2 rounded-lg">Planning todo</option>
                        <option value="In Progress" className="text-lg py-2 rounded-lg">In Progress</option>
                        <option value="Done" className="text-lg py-2 rounded-lg">Done</option>
                    </select>
                </div>
                <button type="submit" className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update</button>
            </form>
        </section>
    )
}

export default EditScreen
