import {
  CircleCheckBig,
  DollarSign,
  Download,
  FilterX,
  MessageSquareX,
  RefreshCw,
  ThumbsUp,
} from "lucide-react";
import OtherFunnel from "./FunnelChart";
import CustomDatePicker from "./CustomDatePicker";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full max-w-[1378px] mx-auto p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-zinc-500 font-roboto font-bold text-2xl sm:text-4xl mb-4 sm:mb-0 ">
          Dashboard
        </h1>
        <CustomDatePicker/>
       
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center gap-6">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-center lg:w-1/2">
          <div className="bg-white rounded-lg w-full max-w-[547px] h-[357px] mb-6 text-slate-600 font-medium border-2 drop-shadow-md">
            <div className="flex items-center gap-2 p-2">
              <Download />
              <span>Leads que entraram</span> 
            </div>
            <OtherFunnel/>
          </div>
          <div className="bg-white rounded-lg w-full max-w-[547px] h-[106px] flex flex-col text-slate-600 font-medium border-2 drop-shadow-md">
            <div className="flex items-center gap-1 p-2">
              <DollarSign />
              <span>Custo de qualificação</span>
            </div>
            <span className="ml-4 text-2xl">R$50,00</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap lg:w-1/2 gap-5">
          {[
            {
              icon: <ThumbsUp />,
              label: "Leads qualificados",
              value: "20",
            },
            {
              icon: <FilterX />,
              label: "Leads não qualificados",
              value: "20",
            },
            {
              icon: <MessageSquareX />,
              label: "Leads que não responderam",
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
              icon:"-",
              label: "Sem conteúdo",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg w-full max-w-[547px] h-[106px] sm:max-w-[270px] flex flex-col text-slate-600 font-medium border-2 drop-shadow-md"
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
