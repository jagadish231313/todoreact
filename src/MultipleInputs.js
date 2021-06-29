import React, { useState } from 'react'

const MultipleInputs = () => {
    const [person, setPerson] = useState({firstName: '', email: '', age:''});
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setPeople([...people, person]);
    }

    const personHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person, [name]: value})
        console.log(name, value)
    }


    return (
        <article>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>Name: </label>
                <input type='text' id='firstName' name='firstName'
                    value={person.firstName} onChange={personHandler}
                ></input>

                <label htmlFor='email'>email: </label>
                <input type='text' id='email' name='email'
                    value={person.email} onChange={personHandler}></input>

                <label htmlFor='age'>email: </label>
                <input type='text' id='age' name='age'
                    value={person.age} onChange={personHandler}></input>

                <button type='submit'> Add person </button>
            </form>
            {people.map(el => {
                return <div key={el.id}>{el.firstName} and {el.email}  {el.age} </div>
            })}
        </article>
    )
}

export default MultipleInputs
