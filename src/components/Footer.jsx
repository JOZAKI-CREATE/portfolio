const Footer = () => {
    return (
        <footer className="mt-20 py-10 text-center text-sm text-stone-500">

            <p className="mb-4">
                © 2026 JOZAKI CREATE. All rights reserved.
            </p>

            <div className="flex justify-center gap-6">

                <a
                    href="https://github.com/JOZAKI-CREATE"
                    target="_blank"
                    className="hover:text-[#a67c52] transition"
                >
                    GitHub
                </a>

                <a
                    href="#"
                    className="hover:text-[#a67c52] transition"
                >
                    X
                </a>

            </div>

        </footer>
    );
};

export default Footer;