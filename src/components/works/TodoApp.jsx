import { useState, useEffect } from 'react';

import Header from "./Header";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import FilterTabs from "./FilterTabs";


const TodoApp = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState('');
  const [newTaskId, setNewTaskId] = useState(null);

  const addTask = () => {
    if (newTask.trim() === '') return;

    const id = crypto.randomUUID();

    setTasks(prev => [
      ...prev,
      {
        id,
        text: newTask,
        completed: false,
        dueDate: dueDate || null
      }
    ]);

    setNewTaskId(id);

    setTimeout(() => {
      setNewTaskId(null);
    }, 300);

    setNewTask('');
    setDueDate('');
  };


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const saveEdit = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: editingText } : task
    ));
    setEditingId(null);
  };



  // チェックボックスをクリックしたとき
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));

  };

  // 削除ボタンが押されたとき
  const deleteTask = (id) => {
    setDeletingId(id);

    setTimeout(() => {
      setTasks(prev => prev.filter(task => task.id !== id));
      setDeletingId(null);
    }, 300); // アニメーション時間
  };
  const clearCompleted = () => {
    if (!window.confirm("完了タスクをすべて削除しますか？")) return;
    setTasks(tasks.filter(task => !task.completed));
  };
  const [deletingId, setDeletingId] = useState(null);


  // 編集機能
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  // タスク数表示
  const remainingCount = tasks.filter(task => !task.completed).length;
  const completedCount = tasks.filter(task => task.completed).length;

  // フィルター機能
  const [filter, setFilter] = useState("all");
  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });
  const filterTabClass = (type) =>
    `pb-2 text-sm font-medium transition relative ${filter === type
      ? "text-[#a67c52]"
      : "text-stone-400 hover:text-stone-600"
    }`;

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed - b.completed;
    }

    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;

    return a.dueDate.localeCompare(b.dueDate);
  });

  // 期限機能
  const [dueDate, setDueDate] = useState('');






  return (
    
    <div className="w-full flex justify-center items-start">
      <div className="w-full max-w-2xl bg-white backdrop-blur rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8">
        <Header />

        {/* タスク数表示エリア */}
        <div className="flex justify-between text-sm text-stone-500 mb-4">
          <span>残り {remainingCount} 件</span>
          <span>完了 {completedCount} 件</span>
        </div>

        {/* 一括クリアボタン */}
        <div className="flex justify-end mb-4">
          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              className="text-sm text-stone-400 hover:text-red-500 transition"
            >
              完了タスクを削除
            </button>
          )}
        </div>

        {/* フィルターボタン */}
        <FilterTabs
          filter={filter}
          setFilter={setFilter}
          filterTabClass={filterTabClass}
        />

        {/* 入力エリア */}
        <TaskInput
          newTask={newTask}
          setNewTask={setNewTask}
          dueDate={dueDate}
          setDueDate={setDueDate}
          addTask={addTask}
        />

        {/* タスクリスト */}
        <TaskList
          filteredTasks={sortedTasks}
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

        {tasks.length === 0 && (
          <p className="text-center text-stone-500 mt-8">
            まだタスクがありません。上の欄から追加してみましょう！
          </p>
        )}
      </div>
    </div>
  );
}

export default TodoApp;


