import { useMemo, useState, type FC } from "react";

const calculo = (numero: number)=>{
    console.log('Calculando...');
    return numero*2
}

export const UseMemoExample:FC = () =>{
    const[count, setCount] = useState(0);
    const double = useMemo(()=> calculo(count), [count])
    return(
        <div>
            <button onClick={()=> setCount(count+1)}>Sumar</button>
            <p>Resultado: {double}</p>
        </div>
    )
}