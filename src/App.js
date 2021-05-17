import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  }

  const minus = () => {
    if(count == 0) {
      alert('Opps.. counter tidak boleh kurang dari 0')
    } else {
      setCount(count - 1)
    }
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {count}
        <div className="wraper">
        <button onClick={add} style={{backgroundColor: 'green', borderRadius: 20, height: 40, width: 100}}>
          Tambah
        </button>
        <button onClick={minus} style={{backgroundColor: 'green', borderRadius: 20, height: 40, width: 100}}>
          Kurang
        </button>
        </div>
      </header>
      
    </div>
  );
}

export default App;
