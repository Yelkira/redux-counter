type ButtonPropsType = {
    name: string
    callback: () => void
    startValue?: number
    maxValue?: number
}
const Button = (props: ButtonPropsType) => {

   const {name, callback, startValue, maxValue} = props

    let disable = startValue === maxValue && name === "INC"
    const onClickHandler = () => {
        callback()
    }

    return (
        <>
            <button onClick={onClickHandler} disabled={disable}> {name} </button>
        </>
    );
};

export default Button;