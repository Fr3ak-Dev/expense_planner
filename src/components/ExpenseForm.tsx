import { categories } from "../data/categories";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ExpenseForm() {
    return (
        <form className="space-y-5">
            <legend className="uppercase text-ceter text-2xl font-black border-b-4 border-green-500 py-2">
                New Expense
            </legend>
            <div className="flex flex-col gap-2">
                <label htmlFor="expenseName" className="text-xl">
                    Expense Name:
                </label>
                <input
                    type="text"
                    id="expenseName"
                    placeholder="Enter the name of the expense"
                    className="bg-slate-100 p-2 outline-emerald-500"
                    name="expenseName"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="text-xl">
                    Amount:
                </label>
                <input
                    type="text"
                    id="amount"
                    placeholder="Enter the amount of the expense: Ej. 300"
                    className="bg-slate-100 p-2 outline-emerald-500"
                    name="amount"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-xl">
                    Category:
                </label>
                <select
                    id="category"
                    className="bg-slate-100 p-2 outline-emerald-500 cursor-pointer"
                    name="category"
                >
                    <option value="">-- Select --</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="text-xl">
                    Expense Date:
                </label>
                <DatePicker 
                    className="bg-slate-100 p-2 border-0"
                />
            </div>
            <input 
            type="submit" 
            className="bg-green-600 cursour-pointer w-full text-white uppercase font-bold p-2 rounded-lg"
            value={'Add Expense'}
            />
        </form>
    )
}
