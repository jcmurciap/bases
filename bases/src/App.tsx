import {Counter} from "./bases/Counter";
import {CounterBy} from "./bases/CounterBy";
import {CounterEffect} from "./bases/CounterEffect";

function App() {
    return (
        <>
            <h1>React bases</h1>
            <hr/>
            <Counter initialValue={170}/>
            <CounterBy initialValue={1}/>
            <CounterEffect />
        </>
    );
}

export default App;
