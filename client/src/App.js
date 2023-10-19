import logo from './logo.svg';
import './App.css';
import { useContext, useEffect } from 'react';
import { Context, DispatchContext } from './Context';

function App() {
  const states = useContext(Context);
  const dispatch = useContext(DispatchContext);

  useEffect(()=>{
    setInterval(()=>{
      dispatch.setCount(states.count++);
    },1000)
  },[])

  return (
    <div className="App">
      <div>{ states.count }</div>
    </div>
  );
}

export default App;
