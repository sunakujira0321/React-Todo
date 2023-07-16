import "./App.css";
import {Title} from "./components/Title";
import {Inputform} from "./components/Inputform";
import { TodoList } from "./components/Todolist";
import { useState } from "react";

function App() {
    const [taskList, setTaskList] = useState([]);
    
    return (
    <div className="body">
      <Title />
      <Inputform taskList = {taskList} setTaskList = {setTaskList} />
      <TodoList taskList = {taskList} setTaskList = {setTaskList}/>
    </div>
    );
}

export default App;
