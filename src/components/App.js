import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategories] = useState("All")

  //function to delete a task
  function handleDeleteTask(taskText) {
    const updatedTasks = tasks.filter((task) => task.text != taskText)
    setTasks(updatedTasks)
  }

  //function to update selected category
  function handleCategorySelect(category) {
    setSelectedCategories(category)
  }

  //function to handle task form submission
  function handleTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])

  }

  //function to filter tasks based on the selected category
  const filteredTasks = selectedCategory === "All" 
  ? tasks 
  : tasks.filter((task) => task.category === selectedCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;