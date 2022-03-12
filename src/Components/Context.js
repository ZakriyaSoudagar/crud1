import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
// import { Link } from 'react-router-dom';


export const DataContext =createContext();

export const DataHandle =(props)=>
{
    const [students, setStudents] = useState([
       
      
       
        
    ])
    return(
        <DataContext.Provider value={[students, setStudents]}>
           { props.children}
        </DataContext.Provider>
    )
}