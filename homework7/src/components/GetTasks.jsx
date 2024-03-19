import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../asyncActions/tasksAction";

function GetTasks() {
    const tasks = useSelector(state => state.tasks.tasks)
    const smallTasks = tasks.filter(task => task.id <= 20)
    const dispatch = useDispatch();

    
    return (<div>
        <button onClick={() => dispatch(getTasks())}>Добавить задачи из базы</button>
        <div>
            {smallTasks.map((task) => (
                <li key={task.id}>
                <span>{task.id}: {task.title}</span>
                </li>
            ))}
        </div>
    </div>);
}

export default GetTasks;