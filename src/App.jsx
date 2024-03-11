
import './App.css'
import {useState} from 'react'
import Dashboard from './Pages/Dashboard'
import Sidebar from './Compontent/Sidebar'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CreateExam from './Pages/CreateExam';
import Navbar from './Compontent/Navbar';
import Batches from './Pages/Batches';
import Students from './Pages/Students';
import AddTeacher from './Pages/AddTeacher';





function App() {
  
  // sidebar & navbar toggle 
  const [isToggle, setIsToggle] = useState(false);

  // toggle handler
  const  onToggle= () =>{
    setIsToggle(!isToggle);
  }
 


  
  return (
    <div className='flex w-full'>

      <BrowserRouter>
      
      <Sidebar isToggle = {isToggle} >
      <Navbar isToggle={isToggle}  onClickHandler={onToggle}/>
      <Routes>
        <Route path="/" element ={<Dashboard  />} />
        <Route path="/CreateExam" element={<CreateExam/>}/>
        <Route path="/Batches" element={<Batches/>}/>
        <Route path="/Students" element={<Students/>}/>
        <Route path="/AddTeacher" element={<AddTeacher/>}/>

        {/* <Route path="/" element={<Home/>}/> */}
      </Routes>
      </Sidebar>
      </BrowserRouter>

      
      
    </div>
  )
}

export default App
