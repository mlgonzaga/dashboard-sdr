import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Upload from "./Upload";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import Support from "./Support";

export default function RouteGroup() {
    const [activeComponent, setActiveComponent] = useState<string>();
    const location = useLocation()
  
  
    useEffect(() => {
      switch(location.pathname) {
        case("/upload"): {
          setActiveComponent("Upload")
          break
        }
        case("/dashboard"):{
          setActiveComponent("Dashboard")
          break
        }
        case("/support"): {
          setActiveComponent("Support")
          break
        }
        default:
          setActiveComponent("Dashboard")
        }
      
    }, [location]);
  
  
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col w-full min-h-screen bg-zinc-50">
                <Navbar setActiveComponent={setActiveComponent} />
  
                <div className="flex flex-1 items-center justify-center my-20 ">
                  {activeComponent === "Dashboard" && <Dashboard />}
                </div>
              </div>
            }
          />
          <Route
            path="/upload"
            element={
              <div className="flex flex-col w-full min-h-screen bg-gradient-to-r bg-zinc-50">
                <Navbar setActiveComponent={setActiveComponent} />
  
                <div className="flex flex-1 items-center justify-center my-20 ">
                  {activeComponent === "Upload" && <Upload />}
                </div>
              </div>
            }
          />
          <Route
            path="/support"
            element={
              <div className="flex flex-col w-full min-h-screen bg-gradient-to-r bg-zinc-50">
                <Navbar setActiveComponent={setActiveComponent} />
  
                <div className="flex flex-1 items-center justify-center my-20 ">
                  {activeComponent === "Support" && <Support />}
                </div>
              </div>
            }
          />
        </Routes>
      </>
    );
}