
//Reacr Hooks
import { useState } from "react";

//import
import "./style/App.css";
import Calculator from "./components/Calculator";
import Table from "./components/Table";
import { calculateInvestmentResults, formatter } from "./util/investment";


const tableObj = [
  {
    Year: "1",
    InvestmentValue: "10000",
    Interest: "9999",
    TotalInterest: "4454",
    InvestedCapital: "658"
  }
]

function App() {

  const [values, setValues] = useState([]); // Inizializzato come array vuoto
  const [calculatorValues, setCalculatorValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleCalculatorValuesChange(newValues) {
    setCalculatorValues(newValues);
    const investmentResults = calculateInvestmentResults({
      initialInvestment: parseFloat(newValues.initialInvestment),
      annualInvestment: parseFloat(newValues.annualInvestment),
      expectedReturn: parseFloat(newValues.expectedReturn),
      duration: parseInt(newValues.duration),
    });
    setValues(investmentResults);
  }

  // Funzione per formattare i numeri come valuta, se necessario
  function formatCurrency(value) {
    return formatter.format(value);
  }


  return (
    <>
      <main className="w-screen h-screen bg-zinc-950 flex flex-col items-center">

        <img src="/Logo.png" alt="Logo"  className="w-40"/>
        <h1 className="font-sans text-4xl font-black text-zinc-300">Investment Calculator</h1>

        <Calculator onValuesChange={handleCalculatorValuesChange} />
        <Table values={values} formatCurrency={formatCurrency} />


      </main>
    </>
  );
}

export default App;
