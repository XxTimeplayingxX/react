import type { FC } from "react"

interface Props{
    name:string
}

export const FuncionalProps : FC<Props> = ({name})=>{
    return (
        <h3>Hola, {name}</h3>
    )
}

