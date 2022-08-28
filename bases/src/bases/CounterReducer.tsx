import {useReducer} from "react";

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INIT_STATE:CounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
}

type CounterAction =
    | {type: 'increaseBy', payload: { value: number }}
    | {type: 'reset'}

const counterReducer = (state:CounterState, action:CounterAction):CounterState => {
    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0
            }
        case 'increaseBy':
            return {
                counter: state.counter + action.payload.value,
                changes: state.changes + 1,
                previous: state.counter,
            }
        default:
            return state;
    }
}

export const CounterReducerComponent = () => {

    const [state, dispatch] = useReducer(counterReducer, INIT_STATE);

    const onReset = () => {
        dispatch({type:'reset'})
    }

    const onIncrease = (value:number) => {
        dispatch({type:'increaseBy', payload: {value}})
    }

    return (
        <>
            <h3>Counter Reducer: {state.counter}</h3>
            <h3>Counter Previous: {state.previous}</h3>
            <h3>Counter changes: {state.changes}</h3>
            <button onClick={onReset}>Reset</button>
            <button onClick={() => onIncrease(1)}>+ 1</button>
            <button onClick={() => onIncrease(5)}>+ 5</button>
            <button onClick={() => onIncrease(10)}>+ 10</button>
        </>
    )
}