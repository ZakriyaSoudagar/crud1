import React, {useState,useEffect, useContext } from "react";
import MaterialTable from "material-table";
import './Style.css';
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "./Context";
import { Data } from "./Data";

export const Student = ()=>
{
    
     const [students]=useContext(DataContext);
    
     
     
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






    
  
        
    //    link(`/students/${students[0].name}`) 
    





    return(
        <div>
            <div>
                <li><h1>Students Data</h1></li>
                <li><Link to='desc'  className="btn">Add Student</Link></li>
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