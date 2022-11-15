import { useEffect, useState } from "react"



const Contador = () => {
    const [counter, setCounter] = useState(100);


const aumentar = () => {
    setCounter(counter + 1)
};

const disminuir = () => {
    setCounter(counter - 1)
};

const reset = () => {
    
    setCounter( 100 )
    
    
};

useEffect(() => {
    console.log(`El contador va en ${counter}`)
}, [counter]);

return (
    <div>
        <center>
            <h1>{counter}</h1>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
            <button onClick={reset}>Reset</button>
            
        </center>
    </div>
);

};



export default Contador;