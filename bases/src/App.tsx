import {Counter} from "./bases/Counter";
import {CounterBy} from "./bases/CounterBy";
import {CounterEffect} from "./bases/CounterEffect";
import {CounterHook} from "./bases/CounterHook";
import {CounterReducerComponent} from "./bases/CounterReducer";

function App() {
    return (
        <>
            <h1>React bases</h1>
            <hr/>
            <Counter initialValue={170}/>
            <CounterBy initialValue={1}/>
            <CounterEffect />
            <CounterHook />
            <CounterReducerComponent />
        </>
    );
}

export default App;
