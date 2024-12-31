import React, { useState } from "react";
import { Calendar } from "lucide-react"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from "date-fns/locale"

const CustomDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="relative w-full max-w-sm">
      <div className="flex items-center">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/aaaa"
          locale={ptBR}
          className="w-full px-3 py-2 border rounded-l-md text-gray-700 focus:outline-none focus:ring-2  dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600"
        />
        <button
          type="button"
          className="px-3 py-2 border-l bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-r-md hover:bg-gray-300 dark:hover:bg-gray-600"
          onClick={() => {
            const inputElement = document.querySelector(".react-datepicker__input-container input");
            if (inputElement && inputElement instanceof HTMLInputElement) {
              inputElement.focus();
            }
          }}
        >
          <Calendar className="bg-gray-200" size={26} />
        </button>
      </div>
    </div>
  );
};

export default CustomDatePicker;
