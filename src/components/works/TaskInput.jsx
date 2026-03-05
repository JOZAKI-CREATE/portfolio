const TaskInput = ({
  newTask,
  setNewTask,
  dueDate,
  setDueDate,
  addTask
}) => {
  return (
    <div className="flex gap-2 mb-8">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
            addTask();
          }
        }}
        placeholder="新しいタスクを入力..."
        className="flex-1 px-4 py-2 border border-[#c2a27c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c2a27c] placeholder:text-stone-400 placeholder:opacity-75"
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="px-3 py-2 border border-[#c2a27c] rounded-lg"
      />

      <button
        onClick={addTask}
        className="px-6 py-2 bg-[#a67c52] text-white font-medium whitespace-nowrap rounded-lg hover:bg-[#8c6844] transition"
      >
        追加
      </button>
    </div>
  );
};

export default TaskInput;