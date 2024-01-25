

export default function Calculator({ onChange, userInput }) {

    
    return <section className="w-[40rem] h-[10rem] bg-slate-600 mt-10 rounded p-4 grid grid-cols-2 gap-4">

        <div className="flex flex-col">
            <label className="text-xs font-semibold">INITIAL INVESTMENT</label>
            <input type="number"  
            className="rounded bg-transparent border-2 border-slate-400  focus:outline-none"
            value={userInput.initialInvestment}
            onChange={ (e) => onChange('initialInvestment', e.target.value)}
            required />
        </div>

        <div className="flex flex-col">
            <label className="text-xs font-semibold">ANNUAL INVESTMENT</label>
            <input type="number"  
            className="rounded bg-transparent border-2 border-slate-400  focus:outline-none"
            value={userInput.annualInvestment}
            onChange={ (e) => onChange('annualInvestment', e.target.value)}
            required />
        </div>

        <div className="flex flex-col">
            <label className="text-xs font-semibold">EXPECTED RETURN</label>
            <input type="number"  
            className="rounded bg-transparent border-2 border-slate-400  focus:outline-none"
            value={userInput.expectedReturn}
            onChange={ (e) => onChange('expectedReturn', e.target.value)}
            required />
        </div>

        <div className="flex flex-col">
            <label className="text-xs font-semibold">DURATION</label>
            <input type="number"  
            className="rounded bg-transparent border-2 border-slate-400  focus:outline-none"
            value={userInput.duration}
            onChange={ (e) => onChange('duration', e.target.value)}
            required />
        </div>

    </section>
}

