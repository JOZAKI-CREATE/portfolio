import { useState } from 'react';


const App = () => {
  const [tasks, setTasks] = useState([]);
  // useState([])は、「初期値として空の配列 [] がある状態（state）の箱を作ってください」という意味の構文。
  // [tasks, setTasks]は、「その箱の1つ目にその状態を読み取る変数（tasks）と、２つ目に更新するための関数（setTasks）という名前をつける」という分割代入の書き方。名前はなんでもいい。
  const [newTask, setNewTask] = useState('');
  // useState('')は、「初期値として空の文字列 '' がある状態（state）の箱を作ってください」という意味の構文。
  // 「その箱の1つ目にその状態を読み取る変数（newTask）と、2つ目に更新するための関数（setNewTask）という名前をつける」という分割代入の書き方。名前はなんでもいい。
  // newTaskは後のhtmlみたいなとこに出てくる入力欄の値の名前


  // 追加ボタンが押されたとき
  const addTask = () => {

    // addTaskの処理１つ目は、入力欄が空文字列の場合は何もしない処理
    if (newTask.trim() === '') return; // .trim()とは、「その文字列の両端にある余分なスペース（空白）を削除する」という意味。
    // 余分スペースを削除した後、もし文字列が空であれば、関数の実行を終了し、それ以上の処理を行わないようにする

    // addTaskの処理2つ目は、新しいタスクを追加する処理
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    // 配列の一番最後に要素を追加したいが、Reactでは「状態(State)を直接変更してはいけない」ルールがあるため、tasks.push()は使わない。
    // 代わりにスプレッド構文(...)を使って新しい配列を作成している
    // ...tasksは、元の配列をコピーという意味。
    // [...tasks,なんとか]は、「元の配列の要素をコピーしてきた新しい配列を作成し、その後に新しい要素(なんとか)を追加する」という意味。
    // Date.now()は「今この瞬間の時刻（ミリ秒単位の数字）」を取得する構文。これを使うことで、重複しないIDを割り当てることができる。
    // text: newTaskは、入力欄に入っている文字列をタスクの内容としてコピーするためのもの。
    // completed: falseは、新しいタスクは最初は未完了状態(チェックボックスにチェックが入っていない状態)であることを示すためのもの。

    // addTaskの処理3つ目はsetNewTask関数の呼び出し
    setNewTask(''); // 入力欄をクリア
  };


  // チェックボックスをクリックしたとき
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    // .map()は、「配列の各要素に対して指定した処理を行い、その結果から新しい配列を作成する」という意味。
    // task => は、「ひとつずつの要素をtaskという名前で扱う」という意味。
    // 「もし〜なら ? 真の場合の処理 : 偽の場合の処理」は三項演算子と呼ばれ、if文の簡易版のようなもの。
    // !task.completedは、「そのタスクのcompletedプロパティの値を反転させる」という意味。
    // ...taskは、「そのタスクの他のプロパティ(IDやtext)はそのままコピーする」という意味。

  };

  // 削除ボタンが押されたとき
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  // .filter(条件)は、「配列の各要素に対して指定した条件をチェックし、その条件を満たす要素だけを残して、新しい配列を作成する」という意味。
  // task => は、「ひとつずつの要素をtaskという名前で扱う」という意味。
  // task.id !== idは、「そのタスクのIDが引数として渡されたIDと異なる場合にtrueを返す」という意味。
  // つまり、この条件を満たすタスクだけが新しい配列に残ることになる。


  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Todo List
        </h1>

        {/* 入力エリア */}
        <div className="flex gap-2 mb-8">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="新しいタスクを入力..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          >
            追加
          </button>
        </div>

        {/* タスクリスト */}
        <ul className="space-y-3">
          {tasks.map(task => (
            <li
              key={task.id}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 text-blue-500 rounded focus:ring-blue-400"
              />
              <span
                className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                削除
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            まだタスクがありません。上の欄から追加してみましょう！
          </p>
        )}
      </div>
    </div>
  );
}

export default App;