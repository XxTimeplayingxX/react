import { useState, type FC, type ReactNode } from "react"

interface Usuarios{
    name:String
    status: 'online' | 'offline'
    age?:number
}

interface UserCardProps extends Usuarios{
    children:ReactNode
}

export const UseCard:FC<UserCardProps> = ({name, status, age, children})=>{
    const [count, setCount] = useState<number>(0)
    
        return (

            <div>
                <h2>{name} - {status}</h2>
                {age!=null && <p>{age}</p>}
                {children}
                <button onClick={() => setCount(count+1)}>Likes {count}</button>
            </div>
        )
}

interface UserListProps{
    user:Usuarios[]
}


export const UserList:FC<Usuarios> =()=>{
    return(
        <UseCard name={'David'} status={'online'} age={15} children={
            <p>Hola Mundo</p>
        }></UseCard>
    )
}


//Crear una interfaz

//Crear un contador de likes




//Crear un componente userList