import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const toggleCounterHandler = () => {};
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () =>{
    dispatch({type: 'increment'})
  }
  const decrementHandler =() => {
    dispatch({type: 'decrement'})
  }

  const incrementBy2Handler = () => {
    dispatch({type: 'incrementBy2'})
  }

  const decrementBy2Handler=()=> {
    dispatch({type: 'decrementBy2'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementBy2Handler}>+2</button>
        <button onClick={decrementBy2Handler}>-2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
