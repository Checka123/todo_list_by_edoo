
import './App.css'
import Button from './components/button/Button';
import Select from './components/select/Select';
import Task from './components/task/Task'
import Tittle from './components/tittle/Tittle'
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const json = await response.json();
      const data = json
      setData(data);
    };

    fetchData();
  }, []);

  function filterTasks(tasks, filter){
    if (filter === "complete"){
      return tasks.filter((task)=> task.completed === true)
    } else if(filter === "incomplete"){
      return tasks.filter((task)=> task.completed === false)
    } else{
      return tasks
    }
  }

  function completeTask(task_id) {
    const newTasks = data.map((task) =>
      task.id === task_id ? { ...task, completed: !task.completed } : task
    );
    setData(newTasks);
  }

  function deleteTask(task_id) {
    const newTasks = data.filter((task)=> task.id !== task_id);
    setData(newTasks);
  }

  const filter_tasks = filterTasks(data, filter)

  return (
    <div className='bg-white'>
      <div className="flex justify-center items-center m-auto mt-10 mb-10">
        <Tittle />
      </div>
      <div className='flex justify-around items-center-safe m-auto'>
        <Button/>
        <Select onChange={setFilter}/>
      </div>
      <div className='justify-center items-start max-w-2xl m-auto bg-gray-50 rounded p-5 '>
        {filter_tasks.map((task)=> (<Task key={task.id} title={task.title} complete={task.completed} completeTask={() => completeTask(task.id)} deleteTask={() => deleteTask(task.id)}/>))}
      </div>
    </div>
  )
}

export default App
