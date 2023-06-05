import { FiTrash, FiEdit2, FiCheckCircle,  } from "react-icons/fi";
import { AiOutlineFileDone } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import {RiDeleteBackLine} from 'react-icons/ri'



const Task = ({ task, index, deleteTask, getSingleTask, setToComplete }) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
      <p>
        <b>{index + 1}. </b>
        {task.name}
      </p>
      <div className="task-icons">
        <AiOutlineFileDone className="task-icons1" onClick={() => setToComplete(task)} />
        <FaRegEdit className="task-icons2" onClick={() => getSingleTask(task)} />
        <RiDeleteBackLine className="task-icons3" onClick={() => deleteTask(task._id)} />
      </div>
    </div>
  )
}
export default Task
