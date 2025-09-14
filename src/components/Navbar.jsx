// components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Awards", path: "/awards" },
    { name: "Certificates", path: "/certificate" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="hidden md:block fixed top-0 w-full z-50">
      {/* Liquid background layer */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-24 w-80 h-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.25),rgba(0,0,0,0))] blur-2xl" />
        <div className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.18),rgba(0,0,0,0))] blur-2xl" />
      </div>

      {/* Glass bar */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 h-19 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_10px_28px_rgba(0,0,0,0.35)]">
          <div className="h-full flex items-center justify-between px-4">
            {/* Brand */}
            <Link
              to="/"
              className="relative font-sans text-2xl font-semibold text-white"
            >
              Thawin’s <span className="gradient-monochrome-text">Portfolio</span>
              {/* subtle glow */}
              <span className="pointer-events-none absolute -inset-2 rounded-xl blur-md bg-white/0 group-hover:bg-white/5 transition" />
            </Link>

            {/* Nav items */}
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const active = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`relative mx-2 px-3 py-1.5 rounded-lg text-[15px] transition
                        ${active ? "text-white" : "text-white/80 hover:text-white"}
                      `}
                    >
                      {/* Liquid hover background */}
                      <span className="absolute inset-0 rounded-lg bg-white/0 hover:bg-white/10 transition-colors" />
                      <span className="relative z-10">{item.name}</span>
                      {/* underline */}
                      <span
                        className={`absolute left-3 right-3 -bottom-[2px] h-[2px] rounded-full bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400 transition-all duration-300
                          ${active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"}
                        `}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
