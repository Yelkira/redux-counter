import {useEffect} from 'react';
import Display from "./Display";
import Buttons from "./Buttons";
import {useDispatch, useSelector} from "react-redux";
import {RootAppStateType} from "../store/store";
import {integerCountAC, resetCountAC, setCountAC} from "../Reducers/count-reducer";


type InterfacePropsType = {
    startValue: number
    maxValue: number
}

export const Interface = (props: InterfacePropsType) => {
    const {startValue, maxValue} = props

    const count = useSelector<RootAppStateType, number>(state => state.count.count)
    const dispatch = useDispatch()



    const integerCount = () => dispatch(integerCountAC())

    const resetCount = () => dispatch(resetCountAC(startValue))

    return (
        <div>
            <Display startValue={count}/>
            <Buttons maxValue={maxValue}
                     startValue={count}
                     integerCount={integerCount}
                     resetCount={resetCount}/>
        </div>
    );
};