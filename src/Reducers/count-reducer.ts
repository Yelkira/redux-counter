export type InitStateType = {
    count: number
}

export const initState: InitStateType = {
    count: 0
}

const countReducer = (state = initState, action: BigActionType): InitStateType => {

    switch (action.type) {
        case "INT-COUNT": {
            return {...state, count: state.count + 1};
        }
        case "RESET-COUNT": {
            return {...state, count: action.newValue}
        }
        case "SET-COUNT": {
            return {...state, count: action.newValue}
        }
        default:
            return state

    }
};

type BigActionType = IntegerCountACType | ResetCountACType | SetCountACType;

type IntegerCountACType = ReturnType<typeof integerCountAC>
type ResetCountACType = ReturnType<typeof resetCountAC>
type SetCountACType = ReturnType<typeof setCountAC>
export const integerCountAC = () => ({
    type: "INT-COUNT" as const
})
export const resetCountAC = (newValue: number) => ({
    type: "RESET-COUNT", newValue
}) as const
export const setCountAC = (newValue: number) => ({
    type: "SET-COUNT", newValue
}) as const


export default countReducer;