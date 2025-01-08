import { Link } from "react-router-dom";

interface NavbarProps {
  setActiveComponent: (component: string) => void;
}

export default function Navbar({ setActiveComponent }: NavbarProps) {
  return (
    <div className="w-full">
      <nav className="drop-shadow-md grid grid-cols-1  sm:grid-cols-5 items-center justify-between rounded-b-md w-full h-auto sm:h-44  bg-zinc-400 px-4 py-4">
        {/* Logo */}
        <div className="col-span-2 h-20 sm:h-40 place-self-center">
          <img
            className="h-full rounded-full mx-auto sm:mx-0"
            src="/logo-biofy.png"
            alt="Logo Biofy"
          />
        </div>

        {/* Navigation Links */}
        
          <div className="flex flex-col sm:flex-row items-center sm:items-end mb-1 sm:mb-10 justify-center sm:justify-start gap-4 sm:gap-12 col-span-3 h-full">
            <Link
              to="/dashboard"
              className="text-zinc-50 font-medium hover:underline"
              onClick={() => setActiveComponent("Dashboard")}
            >
              Seu SDR
            </Link>
            <Link
              to="/upload"
              className="text-zinc-50 font-medium hover:underline "
              onClick={() => setActiveComponent("Upload")}
            >
              Upload de arquivos
            </Link>
            <Link
              to="/support"
              className="text-zinc-50 font-medium hover:underline"
              onClick={() => setActiveComponent("Support")}
            >
              Suporte
            </Link>
          </div>
        
      </nav>
    </div>
  );
}
