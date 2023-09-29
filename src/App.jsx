import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import validarEntrada from "./utils/automata";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [validationResult, setValidationResult] = useState({
    isSubmitted: false,
    isValid: false,
    estado: 0,
    recorrido: ""
  });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const result = validarEntrada(inputValue);
    setValidationResult({
      isSubmitted: true,
      isValid: result.esValido,
      estado: result.estado,
      recorrido: result.recorrido
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
  <div className="flex flex-col items-center justify-center p-8 rounded bg-white shadow-md">
    <h1 className="text-3xl font-bold mb-4">Ingresa la cadena a evaluar</h1>
    <div className="flex justify-center items-center mb-4">
      <Input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Escribe la cadena"
        className="border rounded p-2 mr-2"
      />
      <Button onClick={handleButtonClick} label="Verificar" className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-700" />
    </div>
    {validationResult.isSubmitted && (
      <>
        {validationResult.isValid ? (
          <p className="text-black-500">Entrada válida</p>
        ) : (
          <p className="text-red-500">
            Entrada inválida, llego hasta q{validationResult.estado}
          </p>
        )}
        <p className="text-black-500 mt-2">Recorrido</p>
        <p className="text-black-500">{validationResult.recorrido}</p>
      </>
    )}
  </div>
</div>
  )
}

export default App;
