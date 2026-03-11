const WorkCard = ({ work }) => {
    return (
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

            {work.image && (
                <img
                    src={work.image}
                    alt={work.title}
                    className="rounded-lg mb-4"
                />
            )}

            <h3 className="text-xl font-semibold mb-2 text-[#6b5e4f]">
                {work.title}
            </h3>

            <p className="text-sm text-stone-500 mb-4">
                {work.tech}
            </p>

            <p className="text-stone-600 mb-6">
                {work.description}
            </p>

            <div className="flex gap-4">

                {work.demo && (
                    <a
                        href={work.demo}
                        className="px-4 py-2 bg-[#a67c52] text-white rounded-lg text-sm hover:opacity-90"
                    >
                        Demo
                    </a>
                )}

                {work.github && (
                    <a
                        href={work.github}
                        className="px-4 py-2 border border-stone-300 rounded-lg text-sm text-[#6b5e4f]"
                    >
                        GitHub
                    </a>
                )}

            </div>
        </div>
    );
};

export default WorkCard;