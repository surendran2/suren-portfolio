import { portfolioData } from "../../data/portfolioData";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

export default function Footer() {
  const { name, title, socials } = portfolioData.personalInfo;

  const currentYear = new Date().getFullYear();

  const handleNavClick = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black/30 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding */}
        <div className="text-center md:text-left">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("hero");
            }}
            className="text-xl font-heading font-extrabold flex items-center justify-center md:justify-start gap-1 text-slate-800 dark:text-white"
          >
            <span className="text-accent-purple font-mono">&lt;</span>
            Surendran
            <span className="text-accent-blue font-mono">.I /&gt;</span>
          </a>
          <p className="text-xs text-slate-500 dark:text-gray-400 mt-2 max-w-sm">
            {title}
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-gray-400">
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick("about"); }} className="hover:text-accent-purple transition-colors">About</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); handleNavClick("skills"); }} className="hover:text-accent-purple transition-colors">Skills</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); handleNavClick("experience"); }} className="hover:text-accent-purple transition-colors">Experience</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick("projects"); }} className="hover:text-accent-purple transition-colors">Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick("contact"); }} className="hover:text-accent-purple transition-colors">Contact</a>
        </div>

        {/* Right: Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-4">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-accent-purple transition-all"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-accent-purple transition-all"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={socials.email}
              aria-label="Email"
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-accent-purple transition-all"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
          <span className="text-xs text-slate-400 dark:text-gray-500">
            &copy; {currentYear} {name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
