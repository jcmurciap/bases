import {useReducer} from "react";
import {CounterState} from "./interfaces/interfaces"
import {counterReducer} from "./state/counterReducer";
import * as actions from "./actions/actions";

const INIT_STATE:CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

export const CounterReducerComponent = () => {
    const [state, dispatch] = useReducer(counterReducer, INIT_STATE);
    const {counter, changes, previous} = state;

    const onReset = () => {
        dispatch(actions.doReset());
    }

    const onIncrease = (value:number) => {
        dispatch(actions.doIncreaseBy(value));
    }

    return (
        <>
            <h3>Counter Reducer: {counter}</h3>
            <h3>Counter Previous: {previous}</h3>
            <h3>Counter changes: {changes}</h3>
            <button onClick={onReset}>Reset</button>
            <button onClick={() => onIncrease(1)}>+ 1</button>
            <button onClick={() => onIncrease(5)}>+ 5</button>
            <button onClick={() => onIncrease(10)}>+ 10</button>
        </>
    )
}
