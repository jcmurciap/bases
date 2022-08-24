import {Counter} from "./bases/Counter";
import {CounterBy} from "./bases/CounterBy";

function App() {
    return (
        <>
            <h1>React bases</h1>
            <hr/>
            <Counter initialValue={170}/>
            <CounterBy initialValue={1}/>
        </>
    );
}

export default App;
