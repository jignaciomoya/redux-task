import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTarea, removeTarea } from "./redux/todoSlice";
import { useState } from "react";


const App = () => {

  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const tareas = useSelector(state => state.tareas);

  const handleAddTarea = () => {
    if (input.trim() !== '') {
      dispatch(addTarea({ id: Math.random(), text: input }));
      setInput('');
    }
  };

  const handleRemoveTarea = id => {
    dispatch(removeTarea(id));
  };
  
  return (
    <div>
      <h1>Lista de tareas</h1>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAddTarea}>Add Tarea</button>
      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id}>
            {tarea.text}
            <button onClick={() => handleRemoveTarea(tarea.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;