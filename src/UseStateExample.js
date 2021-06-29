import React , {useState}from 'react';
import { names } from './constants/data';

const UseStateExample = () => {
    let deleteHandler = (i)=> {
        console.log('deletehandler is called' , i)
        let newNames = names.filter((id, index) => i !== index)
        console.log(newNames)
        setName(newNames);
    }
    let addHandler = ()=> {
        setName(names);
    }
    const [name, setName]  = useState(names);
    let clickHandler= ()=> {
        if(name === 'jaga0') {
            setName('its clicked man');
        } else {
            setName('jaga0');
        }
    }
    return ( <>
        <div> {
            name.map( (el , i) => { return(<div key = {i}>
            <span style={{color: 'red' }}> {el} </span>
          <button onClick={()=> deleteHandler(i)}> Delete </button>
          </div>)})
            } </div> 
          <button onClick={addHandler}> Add </button>  
            </>
    )
}

export default UseStateExample
