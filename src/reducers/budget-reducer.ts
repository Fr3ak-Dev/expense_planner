export type BudgetActions =
    { type: 'add_budget', payload: {budget: number}} |
    { type: 'show-modal' }

export type BudgetState = {
    budget: number
    modal: boolean
}

export const initialState : BudgetState = {
    budget: 0,
    modal: false
}

export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetActions
) => {
    if (action.type === 'add_budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if (action.type === 'show-modal') {
        return {
            ...state,
            modal: true
        }
    }
    
    return state
}