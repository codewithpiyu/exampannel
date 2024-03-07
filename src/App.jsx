
import './App.css'
import {useState} from 'react'
import Dashboard from './Compontent/Dashboard'
import Sidebar from './Compontent/Sidebar'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Navbar from './Compontent/Navbar';
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
        <Route path="/blogs" element={<Blog/>}/>
        {/* <Route path="/" element={<Home/>}/> */}
      </Routes>
      </Sidebar>
      </BrowserRouter>

      
      
    </div>
  )
}

export default App
