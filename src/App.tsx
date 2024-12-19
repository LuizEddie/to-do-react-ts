import { useState } from 'react';
import styles from './App.module.css';

import Footer from "./components/Footer"
import Header from "./components/Header"
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import { ITask } from './interfaces/Task';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter(task => task.id !== id));
  }

  return (
    <div>
      <Header></Header>
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar Tarefa' taskList={taskList} setTaskList={setTaskList}></TaskForm>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} deleteTask={deleteTask}></TaskList>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
