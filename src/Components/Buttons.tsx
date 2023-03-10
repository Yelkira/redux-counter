import React from 'react';
import Button from "./Button";
import {NavLink} from "react-router-dom";

type ButtonsPropsType = {
    integerCount:()=>void
    resetCount:()=>void
    startValue?:number
    maxValue?:number
}
const Buttons = (props:ButtonsPropsType) => {
    return (
        <>
            <Button maxValue={props.maxValue} startValue={props.startValue} name={"INC"} callback={props.integerCount}/>
            <Button name={"RESET"} callback={props.resetCount}/>
            <NavLink to={"/Settings"}><Button name={"SET"} callback={()=>{}}/></NavLink>
        </>
    );
};

export default Buttons;