import { Hamburger, Ruler } from "phosphor-react";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [imc, setImc] = useState("");

  return (
    <div className="h-screen flex flex-col items-center bg-neutral-800 text-neutral-100 justify-around">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-center">Calculadora de IMC</h1>
        <p>(Índice de massa corporal)</p>
      </div>
      <div className="bg-neutral-500 h-96 w-[90%] sm:w-4/5 rounded-xl flex flex-col">
        {showResult ? (
          <h2 className="flex justify-center text-4xl flex-1 items-center">
            Seu IMC é de {Math.round(imc)}
          </h2>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setImc(weight.value / (height.value / 100) ** 2);
              setShowResult(true);
            }}
            className="flex flex-col flex-1"
          >
            <div className="flex-1 flex flex-col justify-around">
              <Input
                placeholder="Seu peso..."
                type="number"
                icon={<Hamburger size={32} />}
                id="weight"
              >
                Digite seu peso em Kg *
              </Input>
              <Input
                placeholder="Sua altura..."
                type="number"
                icon={<Ruler size={32} />}
                id="height"
              >
                Digite sua altura em centímetros *
              </Input>
            </div>
            <Button />
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
