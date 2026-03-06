import TodoApp from "./works/TodoApp";

const Works = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-12 text-[#6b5e4f]">
        Works
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/* 制作物カード */}
        <div className="bg-white/80 rounded-2xl shadow-lg p-6">

          <h3 className="text-xl font-semibold mb-2 text-[#6b5e4f]">
            Todo App
          </h3>

          <p className="text-sm text-stone-500 mb-4">
            React / Tailwind
          </p>

          <p className="text-stone-600 mb-6">
            タスクを管理できるTodoアプリです。
            追加・編集・削除・フィルター機能を実装しています。
          </p>

          <div className="flex gap-4">

            <a
              href="#todo-demo"
              className="px-4 py-2 bg-[#a67c52] text-white rounded-lg text-sm"
            >
              Demo
            </a>

            <a
              href="#"
              className="px-4 py-2 border border-stone-300 rounded-lg text-sm text-[#6b5e4f]"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>
      <div id="todo-demo" className="mt-16">
        <TodoApp />
      </div>
    </section>
  );
};

export default Works;