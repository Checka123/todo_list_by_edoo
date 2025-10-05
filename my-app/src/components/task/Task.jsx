import Delete from "../actions/Delete"
import Edit from "../actions/Edit"
import Check from "../check/Check"

function Task({ title = "Hola mundo", complete = false, completeTask, deleteTask }) {
  return (
    <div className="rounded-lg bg-white shadow w-1xl p-2 flex m-2">
      <div className="m-4">
        <Check checked={complete} onChange={completeTask}/>
      </div>

      <div id="container-2" className="flex justify-between items-center flex-1">
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p>{complete ? "complete":"incomplete"}</p>
        </div>
        <div className="flex space-x-2 m-2">
          <Delete onClick={deleteTask} />
          <Edit/>
        </div>
      </div>
    </div>
  );
}

export default Task;
