import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, reset, incrementByAmount} from './counterSlice';
import { useState } from "react";


export default function Counter(){
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(10);

    return (
        <div className="card">
            <h1>Contador de Redux</h1>
            <h2>Valor: {value}</h2>

            <div className="rows">
                <button onClick={() => dispatch(increment())}>Incrementar en +1</button>
                <button onClick={() => dispatch(decrement())}>Decrementar en -1</button>
                <button onClick={() => dispatch(reset())}>Resetear</button>
            </div>

            <div className="rows">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                <button onClick={() => dispatch(incrementByAmount(amount))}>
                    Sumar al contador la cantidad
                </button>
            </div>
        </div>
    )
}