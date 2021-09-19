import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

const Home = () => {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Counter {counter}</h1>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <h3>Is user autenticated? {isLogged ? "Yes" : "No"}</h3>
        </>
    )
}

export default Home