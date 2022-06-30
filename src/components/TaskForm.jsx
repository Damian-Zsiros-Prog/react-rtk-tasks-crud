import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, updateTask } from "../features/tasks/taskSlice."
import { v4 as uuid } from "uuid"
import { useNavigate, useParams } from "react-router-dom"
const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
    id: "",
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const tasks = useSelector((state) => state.tasks)

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (params.id) {
      dispatch(
        updateTask({
          ...task,
          id: Number(params.id),
        })
      )
    } else {
      dispatch(
        addTask({
          ...task,
          completed: false,
          id: uuid(),
        })
      )
    }
    navigate("/")
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === Number(params.id)))
    }
  }, [])

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label className="block text-xs font-bold mb-2">Titulo</label>
      <input
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        type="text"
        name="title"
        placeholder="Ingrese el titulo"
        value={task.title}
        onChange={handleChange}
      />
      <label className="block text-xs font-bold mb-2">Descripcion</label>
      <textarea
        name="description"
        placeholder="Ingrese la descripcion"
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        value={task.description}
        onChange={handleChange}
      ></textarea>
      <button className="bg-indigo-600 px-2 py-1 rounded-md" type="submit">
        {params.id ? "Actualizar tarea" : "Crear tarea"}
      </button>
    </form>
  )
}

export default TaskForm
