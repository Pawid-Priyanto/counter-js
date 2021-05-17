import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Opps.. counter tidak boleh kurang dari 0');


function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  }

  const minus = () => {
    if(count === 0) {
      notify()
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
        {/* <Toaster /> */}
        <Toaster
          toastOptions={{
            duration: 2000,
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: 'red',
            },
            ariaLive: 'polite',
            icon: '👏',

          }}
        />
        </div>
      </header>
      
    </div>
  );
}

export default App;
