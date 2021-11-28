import  useState from "react";

export const ChatsData=(data)=> {
    const [ID, setID] = useState(0);
  return (
    <div className="ChatsData">
      <form onSubmit={getData}>
      <header className="ChatsData-header">
        enter yout ID here:
        <input type="text" placeholder="enter ID" />
    <button type="submit">get data</button>
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


