import TaskItem from "./TaskItem";

const TaskList = ({
  filteredTasks,
  editingId,
  editingText,
  setEditingId,
  setEditingText,
  toggleTask,
  deleteTask,
  saveEdit,
  deletingId,
  newTaskId
}) => {
  return (
    <ul className="space-y-3 max-h-80 overflow-y-auto pr-1">
      {[...filteredTasks].map(task => (
        <TaskItem
          key={task.id}
          task={task}
          editingId={editingId}
          editingText={editingText}
          setEditingId={setEditingId}
          setEditingText={setEditingText}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          saveEdit={saveEdit}
          deletingId={deletingId}
          newTaskId={newTaskId}
        />
      ))}
    </ul>
  );
};

export default TaskList;