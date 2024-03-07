import {FaSearch,FaBell, FaUserCircle} from "react-icons/fa";
import { FaXmark, FaBarsStaggered } from "react-icons/fa6";




const Navbar = ({isToggle , onClickHandler}) => {
    
    
  return (
    <nav className= {`${isToggle ? " " : " ml-36 "} bg-gray-800 px-4 py-3 flex justify-between w-full`}>
        <div className="flex item-center text-xl">
        <button onClick={onClickHandler}>
              {
                isToggle ? <FaXmark className="w-5 h-5 text-white mr-3" /> : <FaBarsStaggered  className="w-5 h-5 text-white mr-3" />
              }
            </button>



{/* <FaBars className=" text-white me-4  cursor-pointer" onClick={()=>  setSidebarToggle(!sidebarToggle)}/> */}
<span className="font-semibold text-white">E-commerce</span>

        </div>

        {/* button */}
        <div className="flex item-center gap-x-5">
            <div className="relative md:w-65">
                <span className="relative md:absolute inset-y-0-left flex items-center pl-2">
                    <button className="p-1 focus:outline-none text-white md:text-black">
                        <FaSearch /></button>
                        </span>
                <input type = "text" className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"/>
</div>

<div className="text-white"><FaBell className= "w-6 h-6" /></div>
<div className="relative">
    <button className="text-white group">
        <FaUserCircle className="w-6 h-6 mt-1"/>
        <div className="z-10 hidden bg-white absolute rounded-lg shadow w-32 group-focus:block top-full right-0">
            <ul className="py-2 text-sm text-gray-950">
                <li><a href="">Profile</a></li>
                <li><a href="">Setting</a></li>
                <li><a href="">Log Out</a></li>
                
            </ul>
        </div>
    </button>
</div>


        </div>
        
    </nav>
  )
}
export default Navbar;
