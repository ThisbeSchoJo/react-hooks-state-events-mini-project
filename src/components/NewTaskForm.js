import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("")
  const [taskCategory, setTaskCategory] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (taskText && taskCategory) {
      onTaskFormSubmit({
        text: taskText, 
        category: taskCategory
      })
      setTaskText("") //Clear the input after submission
      setTaskCategory("")
    }
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          {/* render <option> elements for each category here */}
          {categories.map((category) => category !== "All" && (
              <option key={category} value={category}>
                {category}
              </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
