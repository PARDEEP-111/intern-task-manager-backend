import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full border-t border-secondary bg-surface px-4 sm:px-6 py-3 mt-auto">
            {/* Top section */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 ">
                <div className="flex flex-col items-center sm:items-start ">
                    <p className="text-heading text-sm">Stay organized. Get things done.</p>
                </div>

                <div className="flex gap-4">
                    <a href="https://github.com/PARDEEP-111" target="_blank" rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-secondary hover:text-heading transition-colors">
                        <FaGithub size={21} />
                    </a>

                    <a href="https://www.linkedin.com/in/pardeep-singh-27ba483a3/" target="_blank" rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-secondary hover:text-blue-600 transition-colors">
                        <FaLinkedin size={21} />
                    </a>
                </div>

            </div>

            {/* Bottom section */}
            <div className="border-t border-border pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">

                <p className="text-secondary text-xs">
                    © 2026 Task Manager. All rights reserved.
                </p>

                <p className="text-secondary text-xs">
                    Made by <span className="text-heading font-semibold">Pardeep</span>
                </p>

            </div>
        </footer>
    );
};

export default Footer;