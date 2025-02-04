import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Upload from "./Upload";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import SupportForm from "./SupportForm";
import { Menu } from "lucide-react";
import MenuAdmin from "./MenuAdmin";
import Login from "./Login";

const mockUser = {
  id: 3,
  email: "usuario1@biofy.com",
  role: "admin",
};

export default function RouteGroup() {
  const [activeComponent, setActiveComponent] = useState<string>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/upload": {
        setActiveComponent("Upload");
        break;
      }
      case "/dashboard": {
        setActiveComponent("Dashboard");
        break;
      }
      case "/support": {
        setActiveComponent("Support");
        break;
      }
      default:
        setActiveComponent("/");
    }
  }, [location]);

   // Simulação de autenticação
  const isAuthenticated = mockUser !== null
  const isAdmin = mockUser.role === "admin";

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="flex w-full min-h-screen bg-zinc-50">
      {/* Botão de hambúrguer - Apenas para usuários autenticados */}
      {isAuthenticated && isAdmin && location.pathname !== "/" && !isMenuOpen && (
  <button
    onClick={toggleMenu}
    className="fixed top-4 left-4 z-50 bg-zinc-50 p-2 rounded-md shadow-md text-zinc-500"
  >
    <Menu />
  </button>
)}

      {/* MenuAdmin - Apenas para usuários autenticados */}
      {isAuthenticated && isAdmin && <MenuAdmin isOpen={isMenuOpen} toggleMenu={toggleMenu} />}

      {/* Main Content */}
      <div
        className={`flex-1 ${isMenuOpen ? "ml-64" : "ml-0"} sm:ml-0 transition-all duration-300`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-1 items-center justify-center my-10 sm:mx-5">
                <Login />
              </div>
            }
          />

          <Route
            path="/dashboard"
            element={
              <div className="flex flex-col w-full min-h-screen">
                <Navbar setActiveComponent={setActiveComponent} />
                <div className="flex flex-1 items-center justify-center my-10 sm:mx-5">
                  {activeComponent === "Dashboard" && <Dashboard />}
                </div>
              </div>
            }
          />
          <Route
            path="/upload"
            element={
              <div className="flex flex-col w-full min-h-screen">
                <Navbar setActiveComponent={setActiveComponent} />
                <div className="flex flex-1 items-start justify-center my-20">
                  {activeComponent === "Upload" && <Upload />}
                </div>
              </div>
            }
          />
          <Route
            path="/support"
            element={
              <div className="flex flex-col w-full min-h-screen">
                <Navbar setActiveComponent={setActiveComponent} />
                <div className="flex flex-1 items-center justify-center my-20">
                  {activeComponent === "Support" && <SupportForm />}
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
