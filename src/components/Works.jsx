import TodoApp from "./works/TodoApp";
import Reservation from "./works/ReservationApp";
import WorkCard from "./WorkCard";
import { works } from "../data/works";
import CustomerApp from "./works/CustomerApp";

const Works = () => {
  return (
    <section id="works" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-10" data-aos="zoom-in">

      <h2 className="text-3xl font-bold text-center mb-12 text-[#6b5e4f]">
        Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {works.map((work) => (
          <WorkCard key={work.title} work={work} />
        ))}

      </div>

      <div id="todo-demo" className="mt-16">
        <TodoApp />
      </div>

      <div id="reservation-demo" className="mt-16">
        <Reservation />
      </div>

      <div id="customer-demo" className="mt-16">
        <CustomerApp />
      </div>

    </section>
  );
};

export default Works;