// components/MobileMenu.jsx
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onEsc = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [menuOpen, setMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Awards", path: "/awards" },
    { name: "Certificates", path: "/certificate" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Topbar (mobile only) */}
      <nav className="md:hidden fixed top-0 w-full z-40">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-2 h-14 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.35)] flex items-center justify-between px-4">
            <Link to="/" className="text-lg font-semibold text-white">
              Thawin’s <span className="gradient-monochrome-text">Portfolio</span>
            </Link>

            {/* ซ่อนปุ่มแฮมเบอร์เกอร์เมื่อเมนูเปิด เพื่อไม่ให้ทับกับปุ่ม X ในแผง */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`w-9 h-9 grid place-items-center rounded-lg border border-white/15 bg-white/10 text-white transition
                ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
              `}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="text-xl leading-none">{menuOpen ? "✕" : "≡"}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      </div>

      {/* Slide-in panel (อยู่เหนือ Topbar) */}
      <aside
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-72 max-w-[85%]
          border-l border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_10px_28px_rgba(0,0,0,0.45)]
          transition-transform duration-300 ease-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
      >
        {/* liquid blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-10 -left-16 w-48 h-48 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.28),rgba(0,0,0,0))] blur-2xl" />
          <div className="absolute bottom-10 -right-10 w-56 h-56 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.22),rgba(0,0,0,0))] blur-2xl" />
        </div>

        {/* ปุ่ม X ของแผงเมนู (ตัวที่ต้องแสดงเมื่อเปิด) */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl text-white"
          aria-label="Close Menu"
        >
          &times;
        </button>

        <ul className="mt-16 mb-6 flex flex-col gap-1 px-3">
          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <li key={item.path} className="group relative">
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 text-lg font-medium rounded-lg transition
                    ${active ? "text-white bg-white/15" : "text-white/85 hover:text-white hover:bg-white/10"}
                  `}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/10 transition-colors" />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="px-4 pb-6 text-xs text-white/60">
          © {new Date().getFullYear()} Thawin — Portfolio
        </div>
      </aside>
    </>
  );
};
