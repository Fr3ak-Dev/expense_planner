import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    totalExpenses: number
    remainingBudget: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)    // Context is the action

export const BudgetProvider = ({ children } : BudgetProviderProps) => {   // Provider is the information
    // children is a special prop that contains the components (children) that are wrapped by the provider

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    const totalExpenses = useMemo( () => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
        const remainingBudget = state.budget - totalExpenses

    return (
        <BudgetContext.Provider
            value={{    // value is a special prop of the provider that contains the information that will be passed to the children
                state,
                dispatch,
                totalExpenses,
                remainingBudget
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}