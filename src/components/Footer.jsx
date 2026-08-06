export default function Footer() {
  return (
    <footer className="w-full border-t border-[#222225] bg-[#080809] text-[#fbf9f9]">
      <div className="flex flex-col md:flex-row justify-between items-center py-8 px-6 md:px-16 w-full max-w-[1280px] mx-auto gap-4 md:gap-0">
        <p className="font-body-md text-[#8e8e93] text-sm text-center md:text-left">
          © 2026 Avinash Verma. Designed and developed with a focus on simplicity, usability, and thoughtful user experiences.
        </p>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-label text-xs text-[#8e8e93] hover:text-[#ffffff] hover:underline transition-all uppercase tracking-wider"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-label text-xs text-[#8e8e93] hover:text-[#ffffff] hover:underline transition-all uppercase tracking-wider"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
