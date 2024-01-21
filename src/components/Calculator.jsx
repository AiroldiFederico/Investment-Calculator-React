





export default function Calculator() {
    return <section className="w-[30rem] h-[10rem] bg-slate-600 mt-10 rounded p-4 grid grid-cols-2 gap-4">

        <div className="flex flex-col">
            <label className="text-xs font-semibold">INITIAL INVESTMENT</label>
            <input type="text"  className="rounded bg-transparent border-2 border-slate-400  focus:outline-none"/>
        </div>

        <div className="flex flex-col">
            <label className="text-xs font-semibold">ANNUAL INVESTMENT</label>
            <input type="text"  className="rounded bg-transparent border-2 border-slate-400  focus:outline-none"/>
        </div>

        <div className="flex flex-col">
            <label className="text-xs font-semibold">EXPECTED RETURN</label>
            <input type="text"  className="rounded bg-transparent border-2 border-slate-400  focus:outline-none"/>
        </div>

        <div className="flex flex-col">
            <label className="text-xs font-semibold">DURATION</label>
            <input type="text"  className="rounded bg-transparent border-2 border-slate-400  focus:outline-none"/>
        </div>

    </section>
}