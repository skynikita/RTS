import React from 'react'
import {useState, useRef, useEffect} from "react";

const users= [
  {
    name: 'Sarah',
    age: 20
  },
  {
    name: 'Alex',
    age: 21
  },
  {
    name: 'Leo',
    age: 22
  },
]


const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name: string, age:number} | undefined>()

  useEffect(() =>{
    if(!inputRef.current) {
      return;
    }
    inputRef.current.focus()
  },[])


  const onClick = () => {
    const foundUser = users.find((user) =>{
      return user.name === name;
    });

    setUser(foundUser)

  }


  return <div>
    User Search
    <input ref={inputRef} onChange={(e)=> setName(e.target.value)} value={name} />
    <button onClick={onClick}>Find User</button>
    <div>
      {user && user.name}
      {user && user.age}
    </div>
  </div>

}

export default UserSearch
