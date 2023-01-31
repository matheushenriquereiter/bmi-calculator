import { useState } from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Description } from "./components/Description";

export function App() {
  const [showResult, setShowResult] = useState(false);
  const [imc, setImc] = useState("");

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-[#090e23] font-bold text-[#eee]">
      <div className="flex h-full w-full max-w-[640px] flex-col justify-center rounded-md bg-[#1D1E34] p-[32px] sm:h-fit">
        {!showResult ? (
          <div className="flex flex-col items-center pb-[42px]">
            <h1 className="text-center text-3xl">Calculadora de IMC</h1>
            <p className="text-sm">(Índice de massa corporal)</p>
          </div>
        ) : null}
        {showResult ? (
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl">Seu IMC é de {Math.round(imc)}</h2>
            <Description imc={imc} />
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setImc(weight.value / (height.value / 100) ** 2);
              setShowResult(true);
            }}
            className="flex flex-col gap-[32px]"
          >
            <div className="flex flex-col gap-[24px]">
              <Input placeholder="Seu peso..." type="number" id="weight">
                Digite seu peso em Kg *
              </Input>
              <Input placeholder="Sua altura..." type="number" id="height">
                Digite sua altura em centímetros *
              </Input>
            </div>
            <div className="flex gap-[16px]">
              <Button type="submit" name="Calcular" backgroundColor="#DF3C36" />
              <Button type="reset" name="Limpar" backgroundColor="#403F44" />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
