import { services } from "../data/services";

const Services = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-12 text-[#6b5e4f]">
        Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-3 text-[#6b5e4f]">
              {service.title}
            </h3>

            <p className="text-stone-600">
              {service.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;