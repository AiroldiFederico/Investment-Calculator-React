
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

    // Assicurati che tutti i valori siano definiti e non nulli prima di calcolare
    if (newValues.initialInvestment && newValues.annualInvestment && newValues.expectedReturn && newValues.duration) {
      const investmentResults = calculateInvestmentResults({
        initialInvestment: parseFloat(newValues.initialInvestment) || 0,
        annualInvestment: parseFloat(newValues.annualInvestment) || 0,
        expectedReturn: parseFloat(newValues.expectedReturn) || 0,
        duration: parseInt(newValues.duration) || 0,
      });
      console.log(investmentResults);
      setValues(investmentResults);
    }
  }


  function formatCurrency(value) {
    return isNaN(value) ? '-' : formatter(value);
  }
  

  return (
    <>
      <main className="w-screen h-screen bg-zinc-950 flex flex-col items-center">

        <img src="/Logo.png" alt="Logo"  className="w-40"/>
        <h1 className="font-sans text-4xl font-black text-zinc-300">Investment Calculator</h1>

        <Calculator onValuesChange={handleCalculatorValuesChange} />

        <Table dataValues={values} formatCurrency={formatCurrency} />

        {/* <button onClick={handleStampvalues}>click</button> */}

      </main>
    </>
  );
}

export default App;
