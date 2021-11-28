
import './App.css';
// import ChatsData from './components/ChatsData';
// import InputData from './components/InputHandle';
import { useState } from 'react';
function App() {
  const [data, setdata] = useState()
  return (
    <div className="App">
      <form onSubmit={getData}>
      <header className="App-header">
        enter yout ID here:
        <input type="text" value={data} placeholder="enter ID" />
    <button type="submit">get data</button>

    {/* <InputData/> */}
    {/* <ChatsData data={data}/> */}

      </header>
      </form>
    </div>
  );
}

function getData(e) {
  e.preventDefault();
  debugger;
  console.log(e.target);
  
  
}

export default App;
