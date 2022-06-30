import { useSelector } from "react-redux"
import Task from "./Task"
import { Link } from "react-router-dom"

const TaskList = () => {
  const taskState = useSelector((state) => state.tasks)
  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Tareas ({taskState.length})</h1>
        <Link
          className="bg-indigo-600 px-2 py-1 rounded-md text-md"
          to={"/createTask"}
        >
          Crear nueva tarea
        </Link>
      </header>
      <section className="grid grid-cols-3 gap-4">
        {taskState.map((task) => {
          return <Task infoTask={task} key={task.id} />
        })}
      </section>
    </div>
  )
}

export default TaskList
