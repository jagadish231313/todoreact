import React , {useRef, useEffect} from 'react'
//preserves value
//doesnt trigger rerender
//target dom nodes
const UseRef = () => {
    const refContainer = useRef(null);
    useEffect(()=> {
        refContainer.current.focus();
    })
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
    }
    return (
        <div onSubmit={submitHandler} >
            Useref
            <form>
                <input type='text'  ref={refContainer}/>
                <button type='submit'> Submit </button>
            </form>
        </div>
    )
}

export default UseRef
