import {ChangeEvent} from 'react';
import Button from "./Button";
import {NavLink} from "react-router-dom";
import {setCountAC} from "../Reducers/count-reducer";
import {useDispatch} from "react-redux";


type SettingsPropsType = {
    maxValue: number
    startValue: number
    changeMaxValue: (newValue: number) => void
    changeStartValue: (newValue: number) => void
}
const Settings = (props: SettingsPropsType) => {
    const {maxValue, startValue, changeMaxValue, changeStartValue} = props

    const dispatch = useDispatch()
    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxValue(+e.currentTarget.value)
    }
    const changeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeStartValue(+e.currentTarget.value)
    }
    return (
        <div>
            <div>
                <div>
                    <span>Max value:</span><input onChange={changeMaxValueHandler}
                                                  className="input"
                                                  defaultValue={maxValue}
                                                  min={startValue + 1}
                                                  type="number"/>
                </div>
                <div>
                    <span> Min value:</span><input onChange={changeMinValueHandler}
                                                   className="input"
                                                   defaultValue={startValue}
                                                   max={props.maxValue - 1} min={0}
                                                   type="number"/>
                </div>
            </div>
            <NavLink to={"/"}>
                <Button name={"SET"} callback={() => dispatch(setCountAC(startValue))}/>
            </NavLink>
        </div>
    );
};

export default Settings;