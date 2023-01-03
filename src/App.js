import { useState } from "react";
import { Task } from './components/Tasks';
import { GlobalStyles } from "./Styles/GlobalStyles";
import { Container } from "./Styles/Container";
import './Styles/styleT.css'


function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChande = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task ={
      id: todoList.length === 0 ? 1: todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task])
  };
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask =(id) =>{
    setTodoList(
      todoList.map((task)=>{
        if (task.id === id) {
          return {...task, completed: true}
        } else {
          return task;
        }
      })
    )
  }

  return (
    <Container>
      <GlobalStyles/>
      <div className="addTask">
        <input onChange={handleChande} />
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task  taskName={task.taskName} id={task.id} deleteTask={deleteTask} completed={task.completed} completeTask ={completeTask}/>
          );
        })}
      </div>
    </Container>
  );
}


export default App;
