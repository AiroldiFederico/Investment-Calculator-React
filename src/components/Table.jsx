
import { calculateInvestmentResults, formatter} from "../util/investment.js";


export default function Table ({ input }) {

    const resultsData = calculateInvestmentResults(input);
    const initialInvestment = 
        resultsData[0].valueEndOfYear - 
        resultsData[0].interest - 
        resultsData[0].annualInvestment;
    

        return (
            <div className="w-[40rem] max-h-96 overflow-auto bg-slate-800 mt-4 rounded-sm scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-100">
                <table className="w-full table-auto">
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
                        {resultsData.map((value, index) => {
                            const totalInterest = value.valueEndOfYear - value.annualInvestment * value.year - initialInvestment;
                            const totalAmountInvested = value.valueEndOfYear - totalInterest;
        
                            return (
                                <tr key={index}>
                                    <td className="text-center">{value.year}</td>
                                    <td className="text-center">{formatter.format(value.valueEndOfYear)}</td>
                                    <td className="text-center">{formatter.format(value.interest)}</td>
                                    <td className="text-center">{formatter.format(totalInterest)}</td>
                                    <td className="text-center">{formatter.format(totalAmountInvested)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
}