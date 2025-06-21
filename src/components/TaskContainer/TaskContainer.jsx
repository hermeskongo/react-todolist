import {Header} from "../Header/Header.jsx";
import {Input} from "../Input/Input.jsx";
import {Tasklist} from "../TaskList/Tasklist.jsx";
import {Footer} from "../Footer/Footer.jsx";
import {useEffect, useState} from "react";

export const TaskContainer = () => {

    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasklist")
        if(storedTasks) {
            setTaskList(JSON.parse(storedTasks))
        }
    }, [])

    const saveToLocalStorage = (tasks) => {
        localStorage.setItem("tasklist", JSON.stringify(tasks))
    }
    const addTask = (title) => {
        const newTask = {
            id: taskList.length ? taskList.at(-1).id + 1: 1 ,
            title: title,
            completed: false,
        }
        const newTaskList = [...taskList, newTask]
        setTaskList(newTaskList)
        saveToLocalStorage(newTaskList)
    }

    const editTask = (id, completed) => {
        const newTaskList =
            taskList.map((task) => {
                return task.id === id ? {...task, completed: completed} : task
            })
        setTaskList(newTaskList)
        saveToLocalStorage(newTaskList)
    }

    const deleteTask = (id) => {
        const newTaskList = taskList.filter((task) => task.id !== id)
        setTaskList(newTaskList)
        saveToLocalStorage(newTaskList)
    }


    const getTasksCount = () => {
        const completedTasks = taskList.filter((task) => task.completed).length
        const inCompletedTasks = taskList.length - completedTasks

        return {
            completedTasks,
            inCompletedTasks
        }
    }

    const {completedTasks, inCompletedTasks} = getTasksCount()


    return(
        <main>
            <Header/>
            <Input addTask={addTask}/>
            <Tasklist
                taskList={taskList}
                editTask={editTask}
                deleteTask={deleteTask}
                inCompletedTasks={inCompletedTasks}
            />
            <Footer completedTasks={completedTasks}/>
        </main>
    )
}