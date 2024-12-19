import styles from './TaskForm.module.css';
import { ITask } from '../interfaces/Task';
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: Dispatch<SetStateAction<ITask[]>>;
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {

  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = {id, title, difficulty};

      setTaskList!([...taskList, newTask]);

      setTitle('');
      setDifficulty(0);

      console.log(taskList);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === 'title'){
      setTitle(e.target.value);
    }else{
      setDifficulty(+e.target.value);
    }

  }

  return (
    <>
      <form onSubmit={addTaskHandler} className={styles.form}>
        <div className={styles.input_container}>
          <label htmlFor="title">Título:</label>
          <input type="text" name="title" id="title" placeholder='Título da tarefa' value={title} onChange={handleChange}/>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="difficulty">Dificuldade:</label>
          <input type="number" name="difficulty" id="difficulty" placeholder='Dificuldade da tarefa' value={difficulty} onChange={handleChange}/>
        </div>
        <input type="submit" value={btnText} />
      </form>
    </>
  )
}

export default TaskForm