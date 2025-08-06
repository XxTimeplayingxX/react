import { useCallback, useState, type FC } from "react";

const ButtonComponent: FC<{ onClick: () => void }> = ({ onClick }) => {
    console.log('Render')
    return <button onClick={onClick}>Handle Click</button>;
};

export const UseCallBackExample=()=>{
    const [count, setCount]= useState(0)

    const incremente = useCallback(()=> setCount((c)=> c+1), [])

    return (
        <div>
            <ButtonComponent onClick={incremente}></ButtonComponent>
            <p>Click: {count}</p>
        </div>
    )
}
