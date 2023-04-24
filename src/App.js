
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
import { useState } from 'react';
import actions from './action';

export default function App() {
  const [task, setTask] = useState('');
  
  const todo = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(todo);
  return (
    <div className="App">
      <input value={task} onChange={(e) => setTask(e.target.value)} />

      <button
        onClick={() => {
          dispatch({ type: actions.ADD, payload: task });

          setTask('');
        }}> ADD</button>
        
      {todo.map((x) => (
        <div key={x.id} className="todo-list">
          <p>
            {x.isComplete && '✅'}
            {x.task}
          </p>

         <div>
         <button
            className="btn-one"
            onClick={() => dispatch({ type: actions.COMPLETE, payload: x })}
          >
            Complete
          </button>
          <button
             className="btn-two"
            onClick={() => dispatch({ type: actions.DELETE, payload: x.id })}
          >
            Delete
          </button>
         </div>
        </div>
      ))}
    </div>
  );
}
