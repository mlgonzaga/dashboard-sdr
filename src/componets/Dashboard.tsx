import {
  CircleCheckBig,
  DollarSign,
  Download,
  RefreshCw,
  ThumbsUp,
} from "lucide-react";
import GraficFunnel from "./GraficFunnel";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full max-w-[1378px] mx-auto p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-white font-roboto font-bold text-2xl sm:text-4xl mb-4 sm:mb-0">
          Dashboard
        </h1>
        <input
          className="w-full sm:w-[196px] h-[46px] text-center text-slate-600 font-medium p-2 rounded-md "
          type="date"
          placeholder="dd/mm/aaaa"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center gap-6">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-center lg:w-1/2">
          <div className="bg-white rounded-md w-full max-w-[547px] h-[357px] mb-6 text-slate-600 font-medium">
            <div className="flex items-center gap-1 p-2">
              <Download />
              <span>Leads que entraram</span>
            </div>
            <GraficFunnel />
          </div>
          <div className="bg-white rounded-md w-full max-w-[547px] h-[106px] flex flex-col text-slate-600 font-medium">
            <div className="flex items-center gap-1 p-2">
              <DollarSign />
              <span>Custo de qualificação</span>
            </div>
            <span className="ml-4 text-2xl">R$50,00</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col lg:w-1/2 gap-5">
          {[
            {
              icon: <ThumbsUp />,
              label: "Leads qualificados",
              value: "20",
            },
            {
              icon: <CircleCheckBig />,
              label: "Custo de qualificação",
              value: "20",
            },
            {
              icon: <RefreshCw />,
              label: "Leads que foram pro closer",
              value: "20",
            },
            {
              label: "Sem conteúdo",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md w-full max-w-[547px] h-[106px] flex flex-col text-slate-600 font-medium"
            >
              <div className="flex items-center gap-1 p-2">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.value && (
                <span className="ml-4 text-3xl">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
