import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
function TodoFeature() {
    const [todoList, setTodoList] = useState(() => {
        const getDataTodoList = JSON.parse(localStorage.getItem('todoList'))
        return getDataTodoList || []
    })
    const [filterStatus, setFilterStatus] = useState("all")

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }, [todoList])

    const handleClickCompleted = (id) => {
        // const newTodolist = [...todoList]
        // newTodolist[index] = {
        //     ...newTodolist[index],
        //     status: newTodolist[index].status === "new" ? "completed" : "new"
        // }
        // setTodoList(newTodolist)
        const newTodolist = todoList.map(todo => todo.id === id ?
            { ...todo, status: todo.status === "new" ? "completed" : "new" } : todo)
        setTodoList(newTodolist)
    }
    const handleShowAll = () => {
        setFilterStatus("all")
    }
    const handleShowCompleted = () => {
        setFilterStatus("completed")
    }
    const handleShowNew = () => {
        setFilterStatus("new")
    }

    const filterStatusTodoList = todoList.filter(todo => filterStatus === "all" || filterStatus === todo.status)
    const handleTodoFormSubmit = (values) => {
        const addTodoList = [...todoList, { id: uuidv4(), title: values.title, status: 'new' }]
        setTodoList(addTodoList)
    }
    const handleClickDelete = (id) => {
        const newTodoList = todoList.filter(todo => todo.id !== id)
        setTodoList(newTodoList)
    }
    return (
        <div style={{ marginTop: 80, textAlign: 'center' }}>
            <TodoForm onSubmitForm={handleTodoFormSubmit} />
            <Typography component='h1' variant='h4' color='blue' margin='20px 0'>Todo List</Typography>
            <TodoList
                onCompleted={handleClickCompleted}
                onDelete={handleClickDelete}
                todoList={filterStatusTodoList} />
            <Button onClick={handleShowAll} variant="outlined">Show All</Button>
            <Button onClick={handleShowCompleted} variant="outlined" style={{ margin: '0 10px' }}>Show Completed</Button>
            <Button onClick={handleShowNew} variant="outlined">Show New</Button>
        </div>
    )
}

export default TodoFeature