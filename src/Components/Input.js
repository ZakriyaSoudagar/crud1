import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import './Style.css';


export const Input =()=>
{
    const [name, setName] =useState('');
    const [age, setAge] = useState('');
    const [stack, setStack] = useState('');
    const [batch, setBatch] = useState('');
    return(
        <div>
            <input className="insert" type='text' name='name' placeholder="Name" onChange={(e)=>setName(e.target.value)} value={name} />

            <input className="insert" type='text' name='name' placeholder="Name" onChange={(e)=>setAge(e.target.value)} value={age} />

            <input className="insert" type='text' name='name' placeholder="Name" onChange={(e)=>setStack(e.target.value)} value={stack} />

            <input className="insert" type='text' name='name' placeholder="Name" onChange={(e)=>setBatch(e.target.value)} value={batch} />
        </div>
    )
}