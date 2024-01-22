

import { useState } from "react";



export default function Calculator({onValuesChange}) {

    const [initialInvestment, setInitialInvestment] = useState('');
    const [annualInvestment, setAnnualInvestment] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');

    function handleInitialInvestmentChange(e) {
        setInitialInvestment(e.target.value);
        updateValues();
    }

    function handleAnnualInvestmentChange(e) {
        setAnnualInvestment(e.target.value);
        updateValues();
    }

    function handleExpectedReturnChange(e) {
        setExpectedReturn(e.target.value);
        updateValues();
    }

    function handleDurationChange(e) {
        setDuration(e.target.value);
        updateValues();
    }

    function updateValues() {
        onValuesChange({
            initialInvestment,
            annualInvestment,
            expectedReturn,
            duration
        });
    }


    return <section className="w-[40rem] h-[10rem] bg-slate-600 mt-10 rounded p-4 grid grid-cols-2 gap-4">

        <div className="flex flex-col">
            <label className="text-xs font-semibold">INITIAL INVESTMENT</label>
            <input type="text"  className="rounded bg-transparent border-2 border-slate-400  focus:outline-none" value={initialInvestment} onChange={handleInitialInvestmentChange}/>
        </div>

        <div className="flex flex-col">
            <label className="text-xs font-semibold">ANNUAL INVESTMENT</label>
            <input type="text"  className="rounded bg-transparent border-2 border-slate-400  focus:outline-none" value={annualInvestment} onChange={handleAnnualInvestmentChange}/>
        </div>

        <div className="flex flex-col">
            <label className="text-xs font-semibold">EXPECTED RETURN</label>
            <input type="text"  className="rounded bg-transparent border-2 border-slate-400  focus:outline-none" value={expectedReturn} onChange={handleExpectedReturnChange}/>
        </div>

        <div className="flex flex-col">
            <label className="text-xs font-semibold">DURATION</label>
            <input type="text"  className="rounded bg-transparent border-2 border-slate-400  focus:outline-none" value={duration} onChange={handleDurationChange}/>
        </div>

    </section>
}