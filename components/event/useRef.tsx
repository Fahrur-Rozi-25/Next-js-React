'use client'
import { useRef } from "react";



function Ref() {
    const headingRef = useRef<HTMLDivElement | null>(null);
    console.log(headingRef);
    
    const handleClick = () => {
        console.log(headingRef.current);
        if (headingRef.current) {
            headingRef.current.style.backgroundColor = 'red'
            headingRef.current.innerHTML = 'di ganti ke ini'
        }
        
    }

    return(
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <h1 ref={headingRef}>Hello</h1>
        </div>
    )
}

export default Ref

// import { useRef } from 'react';

// const Ref = () => {
//   const myRef = useRef(null);

//   const handleClick = () => {
//     // Access the DOM element using the ref
//     console.log(myRef.current);
    
//     // Manipulate the DOM element
//     myRef.current.style.backgroundColor = 'red';
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//       <div ref={myRef}>I'm a DOM element</div>
//     </div>
//   );
// };

// export default Ref;
