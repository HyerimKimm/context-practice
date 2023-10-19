import logo from './logo.svg';
import './App.css';
import { useContext, useEffect } from 'react';
import { Context, DispatchContext } from './Context';

function App() {
  const count = useContext(Context).count;
  const { setCount, setName } = useContext(DispatchContext);

  useEffect(()=>{
    setInterval(()=>{
      setCount();
    },1000)
  },[])

  return (
    <div className="App">
      <div>{ count? count : '우웩' }</div>
    </div>
  );
}

export default App;
