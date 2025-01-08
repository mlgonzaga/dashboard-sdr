import { CircleChevronLeft, X } from "lucide-react";
import React, { useState } from "react";

const mockClientes = [
    { "id": 1, "nome": "Empresa Alpha" },
    { "id": 2, "nome": "Beta Corp" },
    { "id": 3, "nome": "Gamma Solutions" },
    { "id": 4, "nome": "Delta Technologies" },
    { "id": 5, "nome": "Epsilon Innovations" },
    { "id": 6, "nome": "Zeta Group" },
    { "id": 7, "nome": "Theta Enterprises" },
    { "id": 8, "nome": "Iota Systems" },
    { "id": 9, "nome": "Kappa Industries" },
    { "id": 10, "nome": "Lambda Networks" },
    { "id": 11, "nome": "Omicron Solutions" },
    { "id": 12, "nome": "Pi Ventures" },
    { "id": 13, "nome": "Sigma Logistics" },
    { "id": 14, "nome": "Tau Consulting" },
    { "id": 15, "nome": "Omega Enterprises" }
  ]
  

interface MenuAdminProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuAdmin: React.FC<MenuAdminProps> = ({ isOpen, toggleMenu }) => {
  const [search, setSearch] = useState("");

  const filteredClientes = mockClientes.filter((cliente) =>
    cliente.nome.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 z-40 h-full w-64 bg-gray-100 border-r border-gray-200 p-4 shadow-md transition-transform duration-300`}
    >
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 p-2 bg-gray-200 rounded-md"
      >
        {isOpen ? <CircleChevronLeft/> : <X/>}
      </button>
      <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
      <input
        type="text"
        placeholder="Buscar cliente..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-3 py-2 mb-4 border rounded-md"
      />
      
     {filteredClientes.length === 0 ? (
        <p className="text-red-500">Cliente não encontrado</p> // Mensagem de cliente não encontrado
) : (
      <ul className="space-y-2">
        {filteredClientes.map((cliente) => (
          <li
            key={cliente.id}
            className="px-3 py-2 bg-white rounded-md shadow-sm hover:bg-gray-200 cursor-pointer"
          >
            {cliente.nome}
          </li>
        ))}
      </ul>
    )}
    </aside>
  );
};

export default MenuAdmin;

