import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

  const dispatch = useDispatch()
  const number =  useSelector(state => state.number)

  const addOne=()=>{
    dispatch({type:"PLUS_ONE", payload: 1})
  }

  const removeOne=()=>{
    dispatch({type:"MINUS_ONE", payload: 1})
  }

  return (
    <div className="App">
      <div>{number}</div>
      <div>
        <button onClick={()=>addOne()}>Збільшити лічильник</button>
        <button onClick={()=>removeOne()}>Зменшити лічильник</button>
        <button onClick={()=>addOne(Number(prompt()))}>Збільшити лічильник на вказане число</button>
        <button onClick={()=>removeOne(Number(prompt()))}>Зменшити лічильник на вказане число</button>
      </div>
    </div>
  );
}

export default App;
