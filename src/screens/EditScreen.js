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
    //update category 
    const handleCategory = (e) => {
        const currentCategory = e.target.value;
        const todoInfo = { ...todo };
        todoInfo.category = currentCategory;
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
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Write Todo"
                        value={todo.todo}
                        onChange={handleTodo}
                        required />
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="category"
                        value={todo.category}
                        onChange={handleCategory}
                        required />
                </div>
                <button type="submit" className="text-white bg-purple-700 hover:bg-blue-800 focus:ring-4 ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Update</button>
            </form>
        </section>
    )
}

export default EditScreen
