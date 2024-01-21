
//Reacr Hooks
import { useState } from "react";

//import
import "./style/App.css";
import Calculator from "./components/Calculator";
import Table from "./components/Table";



function App() {
  return (
    <>
      <main className="w-screen h-screen bg-zinc-950 flex flex-col items-center">

        <img src="/Logo.png" alt="Logo"  className="w-40"/>
        <h1 className="font-sans text-4xl font-black text-zinc-300">Investment Calculator</h1>

        <Calculator></Calculator>
        <Table/>


      </main>
    </>
  );
}

export default App;
