import TodoApp from "./works/TodoApp";
import Reservation from "./works/ReservationApp";
import CustomerApp from "./works/CustomerApp";
import WorkCard from "./WorkCard";
import { works } from "../data/works";
import { useState } from "react";

const Works = () => {
  const [activeDemo, setActiveDemo] = useState(null);
  return (
    <section id="works" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-10">

      <h2 className="text-3xl font-bold text-center mb-12 text-[#6b5e4f]">
        Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {works.map((work) => (
          <WorkCard
            key={work.title}
            work={work}
            onDemo={() => setActiveDemo(work.demo)}
          />
        ))}

      </div>

      {activeDemo && (
        <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-10 z-50">

          <div className="bg-white p-8 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">

            <button
              onClick={() => setActiveDemo(null)}
              className="mb-4 text-sm text-stone-500"
            >
              閉じる
            </button>

            {activeDemo === "#todo-demo" && <TodoApp />}
            {activeDemo === "#reservation-demo" && <Reservation />}
            {activeDemo === "#customer-demo" && <CustomerApp />}

          </div>

        </div>
      )}


    </section>



  );
};

export default Works;