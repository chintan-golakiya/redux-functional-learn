import { useDispatch, useSelector } from "react-redux"
import { decrementCounter, incrementCounter } from "../redux/actions/countActions";
import "./Counter.css";


function Counter() {

  const count = useSelector((state)=>state.counter.count)
  
  const dispatch = useDispatch();


  return (<div id='Counter'>
    <div>
      
      <div className='num'>{count}</div>
      <div>
        <button
          className="btn"
          onClick={() => dispatch(incrementCounter())}
        >
          +
        </button>
        <button
          className="btn"
          onClick={() => dispatch(decrementCounter())}
        >
          -
        </button>
      </div>
    </div>
    
  </div>)
}

export default Counter