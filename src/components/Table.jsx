


export default function Table () {
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
            <tr>
                <td className="text-center">{1}</td>
                <td className="text-center">{10000}</td>
                <td className="text-center">{99999}</td>
                <td className="text-center">{555}</td>
                <td className="text-center">{10005}</td>
            </tr>
        </tbody>

    </table>
}