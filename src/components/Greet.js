import React, { useRef, useState } from "react";

function Greet(){
    const [a, setA] = useState(0);

    const ref = useRef(12);

    function increment() {
        let count = a+1;
        ref.current++;
        setA(count)
        console.log(a, 'ref', ref.current);
    }
    // return <h1>Hello Aksh!</h1>

    return (
        <>
            <h1>Hey there {a} {ref.current}</h1>
            <button onClick={increment}>Button</button>
        </>
    )
}


// export const Greet = () => <h1>Hello Aksh</h1>
export default Greet