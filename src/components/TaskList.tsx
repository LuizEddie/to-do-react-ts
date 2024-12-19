import styles from './TaskList.module.css';
import { ITask } from '../interfaces/Task'

interface Props {
  taskList: ITask[];
  deleteTask(id: number):void;
}

const TaskList = ({taskList, deleteTask}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil"></i>
              <i className="bi bi-trash" onClick={() => deleteTask(task.id)}></i>
            </div>
          </div>
        ))
      ):
      (
        <p>Não há tarefas cadastradas</p>
      )
    }
    </>
  )
}

export default TaskList