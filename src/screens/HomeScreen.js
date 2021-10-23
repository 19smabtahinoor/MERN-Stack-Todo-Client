import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

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
            <div className="flex flex-col space-y-6">
                {todos?.map((todo) => (
                    <div className="flex items-center w-full shadow-lg rounded-lg  border border-gray-200 p-4 box-border bg-white" key={todo._id}>
                        <div className="flex flex-grow items-center w-96 flex-wrap">
                            <h1 className="text-xl font-semibold break-all">{todo.todo}</h1>
                        </div>
                        {/* category  */}
                        <div className="flex flex-grow pr-6">
                            <span className="text-gray-700 text-sm break-all">{todo.description}</span>
                        </div>
                        {/* status  */}
                        <div className="flex flex-grow mr-4 rounded-md">
                            <p className={`text-center text-white px-3 py-1 rounded-full text-sm ${todo.status === "In Progress" ? "bg-red-600" : "bg-yellow-600"}  ${todo.status === "Done" && "bg-green-700"}`}>{todo.status}</p>
                        </div>
                        <div className="flex space-x-3">
                            <Link to={`/edit/${todo._id}`}>
                                <FiEdit className="cursor-pointer text-green-600 text-2xl" />
                            </Link>
                            <AiOutlineDelete className="cursor-pointer text-2xl text-red-500" onClick={() => handleDelete(todo._id)} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomeScreen
