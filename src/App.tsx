import { useState } from "react";
import Navbar from "./componets/Navbar";
import Dashboard from "./componets/Dashboard";

export default function App() {

  const [activeComponent, setActiveComponent] = useState<string>("Dashboard")
  return(
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-r from-[#202020] to-[#172654]">
      <Navbar setActiveComponent={setActiveComponent}/>

      <div className="flex flex-1 items-center justify-center my-20 ">
      
        {activeComponent === "Dashboard" && <Dashboard />}
      </div>
      

    </div>
  )
}
