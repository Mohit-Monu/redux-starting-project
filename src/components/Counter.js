import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter)
  const toggleCounterHandler = () => {};
  function IncrementHandler(){
    dispatch({type:"increment"})
  }
  function DecrementHandler(){
    dispatch({type:"decrement"})

  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
