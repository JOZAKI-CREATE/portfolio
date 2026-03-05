import React from "react";

const TaskItem = (props) => {
    const { task, newTaskId, deletingId, editingId, editingText,
        setEditingId, setEditingText, toggleTask,
        deleteTask, saveEdit } = props;

    const today = new Date().toISOString().split('T')[0];
    const isOverdue = task.dueDate && task.dueDate < today && !task.completed;
    const isToday = task.dueDate === today;


    return (

        <li
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ease-in-out
  ${deletingId === task.id
                    ? "opacity-0 scale-95"
                    : newTaskId === task.id
                        ? "opacity-0 translate-y-2"
                        : isOverdue
                            ? "bg-red-50"
                            : "bg-stone-50 hover:bg-stone-100"
                }
`}
        >
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 accent-[#a67c52] focus:ring-[#d6bfa6] rounded"
            />

            <div className="flex-1 flex flex-col">
                {editingId === task.id ? (
                    <input
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        className="px-2 py-1 border border-[#c2a27c] rounded focus:outline-none focus:ring-2 focus:ring-[#c2a27c]"
                    />
                ) : (
                    <span
                        className={`transition-all duration-300 ${task.completed
                            ? 'line-through text-[#b8ada1] opacity-60 scale-95'
                            : 'text-[#5c5045] opacity-100 scale-100'
                            }`}
                    >
                        {task.text}
                    </span>
                )}

                {task.dueDate && (
                    <span
                        className={`text-xs ${isOverdue
                            ? "text-red-500"
                            : isToday
                                ? "text-orange-500"
                                : "text-stone-400"
                            }`}
                    >
                        期限：{task.dueDate}
                    </span>
                )}
            </div>

            {editingId === task.id ? (
                <button
                    onClick={() => saveEdit(task.id)}
                    className="text-[#8c6844] hover:text-[#a67c52]"
                >
                    保存
                </button>
            ) : (
                <button
                    onClick={() => {
                        setEditingId(task.id);
                        setEditingText(task.text);
                    }}
                    className="text-stone-400 hover:text-stone-600"
                >
                    編集
                </button>
            )}

            <button
                onClick={() => deleteTask(task.id)}
                className="text-stone-400 hover:text-stone-600 font-medium transition"
            >
                削除
            </button>
        </li>
    );
};

export default TaskItem;