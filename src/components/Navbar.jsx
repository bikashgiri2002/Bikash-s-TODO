import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="sticky top-0 right-0 left-0 flex justify-between items-center px-6 py-4 shadow-lg bg-white dark:bg-gray-800">
      <div className="text-xl font-bold text-gray-800 dark:text-gray-100">{"Bikash's TodoList"}</div>
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        <span>{theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          {theme === "dark" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v3m0 12v3m9-9h-3m-12 0H3m16.364 6.364l-2.122-2.122M6.343 6.343L4.222 4.222m12.142 12.142l2.122 2.122M6.343 17.657l-2.122 2.122"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2.25c5.376 0 9.75 4.374 9.75 9.75s-4.374 9.75-9.75 9.75S2.25 17.376 2.25 12 6.624 2.25 12 2.25zM12 6a6 6 0 100 12 6 6 0 000-12z"
            />
          )}
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
