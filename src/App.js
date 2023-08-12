import './App.css';
import {useReducer} from 'react' 
const initialState = 0;

const reducer = (state, action)=>{
    switch (action) {
      case "Increment":
        return  state + 1
      
      case "Decrement":
        return  state - 1
      default:
            return state
    }

}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <div className="container">
          <div className="header">Application Of UseReducer Hook</div>
          <div className="body">
              <div className='box'>
                  <div className='countDisplay'>Count: {count}</div>
                  <div className="buttonGroup">
                      <button onClick={()=>dispatch("Increment")}> Increment</button>
                      <button onClick={()=>dispatch("Decrement")}> Decrement</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
