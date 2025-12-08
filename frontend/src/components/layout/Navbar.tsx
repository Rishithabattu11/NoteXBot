import { NavLink } from "react-router-dom";

const baseLinkClasses =
  "text-xl font-medium text-slate-300 px-4 py-2 rounded-lg transition-colors hover:text-white hover:bg-slate-600/80";

const activeLinkClasses =
  "bg-indigo-600/40 text-white rounded-lg shadow-inner shadow-indigo-500/30 border border-indigo-500/60";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-30 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="w-full px-6 h-20 flex items-center justify-between ">
        {/* Logo */}
        <div className=" flex items-center gap-2">
          <div className="h-7 w-7 rounded-xl bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">
            N
          </div>
          <span className="text-xl font-semibold text-slate-100">
            Note<span className="text-indigo-400">X</span>Bot
          </span>
        </div>

        {/* Center nav links */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/notes"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
            }
          >
            Notes
          </NavLink>

          <NavLink
            to="/documents"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
            }
          >
            Documents
          </NavLink>

          <NavLink
            to="/ai"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
            }
          >
            AI Assistant
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : ""}`
            }
          >
            Search
          </NavLink>
        </nav>

        {/* Right side: Login */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/auth"
            className="text-xl font-medium text-slate-300 hover:text-white flex items-center gap-1"
          >
            Log in <span aria-hidden>→</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
