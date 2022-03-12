
import './App.css';
import { NavBar } from './Components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './Components/Home';
import { Student } from './Components/Student';
import { Contact } from './Components/Contact';
import { DataHandle } from './Components/Context';
import { Data } from './Components/Data';



function App() {
  return (
    
      <Router>
    <NavBar/>
    <DataHandle>
    <Routes>
    
      <Route path='/home' element ={<Home/>}/>
      <Route path='/students'  element={<Student/>}/>
      <Route path='/:list' element={<Data/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/students/desc' element ={<Data/>}/>
      <Route path='/students/desc/:list' element ={<Data/>}/>
      
    </Routes>
    </DataHandle>
    
    </Router>
    
  );
}

export default App;
