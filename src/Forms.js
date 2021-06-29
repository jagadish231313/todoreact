import React, { useState } from 'react'

const Forms = () => {
    const [firstName, setfirstName] = useState('');
    const [email, setemail] = useState('');
    const [people, setPeople] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && email) {
            const person = { id: new Date().getTime().toString(), firstName, email };
            setPeople((people) => { return [...people, person ] });
            setfirstName('');
            setemail('');
        } else {
            console.log('error')
        }
        console.log(people)
    }

    const firstNameHandler = (e) => {
        setfirstName(e.target.value)
    }

    const emailHandler = (e) => {
        setemail(e.target.value)
    }
    return (
        <article>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName'>Name: </label>
                <input type='text' id='firstName' name='firstName'
                    value={firstName} onChange={firstNameHandler}
                ></input>

                <label htmlFor='email'>email: </label>
                <input type='text' id='email' name='email'
                    value={email} onChange={emailHandler}></input>

                <button type='submit'> Add person </button>
            </form>
            {people.map(el => {
                return <div key={el.id}>{el.firstName} and {el.email}  {el.id} </div>
            })} 
        </article>
    )
}

export default Forms
