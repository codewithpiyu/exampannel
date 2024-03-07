import {FaHome, FaRegEnvelope, FaRegFileAlt,FaPoll,FaCog} from "react-icons/fa"
import { Link } from "react-router-dom";
const Sidebar = ({isToggle, children}) => {
  return (
    <>
      <div className={`${isToggle ? "hidden " : " block"} bg-gray-800 fixed h-full px-0 py-2  w-1/12`}>
        <div className="my-2 mb-4">
           <h1 className="text-2x text-white font-bold">Admin Dashboard</h1>
           </div>
           <hr/>
           <ul className="mt-3 text-white font-bold">
             <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <Link to= "/">

                <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"/>Home</Link>

                
             </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <Link to= "blogs">
                <FaRegFileAlt className="inline-block w-6 h-6 mr-2 -mt-2"/> Blogs
</Link>

            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <a href= "">
                <FaPoll className="inline-block w-6 h-6 mr-2 -mt-2"/> Reports
</a>

            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <a href= "">
                <FaRegEnvelope className="inline-block w-6 h-6 mr-2 -mt-2"/>Inbox
</a>

            </li>
            <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                <a href= "">
                <FaCog className="inline-block w-6 h-6 mr-2 -mt-2"/> Setting
</a>

            </li>
           </ul>



    </div>
    <div className={`${isToggle ? "w-full" : "w-11/12 ml-0 mr-0"}`}>{children}</div>
    </>
  )
}
export default Sidebar;

