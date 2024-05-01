import {useCounter} from '@/store/storeCounter';

function CounterComponents1() {
    const  [{ count }, dispatch] = useCounter();

    return (
        <div>
            <p>count: {count}</p>
            <button className="mr-3" onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
        </div>
    );
}

export default CounterComponents1;
