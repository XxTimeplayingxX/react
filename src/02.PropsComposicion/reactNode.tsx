import type { FC, ReactNode } from "react";

interface ContenedorProps{
    children:ReactNode
}

export const ComponenteSimple:FC<ContenedorProps>=({children})=>{
    return (
        <div>
            <h1>Títutlo Header</h1>
            {children}
            <h4>Footer</h4>
        </div>
    )
}

interface CardProps{
    header: ReactNode
    children: ReactNode
}

export const Card : FC<CardProps> = ({header, children})=>{
    return (
        <section>
            <header>{header}</header>
            <div>{children}</div>
        </section>
    )
}

///////////////////////////////////////////////////////////////////////////////////

interface ListProps{
    items: ReactNode[]
}

export const List:FC<ListProps>=({items})=>{
    return (
        <ul>
            {items.map((items, index)=>(
                <li key={index}>{items}</li>
            ))}
        </ul>
    )
}
