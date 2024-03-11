import {FaHome, FaRegFileAlt,FaPoll,FaChalkboardTeacher} from "react-icons/fa"
import { PiStudentBold } from "react-icons/pi";
import {  } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = ({isToggle, children}) => {
  return (
    <>
      <div className={`${isToggle ? "hidden " : " block"} bg-gray-800 fixed h-full px-2 py-2 w-1/1`}>
        <div className="my-2 mb-4">
           <h1 className="text-2x text-white font-bold">Admin Dashboard</h1>
           </div>
           <hr/>
           <ul className="mt-3 text-white font-bold">
             <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <Link to= "/">

                <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"/>Dashboard</Link>

                
             </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <Link to= "CreateExam">
                <FaRegFileAlt className="inline-block w-6 h-6 mr-2 -mt-2"/> Create Exam
</Link>

            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <Link to= "Batches">
                <FaPoll className="inline-block w-6 h-6  -mt-2"/> Batches
</Link>

            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <Link to= "Students">
                < PiStudentBold className="inline-block w-6 h-6 mr-2 -mt-2"/>Students
</Link>

            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <Link to= "AddTeacher">
                <FaChalkboardTeacher className="inline-block w-6 h-6 mr-2 -mt-2"/> Add Teacher
</Link>

            </li>
           </ul>



    </div>
    <div className={`${isToggle ? "w-full" : "w-11/12 ml-0 mr-0"}`}>{children}</div>
    </>
  )
}
export default Sidebar;

