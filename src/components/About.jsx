const About = () => {
    return (
        <section id="about" className="py-20 px-6 max-w-4xl mx-auto">

            <h2 className="text-3xl font-bold text-center text-[#6b5e4f] mb-10">
                About
            </h2>

            <p className="text-center text-stone-600 mb-12">
                フロントエンドを中心にWeb制作を行っています。
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-stone-600">

                <div className="bg-white p-6 rounded-xl shadow">
                    React
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    JavaScript
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    Tailwind
                </div>

                <div className="bg-white p-6 rounded-xl shadow">
                    HTML / CSS
                </div>

            </div>

        </section>
    );
};

export default About;