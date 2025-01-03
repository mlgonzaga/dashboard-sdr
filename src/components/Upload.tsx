import { CloudUpload } from "lucide-react";
import { useRef, useState } from "react";

const Upload: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  // Verifica se a div foi clicada e da referencia ao input file
  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addFiles(Array.from(e.target.files));
    }
  };

  // Verifica se o evento de arrastar ocorreu

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // Verifica se o evento de arrastar ocorreu mas não soltou o arquivo
  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // Verifica se o evento de arrastar ocorreu e soltou o arquivo
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(Array.from(e.dataTransfer.files));
  };

  const addFiles = (newFiles: File[]) => {
    const uniqueFiles = newFiles.filter(
      (file) => !files.some((f) => f.name === file.name && f.size === file.size)
    );

    setFiles((prev) => [...prev, ...uniqueFiles]);
  };

  const handleRemoveFile = (fileName: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
  };

  const handleSubmit = () => {
    console.log("Arquivos enviados:", files);
  };

  return (
    <form 
    className="flex flex-col align-top"
    action="/submit">
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        role="button"
        tabIndex={0}
        className={`input-field  flex flex-col items-center justify-center border-4 border-dashed  w-[500px] h-[300px] text-zinc-400 rounded-xl relative hover:opacity-60 shadow-lg cursor-pointer ${isDragging ? "bg-blue-600 border-blue-700" : "bg-zinc-100 border-zinc-400"}`}

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
        <CloudUpload className="font-medium w-[100px] h-[100px] " />
        <span
          className={`text-center p-2 ${isDragging ? "bg-blue-600" : "bg-zinc-100"}`}
        >
          Arraste e solte aqui ou clique para importar localmente
        </span>
      </div>

      {/* Lista de arquivos*/}

      <div className="flex justify-between relative w-300px  border-b-slate-400 max-h-[300px] overflow-y-auto">
        <ul className="mt-4">
          {files.map((file, index) => (
            <li key={file.name} 
            className={`flex flex-col items-start w-[300px] overflow-x-hidden${
              index !== 0 ? "before:content-[''] before:block before:h-[1px] before:w-full before:bg-gray-300 before:my-2" : ""}`}>
              <div>
                <p className="">{file.name}</p>
                <p className="">
                  {`${(file.size / 1024).toFixed(2)} KB`} - {file.type || "N/A"}
                </p>
              </div>
              <button
                onClick={() => handleRemoveFile(file.name)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>

        {/* Botão de submit*/}
        {files.length > 0 && (
          <button type="submit" onClick={handleSubmit} className="absolute right-0 mt-3 rounded-md px-2 bg-zinc-500 text-zinc-50 font-medium hover:opacity-25 delay-150">
            Enviar Arquivos
          </button>
        )}
      </div>
    </form>
  );
};

export default Upload;
