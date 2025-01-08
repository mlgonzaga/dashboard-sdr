

import { CloudUpload, X } from "lucide-react";
import { useRef, useState } from "react";

const Upload: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addFiles(Array.from(e.target.files));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(Array.from(e.dataTransfer.files));
  };

  const addFiles = (newFiles: File[]) => {
    const uniqueFiles = newFiles.filter(
      (file) => !files.some((f) => f.name === file.name && f.size === file.size)
    );

    if (files.length + uniqueFiles.length > 15) {
      setErrorMessage("Você só pode enviar no máximo 2 arquivos.");
      return;
    }

    setFiles((prev) => [...prev, ...uniqueFiles]);
    setErrorMessage(null); // Limpar a mensagem de erro caso o usuário corrija
  };

  const handleRemoveFile = (fileName: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
    setErrorMessage(null); // Limpar a mensagem de erro ao remover
  };

  const handleSubmit = () => {
    console.log("Arquivos enviados:", files);
  };

  return (
    <form
      className="flex flex-col align-top w-auto sm:w-[500px]"
      action="/submit"
    >
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role="button"
        tabIndex={0}
        className={`input-field flex flex-col items-center justify-center border-4 border-dashed h-[300px] text-zinc-400 rounded-xl relative hover:opacity-60 shadow-lg cursor-pointer ${
          isDragging ? "bg-blue-600 border-blue-700" : "bg-zinc-100 border-zinc-400"
        }`}
      >
        <input
          ref={inputRef}
          className="cursor-pointer"
          type="file"
          name="file"
          accept=".txt,.pdf"
          hidden
          onChange={handleFileSelect}
        />
        <CloudUpload
          className={`font-medium w-[100px] h-[100px] ${
            isDragging ? "text-blue-700" : "bg-zinc-100"
          }`}
        />
        <span
          className={`text-center p-2 ${
            isDragging ? "bg-blue-600" : "bg-zinc-100"
          }`}
        >
          Arraste e solte aqui ou clique para importar localmente
        </span>
      </div>

      {/* Exibir mensagem de erro */}
      {errorMessage && (
        <div className="mt-2 text-red-500 text-sm font-medium">{errorMessage}</div>
      )}

      <div className="flex flex-col mt-4 space-y-2">
        <ul className="max-h-[150px] overflow-y-auto space-y-2">
          {files.map((file) => (
            <li
              key={file.name}
              className="flex justify-between items-center border-b pb-2"
            >
              <div className="overflow-hidden text-ellipsis">
                <p>{file.name}</p>
                <p className="text-sm text-gray-500">
                  {`${(file.size / 1024).toFixed(2)} KB`} - {file.type || "N/A"}
                </p>
              </div>
              <button
                 onClick={() => handleRemoveFile(file.name)}
                className="text-zinc-500 hover:text-zinc-700 font-medium"
              >
                <X />
            </button>
            </li>
          ))}
        </ul>

        {files.length > 0 && (
          <button
            type="submit"
            onClick={handleSubmit}
            className="self-end mt-4 rounded-md px-4 py-2 bg-zinc-500 text-zinc-50 font-medium hover:opacity-75"
          >
            Enviar Arquivos
          </button>
        )}
      </div>
    </form>
  );
};

export default Upload;
