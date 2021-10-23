import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, [todos])

    //delete 

    const handleDelete = (id) => {
        const process = window.confirm('Are you sure, Do you want to delete ? ')
        if (process) {
            fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        alert('Deleted Successfully');
                        const restTodos = todos.filter(todo => todo._id !== id)
                        setTodos(restTodos);
                    }
                })
        }
    }
    return (
        <section className="max-w-screen-lg mx-auto py-24 px-6">
            <h1 className="text-3xl text-center pb-4">All Todos</h1>
            <div className="flex flex-col space-y-3 border border-gray-200 rounded-lg">
                {todos?.map((todo) => (
                    <div className="flex items-center w-full bg-white  border-b border-gray-200 p-4 box-border" key={todo._id}>
                        <div className="flex flex-grow items-center">
                            <h1 className="text-2xl font-semibold">{todo.todo}</h1>
                            <span className="bg-yellow-500 rounded-full px-3 py-1 text-sm relative -top-3">{todo.category}</span>
                        </div>
                        <div className="flex space-x-3">
                            <Link to={`/edit/${todo._id}`}>
                                <button className="px-6 py-3 rounded-lg bg-blue-600 focus:outline-none text-white">Edit</button>
                            </Link>
                            <button className="px-6 py-3 rounded-lg bg-red-700 focus:outline-none text-white" onClick={() => handleDelete(todo._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomeScreen
