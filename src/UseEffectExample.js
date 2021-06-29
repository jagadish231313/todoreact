import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const url = 'https://api.github.com/users';
    const [value, setValue] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        setValue(result);
    }


    useEffect(() => {
        getUsers();
        // fetch(url)
        //     .then(res => res.json())
        //     .then(res1 => { res1.map((res2) => { namesArr.push(res2.id); console.log(res2) }); })
        //     .catch(err => console.log(err))
        // setValue(namesArr);
    }, [])


    return (
        <>
            {
                value.map(({ avatar_url, id, login }) => {
                    console.log(id)
                    return (<>
                        <img style={{ width: '60px', borderRadius: '50%' }} src={avatar_url} />
                        {login}
                        <div> </div>
                    </>
                    )
                })
            }
            {/* <button onClick={() => setValue(val => val + 1)}>Increment</button>
            <button onClick={() => setValue(0)}>Reset</button>
            <button onClick={() => setValue(val => val - 1)}>Decrement</button> */}
        </>
    )
}

export default UseEffectExample
