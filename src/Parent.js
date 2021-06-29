import '../src/styles.css'
function Parent(props) {
    let name1 = 'jaga'
    console.log(props)
  return (<>
    <div className='test'> Hello parent1 {props.names} </div>
    <button onClick={()=>props.fun('saeeee')}> {props.names}</button>
    </>
  );
}

export default Parent;
