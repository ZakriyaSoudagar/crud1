import React, { useContext, useEffect } from "react";
import { useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import { DataContext } from "./Context";
import './Style.css';


export const Data =(value)=>
{
    
    const [students, setStudents]=useContext(DataContext);
    const [name, setName] =useState('');
     const [age, setAge] = useState('');
     const [stack, setStack] = useState('');
     const [batch, setBatch] = useState('');
     const link =useNavigate();
     const {list}= useParams();
     console.log(list);

     const add=()=>
    {

        if(name==""|| age==""||stack==""||batch=="") return alert("Fill all the details")
        if(list===undefined){
        setStudents([...students,{
            id:`${students.length}`,
            name:name,
            age:age,
            stack:stack,
            batch: batch,
            update: <Link to={`./desc/${students.length}`}>edit</Link>
        }
      ]
     )
     
    }
    else{
        setStudents( students.map((element)=>{
            if(element.id===list)
            {
                return {
                    id: list,
                    name,
                    age,
                    stack,
                    batch,
                    update: <Link to={`./desc/${students.length}`}>edit</Link>
                    
                }

            }

            else return element;
        })
        )
    }
    link('/students')

}

        useEffect(()=>{
            if(!!list)
            {
           const student = students.filter((element)=>{
               return element.id===list 

           })[0]

           setAge(student.age);
           setName(student.name);
           setStack(student.stack);
           setBatch(student.batch);
        }

        },[])


    const Edit=(id)=>
    {
        
        useEffect(()=>{
            console.log(id);
       
        students.map((student)=>{
            console.log(student);
            if(id===student.id)
            {
                console.log(student);
                setStudents({
                    name:student.name,
                    age:student.age,
                    stack:student.stack,
                    batch:student.batch
                })
            }
        })
    })
        link('/students/desc/'+id)
}

   
    

    return(
        <div>
        <div className="container">
            <input className="insert" type='text' name='name' placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} value={name} />
            
            <input className="insert" type='text' name='age' placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)} value={age} />

            <input className="insert" type='text' name='stack' placeholder="Enter Course" onChange={(e)=>setStack(e.target.value)} value={stack} />

            <input className="insert" type='text' name='batch' placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)} value={batch} />

            
        </div>
        <div>
        <button className="btn"  onClick={add}>Add Student</button>
        </div>
        </div>
    )
}
