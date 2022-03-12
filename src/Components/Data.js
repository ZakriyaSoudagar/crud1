import React, { useContext, useEffect } from "react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "./Context";
import './Style.css';


export const Data =(value)=>
{
    
    const [students, setStudents]=useContext(DataContext);
    const [name, setName] =useState('');
     const [age, setAge] = useState('');
     const [stack, setStack] = useState('');
     const [batch, setBatch] = useState('');
   
    

    

   
    


    return(
        <div>
        <div className="container">
            <input className="insert" type='text' name='name' placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} value={name} />
            
            <input className="insert" type='text' name='age' placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)} value={age} />

            <input className="insert" type='text' name='stack' placeholder="Enter Course" onChange={(e)=>setStack(e.target.value)} value={stack} />

            <input className="insert" type='text' name='batch' placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)} value={batch} />

            
        </div>
        <div>
        <button className="btn"  onClick={()=>value()}>Add Student</button>
        </div>
        </div>
    )
}