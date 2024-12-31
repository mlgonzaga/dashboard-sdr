

interface NavbarProps {
  setActiveComponent: (component: string) => void;
}

export default function Navbar({ setActiveComponent }: NavbarProps) {
  return (
    <div className="w-full">
      <nav className="grid grid-cols-1 sm:grid-cols-5 items-center justify-between rounded-b-md w-full h-auto sm:h-44 bg-gradient-to-r from-zinc-900 to-blue-700 px-4 py-4">
        {/* Logo */}
        <div className="col-span-2 h-20 sm:h-44 place-self-center">
          <img
            className="h-full rounded-full mx-auto sm:mx-0"
            src="/logo-biofy.png"
            alt="Logo Biofy"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-12 col-span-3">
          <button
            className="text-zinc-50 font-medium hover:underline"
            onClick={() => setActiveComponent("Dashboard")}
          >
            Seu SDR
          </button>
          <button
            className="text-zinc-50 font-medium hover:underline"
            onClick={() => setActiveComponent("Upload")}
          >
            Upload de arquivos
          </button>
          <button
            className="text-zinc-50 font-medium hover:underline"
            onClick={() => setActiveComponent("Support")}
          >
            Suporte
          </button>
        </div>
      </nav>
    </div>
  );
}

