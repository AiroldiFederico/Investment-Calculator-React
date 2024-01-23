

import { useState } from "react";

export default function Calculator({onValuesChange}) {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });


    function handleChange( inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            };
        })
    }


    return <section className="w-[40rem] h-[10rem] bg-slate-600 mt-10 rounded p-4 grid grid-cols-2 gap-4">

        <div className="flex flex-col">
            <label className="text-xs font-semibold">INITIAL INVESTMENT</label>
            <input type="number"  
            className="rounded bg-transparent border-2 border-slate-400  focus:outline-none"
            value={userInput.initialInvestment}
            onChange={ (e) => handleChange('initialInvestment', e.target.value)}
            required />
        </div>

        <div className="flex flex-col">
            <label className="text-xs font-semibold">ANNUAL INVESTMENT</label>
            <input type="number"  
            className="rounded bg-transparent border-2 border-slate-400  focus:outline-none"
            value={userInput.annualInvestment}
            onChange={ (e) => handleChange('annualInvestment', e.target.value)}
            required />
        </div>

        <div className="flex flex-col">
            <label className="text-xs font-semibold">EXPECTED RETURN</label>
            <input type="number"  
            className="rounded bg-transparent border-2 border-slate-400  focus:outline-none"
            value={userInput.expectedReturn}
            onChange={ (e) => handleChange('expectedReturn', e.target.value)}
            required />
        </div>

        <div className="flex flex-col">
            <label className="text-xs font-semibold">DURATION</label>
            <input type="number"  
            className="rounded bg-transparent border-2 border-slate-400  focus:outline-none"
            value={userInput.duration}
            onChange={ (e) => handleChange('duration', e.target.value)}
            required />
        </div>

    </section>
}

//  ------------- OLD ------------

// export default function Calculator({onValuesChange}) {

//     const [initialInvestment, setInitialInvestment] = useState('');
//     const [annualInvestment, setAnnualInvestment] = useState('');
//     const [expectedReturn, setExpectedReturn] = useState('');
//     const [duration, setDuration] = useState('');

//     function handleInitialInvestmentChange(e) {
//         const updatedValue = e.target.value;
//         setInitialInvestment(updatedValue);
//         onValuesChange({
//           initialInvestment: updatedValue,
//           annualInvestment,
//           expectedReturn,
//           duration
//         });
//     }

//     function handleAnnualInvestmentChange(e) {
//         const updatedValue = e.target.value;
//         setAnnualInvestment(updatedValue);
//         onValuesChange({
//           initialInvestment,
//           annualInvestment: updatedValue,
//           expectedReturn,
//           duration
//         });
//     }

//     function handleExpectedReturnChange(e) {
//         const updatedValue = e.target.value;
//         setExpectedReturn(updatedValue);
//         onValuesChange({
//           initialInvestment,
//           annualInvestment,
//           expectedReturn: updatedValue,
//           duration
//         });
//     }

//     function handleDurationChange(e) {
//         const updatedValue = e.target.value;
//         setDuration(updatedValue);
//         onValuesChange({
//           initialInvestment,
//           annualInvestment,
//           expectedReturn,
//           duration: updatedValue
//         });
//     }

//     return <section className="w-[40rem] h-[10rem] bg-slate-600 mt-10 rounded p-4 grid grid-cols-2 gap-4">

//         <div className="flex flex-col">
//             <label className="text-xs font-semibold">INITIAL INVESTMENT</label>
//             <input type="number"  className="rounded bg-transparent border-2 border-slate-400  focus:outline-none" required value={initialInvestment} onChange={handleInitialInvestmentChange}/>
//         </div>

//         <div className="flex flex-col">
//             <label className="text-xs font-semibold">ANNUAL INVESTMENT</label>
//             <input type="number"  className="rounded bg-transparent border-2 border-slate-400  focus:outline-none" required value={annualInvestment} onChange={handleAnnualInvestmentChange}/>
//         </div>

//         <div className="flex flex-col">
//             <label className="text-xs font-semibold">EXPECTED RETURN</label>
//             <input type="number"  className="rounded bg-transparent border-2 border-slate-400  focus:outline-none" required value={expectedReturn} onChange={handleExpectedReturnChange}/>
//         </div>

//         <div className="flex flex-col">
//             <label className="text-xs font-semibold">DURATION</label>
//             <input type="number"  className="rounded bg-transparent border-2 border-slate-400  focus:outline-none" required value={duration} onChange={handleDurationChange}/>
//         </div>

//     </section>
// }