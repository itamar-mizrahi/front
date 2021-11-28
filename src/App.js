import "./App.css";
import { answers } from "./data/answers";
import { chats } from "./data/chats";
import { questions } from "./data/questions";

// import ChatsData from './components/ChatsData';
// import InputData from './components/InputHandle';
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  const [ID, setID] = useState();
  const handleQuestions = () => {};
  const handleAnswers = () => {};
  const getData = (ID) => {
    chats.forEach((chat) => {
      if (chat.chatID === ID) {
        return chat.questions;
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const handleInput = (e) => {
    e.preventDefault();
    getData(ID);
    return data;
  };
  return (
    <div className="App">
      <form onSubmit={handleInput}>
        <header className="App-header">
          enter yout ID here:
          <input
            type="text"
            value={ID}
            onChange={(e) => setID(e.target.value)}
            placeholder="enter ID"
          />
          <button type="submit">get data</button>
          {/* <InputData/> */}
          {/* <ChatsData data={data}/> */}
        </header>
      </form>
    </div>
  );
}

export default App;
