
//Reacr Hooks
import { useState } from "react";

//import
import "./style/App.css";
import Calculator from "./components/Calculator";
import Table from "./components/Table";



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

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange( inputIdentifier, newValue ) {
    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });

  };

  const inputIsValid = userInput.duration >= 1;
  

  // function formatCurrency(value) {
  //   return isNaN(value) ? '-' : formatter(value);
  // }
  

  return (
    <>
      <main className="w-screen h-screen bg-zinc-950 flex flex-col items-center">

        <img src="/Logo.png" alt="Logo"  className="w-40"/>
        <h1 className="font-sans text-4xl font-black text-zinc-300">Investment Calculator</h1>

        <Calculator onChange={handleChange} userInput={userInput} />

        { inputIsValid && <Table input={userInput} />}
        { !inputIsValid && <p className="mt-5">Please enter a duration greater than zero.</p>}

      </main>
    </>
  );
}

export default App;
