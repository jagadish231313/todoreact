import './App.css';
import Parent from './Parent';
import UseStateExample from './UseStateExample'
import UseEffectExample from './UseEffectExample'
import Forms from './Forms'
import MultipleInputs from './MultipleInputs';
import UseRef from './UseRef'
import UseReducer from './UseReducer'

function App() {
  let fun = param => {
    console.log( `func called with ${param}`);
  }
  return (
    <>
    {/* <div> Hello world </div>
    <Parent names='sdadsada' fun={fun} num='22'/> */}
    {/* <UseStateExample/> */}
    {/* <UseEffectExample/> */}
    {/* <Forms /> */}
    {/* <MultipleInputs /> */}
    {/* <UseRef /> */}
    {/* <UseReducer /> */}
    test
    </>
  );
}

export default App;
