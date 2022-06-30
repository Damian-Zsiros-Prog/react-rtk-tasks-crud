import { useState } from "react"
import "./App.css"
import { useSelector } from "react-redux"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <main className="bg-zinc-900 h-screen text-white ">
      <section className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/createTask" element={<TaskForm />} />
            <Route path="/updateTask/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </section>
    </main>
  )
}

export default App
