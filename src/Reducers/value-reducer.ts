export type initStateType = {
    maxValue: number
    startValue: number
}

let initState: initStateType = {
    maxValue: 5,
    startValue: 0
}

const valueReducer = (state = initState, action: BigActionType): initStateType => {
    switch (action.type) {
        case "MAX-VALUE": {
            return {...state, maxValue: action.newValue};
        }
        case "START-VALUE": {
            return {...state, startValue: action.newValue};
        }
        default:
            return state

    }
};

type BigActionType = ChangeMaxValueACType | ChangeStartValueACType; // SettingsActionsType

type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>
type ChangeStartValueACType = ReturnType<typeof changeStartValueAC>
export const changeMaxValueAC = (newValue: number) => ({
    type: "MAX-VALUE", newValue
})
export const changeStartValueAC = (newValue: number) => ({
    type: "START-VALUE", newValue
})


export default valueReducer;
