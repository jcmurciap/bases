import {useCounter} from "../hooks/useCounter";

export const CounterHook = () => {

    const {elementToAnimate, handleClick, counter} = useCounter({maxCount:15});

    return (
        <>
            <h1>Counter Hook</h1>
            <h2 ref={elementToAnimate}>{counter}</h2>
            <button onClick={handleClick}>+ 1</button>
        </>
    )
}
