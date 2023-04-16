import { useState, useEffect, useMemo } from "react";
import "./App.css";
import { answers } from "./data/answers";
import { chats } from "./data/chats";
import { questions } from "./data/questions";

// import ChatsData from './components/ChatsData';
// import InputData from './components/InputHandle';

const Questions = ({ questions }) => (
  <>
    {questions.map((question) => (
      <li key={question.order}>
        {question.order},{question.qid}
      </li>
    ))}
  </>
);

function App() {
  const [data, setData] = useState([]);
  const [ID, setID] = useState();
  const handleQuestions = () => {};
  const handleAnswers = () => {};

  const ChatData = useMemo(() => {
    if (chats.chatID === ID) {
      return chats.map((chat) => {
        console.log(chat.questions);
        //TODO:switch case of data by qid and type of question
        return <Questions questions={chat.questions} />;
      });
    }
    return <div>Nothing yet</div>;
  }, [ID]);

  useEffect(() => {}, [ID]);
  const handleInput = (e) => {
    e.preventDefault();
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
          {}
          {/* <InputData/> */}
          {/* <ChatsData data={data}/> */}
        </header>
      </form>
      {ChatData}
    </div>
  );
}

export default App;
