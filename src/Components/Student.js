import React, {useState,useEffect, useContext } from "react";
import MaterialTable from "material-table";
import './Style.css';
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "./Context";
import { Data } from "./Data";

export const Student = ()=>
{
    
     const [students,setStudents]=useContext(DataContext);
     const [name, setName] =useState('');
     const [age, setAge] = useState('');
     const [stack, setStack] = useState('');
     const [batch, setBatch] = useState('');
     const link= useNavigate();
     const navigate =useNavigate();
     console.log(students);

    const columns =[
        {
            title: 'Name',
            field:'name'
    },
    {
        title: 'Age',
        field:'age'
},
    {
        title: 'Stack',
        field:'stack'
},
{
    title: 'Batch',
    field:'batch'
},
{
    title: 'Update',
    field:'update'
}   ]

const add=()=>
    {
        if(name==""|| age==""||stack==""||batch=="") return alert("Fill all the details")
        setStudents([...students,{
            id:`${students.length}`,
            name:name,
            age:age,
            stack:stack,
            batch: batch,
            update: <button to={`${students.length}`} onClick={()=>Edit(`${students.length}`)}>edit</button>
        }
      ]
     )
     navigate('/students');
    }



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

  
        
    //    link(`/students/${students[0].name}`) 
    }


const submit = ()=>
{
     <Data value={add}/>
}


    return(
        <div>
            <div>
                <li><h1>Students Data</h1></li>
                <li><Link to='desc' onClick={submit} className="btn">Add Student</Link></li>
            </div>
            <MaterialTable  title='' data={students} columns={columns} 
            style={{width:'99vw', marginTop:'25px'}}
            options={{
                search:false,
                paging:false,
                filtering:false
            }} /> 

            
        </div>
    )
}