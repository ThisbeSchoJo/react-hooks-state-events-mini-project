import React from "react";

// function deletePet(id){
//   setPets(pets.filter(pet => {
//       return pet.id !== id
//   }))
// }



function Task({text, category, onDeleteTask}) {

  function handleDeleteClick() {
    onDeleteTask(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDeleteClick} className="delete">X</button>
    </div>
  );
}

export default Task;