import { useDispatch } from "react-redux"
import { updateStateTask, deleteTask } from "../features/tasks/taskSlice."
import { Link } from "react-router-dom"
const Task = ({ infoTask }) => {
  const dispatch = useDispatch()
  const updateStateActualTask = (id) => {
    dispatch(updateStateTask(id))
  }
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  return (
    <div className="bg-neutral-800 p-4 rounded-md">
      <div className="flex justify-between">
        <h1>{infoTask.title}</h1>
        <div className="flex gap-x-2">
          <Link
            className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
            to={`/updateTask/${infoTask.id}`}
          >
            Editar
          </Link>
          <button
            className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
            onClick={() => handleDelete(infoTask.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
      <p>{infoTask.description}</p>
      <div className="flex ">
        <button
          className={`${
            infoTask.completed ? "bg-green-500" : "bg-blue-500"
          } px-2 py-1 text-md rounded-md flex `}
          onClick={() => updateStateActualTask(infoTask.id)}
        >
          {infoTask.completed ? "Completada" : "No completada"}
        </button>
      </div>
    </div>
  )
}

export default Task
