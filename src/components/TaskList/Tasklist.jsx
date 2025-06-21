import style from "./Tasklist.module.css"
import {TaskItem} from "../Item/TaskItem.jsx";
export const Tasklist = ({
     taskList,
     editTask,
     deleteTask,
     inCompletedTasks,
}) => {

    const tasks = taskList.map((task) => (
        <TaskItem
            key={task.id}
            id={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
        />
    ));


    if(taskList && taskList.length > 0) {
        return (
            <div className="box">
                <h2 className={style.title}>
                    {inCompletedTasks >0 && (
                        <>&#128196; Il te reste encore <span className="important">{inCompletedTasks}</span> tâche à accomplir</>
                    )}

                    {inCompletedTasks === 0 && (
                        <>&#129309; Génial, Tu as accompli Toutes tes Tâches !</>
                    )}
                </h2>
                {taskList && taskList.length > 0 && (
                    <ul className={style.container}>
                        {tasks}
                    </ul>
                )}
            </div>
        )
    }
    return(
        <div className={"box"}>
            <h2 className={style.emptyState}>&#128075; Salut, Tu n'as rien à faire, Profite bien de ton temps libre</h2>
        </div>
    )
}