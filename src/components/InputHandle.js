export const InputData = () => {
  return (
    <div className="InputData">
      <form onSubmit={getData}>
        <header className="InputData-header">
          enter yout ID here:
          <input type="text" value={this.state.value} placeholder="enter ID" />
          <button type="submit">get data</button>
        </header>
      </form>
    </div>
  );
};

function getData(e) {
  e.preventDefault();
  debugger;
  console.log(e.target);
}

export default InputData;
