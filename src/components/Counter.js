// import { Component } from "react";
import { useSelector, useDispatch} from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state)=> state.counter.showCounter); 

  const incrementHandler = () =>{
    dispatch(counterActions.increment()); 
  }
  const decrementHandler =() => {
    dispatch(counterActions.decrement()); 
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  }

  const decreaseHandler=()=> {
    dispatch(counterActions.decrease(5));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter()); 
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>+5</button>
        <button onClick={decreaseHandler}>-5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {

//   toggleCounterHandler(){}
//   incrementHandler(){
//     this.props.increment(); 
//   }
//   decrementHandler(){
//     this.props.decrement(); 
//   }
//   incrementBy5Handler(){
//     this.props.incrementBy5(); 
//   }
//   decrementBy5Handler(){
//     this.props.decrementBy5(); 
//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           <button onClick={this.incrementBy5Handler.bind(this)}>+5</button>
//           <button onClick={this.decrementBy5Handler.bind(this)}>-5</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapToStateprops =(state)=> {
//   return{
//     counter: state.counter
//   }; 
// }

// const mapToDispatchProps = (dispatch) => {
//   return{
//     increment: ()=> dispatch({type: 'increment'}),
//     decrement: ()=> dispatch({type: 'decrement'}), 
//     incrementBy5: ()=> dispatch({type: 'incrementBy5'}), 
//     decrementBy5: ()=> dispatch({type: 'decrementBy5'}), 
//   }
// }

// export default connect(mapToStateprops, mapToDispatchProps)(Counter);

export default Counter;