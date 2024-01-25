


export default function Table ({ input }) {
    return <table className="w-[40rem] bg-slate-800 mt-4 table-auto">

        <thead>
            <tr className="text-sm">
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {input.map((value, index) => (
                <tr key={index}>
                    <td className="text-center">{value.Year}</td>
                    <td className="text-center">{value.InvestmentValue}</td>
                    <td className="text-center">{value.Interest}</td>
                    <td className="text-center">{value.TotalInterest}</td>
                    <td className="text-center">{value.InvestedCapital}</td>
                </tr>
            ))}
        </tbody>

    </table>
}