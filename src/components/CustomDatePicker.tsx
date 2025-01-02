import React, { useState } from "react";
import { Calendar } from "lucide-react"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale"

const CustomDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="relative w-full max-w-sm">
      <div className="flex items-center justify-center sm:justify-end">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/aaaa"
          locale={ptBR}
          className="w-full sm:w-[196px] h-[46px] text-center text-zinc-600 font-medium p-2 border-2 rounded-md border-solid border-zinc-300 focus:border-zinc-600 hover:border-zinc-600"
        />
        <button
          type="button"
          className="px-3 py-2 border-l bg-zinc-50 border-2 border-solid border-zinc-300 dark:bg-gray-700 dark:text-gray-200 rounded-r-md hover:bg-gray-300 dark:hover:bg-gray-600"
          onClick={() => {
            const inputElement = document.querySelector(".react-datepicker__input-container input");
            if (inputElement && inputElement instanceof HTMLInputElement) {
              inputElement.focus();
            }
          }}
        >
          <Calendar className="bg-zinc-50 text-zinc-500 hover:bg-zinc-300" size={26} />
        </button>
      </div>
    </div>
  );
};

export default CustomDatePicker;


