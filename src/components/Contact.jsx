import { useState } from "react";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 px-6 max-w-3xl mx-auto scroll-mt-10" data-aos="fade-up">

            <h2 className="text-3xl font-bold text-[#6b5e4f] text-center mb-10 " >
                Contact
            </h2>

            <form
                action="https://formspree.io/f/xvzwpbgd"
                method="POST"
                className="bg-white p-8 rounded-2xl text-[#6b5e4f] shadow-lg space-y-6"
            >

                <div>
                    <label className="block text-sm mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a67c52]"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a67c52]"
                    />
                </div>

                <div>
                    <label className="block text-sm mb-2">Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a67c52]"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#a67c52] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
                >
                    Send Message
                </button>

            </form>

        </section>
    );
};

export default Contact;