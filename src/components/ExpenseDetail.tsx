import { useMemo } from "react"
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import { formatDate } from "../helpers"
import { Expense } from "../types"
import AmountDisplay from "./AmountDisplay"
import { categories } from "../data/categories"
import "react-swipeable-list/dist/styles.css"
import { useBudget } from "../hooks/useBudget"

type ExpenseDetailProps = {
    expense: Expense
}

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {

    const { dispatch } = useBudget()

    const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0], [expense])
    { console.log(categoryInfo.icon) }

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => { }}>
                Share
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => dispatch({ type: 'remove-expense', payload: { id: expense.id } })}
                destructive={true}>
                Delete
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                maxSwipe={1}   // This is the max distance the user can swipe the item
                leadingActions={leadingActions()}   // This is the left side actions
                trailingActions={trailingActions()} // This is the right side actions
            >
                <div className="bg-white shadow-lg p-10 w-full border-p border-gray-200 flex gap-5 items-center">
                    <div>
                        <img src={`/icon_${categoryInfo.icon}.svg`} alt="icon" className="w-20" />
                    </div>
                    <div className="flex-1 space-y-2">
                        <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
                        <p>{expense.expenseName}</p>
                        <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
                    </div>
                    <AmountDisplay
                        amount={expense.amount}
                    />
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
