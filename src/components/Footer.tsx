const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80">
      <span>
        &copy; {new Date().getFullYear()} Tarambana Run. All rights reserved.
      </span>
      <span>
        Built with{" "}
        <a
          href="https://nextjs.org"
          className="underline hover:text-blue-600 dark:hover:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{" "}
        &amp;{" "}
        <a
          href="https://tailwindcss.com"
          className="underline hover:text-blue-600 dark:hover:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        .
      </span>
    </footer>
  );
};

export default Footer;
