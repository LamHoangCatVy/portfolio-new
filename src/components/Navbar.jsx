import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <aside className="flex flex-col w-full h-full p-6 text-white">
      <div className="flex flex-col items-center mb-10">
        <img src="../src/assets/image.png" alt="avatar" className="w-16 h-16 rounded-full" />
        <h2 className="mt-4 text-2xl font-bold">Cat Vy</h2>
        <p className="text-sm text-gray-400">AI Product Owner</p>
      </div>

      <nav className="flex flex-col gap-2 w-full">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium w-full text-left transition ${
                isActive ? "bg-blue-600 text-white" : "hover:bg-gray-700"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
