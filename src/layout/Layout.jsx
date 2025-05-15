import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex bg-[#0f172a] text-white min-h-screen">
      {/* Sidebar: fixed on desktop */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-64 bg-[#111827] z-50 shadow-md">
        <Navbar />
      </aside>

      {/* Content scrollable */}
      <main
        className="flex-1 ml-0 md:ml-64 p-6 overflow-y-auto max-h-screen scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-900"
      >
        {children}
      </main>
    </div>
  );
}
