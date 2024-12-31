import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale"
import { cn } from "@/lib/utils";

const CustomDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="relative">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/mm/aaaa"
        placeholderText="dd/mm/aaaa"
        locale={ptBR}
        className={cn(
          "w-full sm:w-[196px] h-[46px] text-center text-slate-600 font-medium p-2 rounded-md"
        )}
      />
    </div>
  );
};

export default CustomDatePicker;

<input
className="w-full sm:w-[196px] h-[46px] text-center text-slate-600 font-medium p-2 rounded-md"
type="date"
placeholder="dd/mm/aaaa"
>dd/mm/aaaa</input>
