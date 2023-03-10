import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Interface} from "./Components/Interface";
import Settings from "./Components/Settings";
import {useDispatch, useSelector} from "react-redux";
import {RootAppStateType} from "./store/store";
import {changeMaxValueAC, changeStartValueAC} from "./Reducers/value-reducer";

function App() {

    const maxValue = useSelector<RootAppStateType, number>(state => state.value.maxValue)
    const startValue = useSelector<RootAppStateType, number>(state => state.value.startValue)
    const dispatch = useDispatch()
    const changeMaxValue = (newValue: number) => {
        dispatch(changeMaxValueAC(newValue))
    }
    const changeStartValue = (newValue: number) => {
        dispatch(changeStartValueAC(newValue))
    }


    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Interface maxValue={maxValue}
                                                        startValue={startValue}/>}
                    />
                    <Route path="/Settings" element={<Settings changeMaxValue={changeMaxValue}
                                                               changeStartValue={changeStartValue}
                                                               maxValue={maxValue}
                                                               startValue={startValue}/>
                    }/>
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;
