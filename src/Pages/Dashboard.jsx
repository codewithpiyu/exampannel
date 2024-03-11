import PiCharts from '../Charts/PieCharts';
const Dashboard = () =>{
    return(

        <>
          {/* <!-- Begin Page Content --> */}
         {/*  <!-- Page Heading  --> */}
         <div className="d-sm-flex align-items-center justify-content-between mb-4 w-full">
          <h1 className="h3 mb-0 text-gray-800 text-xl m-5">Dashboard</h1>
    
         </div>

         {/* Start ui dashboard */}

         
            {/*using the for box */}
            <div className="flex w-full border-spacing-2 border-solid border-2 justify-between" >
              {/* first box */}
                <div className="w-80 border-solid bg-white border-2 m-5 p-8 shadow-xl font-weight-bold text-gray-800 rounded-md">
                <div className="flex columns-2">
                            <div className="">
                                <div className="text-lg">Total exam question </div>
                                <div className="text-lg">50</div>
                                <span className="text">Up from yesterday</span>
                               </div>
                            <img  className= "m-5 p-1" src="assets/img/chart-success.png" />
</div>
                </div>
                {/* second box */}
                <div className="w-80 border-solid bg-white border-2 m-5 p-8 shadow-xl font-weight-bold text-gray-800 rounded-md">
                <div className="flex columns-2">
                            <div className="">
                                <div className="text-lg">Total Solve question</div>
                                <div className="text-lg">40</div>
                                <span className="text">Up from yesterday</span>
                               </div>
                            <img  className= "m-5 p-1" src="assets/img/chart-success.png" />
</div>
                </div>
                {/* third box */}
                <div className="w-80 border-solid bg-white border-2 m-5 p-8 shadow-xl font-weight-bold text-gray-800 rounded-md">
                <div className="flex columns-2">
                            <div className="">
                                <div className="text-lg">Total Pending question</div>
                                <div className="text-lg">10</div>
                                <span className="text">Up from yesterday</span>
                               </div>
                            <img  className= "m-5 p-1" src="assets/img/chart-success.png" />
</div>
                </div>

                {/* fourth box */}
                <div className="w-80 border-solid bg-white border-2 m-5 p-8 shadow-xl font-weight-bold text-gray-800 rounded-md">
                <div className="flex columns-2">
                            <div className="">
                                <div className="text-lg">Total count question</div>
                                <div className="text-lg">80</div>
                                <span className="text">Down From Today</span>
                               </div>
                            <img  className= "m-5 p-1" src="assets/img/chart-success.png" />
</div>
                </div>

                           </div>

{/* student table */}
                           <div  className='w-full mt-6 border-solid border-2'>
                            <h1 className="flex flex-col text-lg">Marks student details </h1>
                           
                          {/* table crate */}
                          <div className="border-solid border-2 flex ">
                           <div className="w-5/6 m-2 border-solid border-2 shadow-xl rounded-md">
                           <div className="text-lg">Exam Marks details</div>
                           <div className="flex justify-between m-2 p-3">
                           <ul className="details">
                                <li className="text-lg m-2">Date</li>
                                <li><a href="#">01 Jan 2023</a></li>
                                <li><a href="#">02 Jan 2023</a></li>
                                <li><a href="#">03 Jan 2023</a></li>
                                <li><a href="#">04 Jan 2023</a></li>
                                <li><a href="#">05 Jan 2023</a></li>
                                <li><a href="#">06 Jan 2023</a></li>
                                <li><a href="#">07 Jan 2023</a></li>
                            </ul>
                            {/* 2 */}
                            <ul className="details">
                                <li className="text-lg m-2">student</li>
                                <li><a href="#">Gita</a></li>
                                <li><a href="#">Priyanka</a></li>
                                <li><a href="#">Kalyani</a></li>
                                <li><a href="#">Sarika</a></li>
                                <li><a href="#">Pallavi</a></li>
                                <li><a href="#">Sanjivani</a></li>
                                <li><a href="#">pooja</a></li>
                                
                            </ul>
                            {/* 3 */}
                            <ul className="details">
                                <li className="text-lg m-2">Exam done</li>
                                <li><a href="#">Yes</a></li>
                                <li><a href="#">Yes</a></li>
                                <li><a href="#">No</a></li>
                                <li><a href="#">Yes</a></li>
                                <li><a href="#">Yes</a></li>
                                <li><a href="#">No</a></li>
                                <li><a href="#">Yes</a></li>
                                
                            </ul>
                            {/* 4 */}
                            <ul className="details">
                                <li className="text-lg m-2">Total avarage</li>
                                <li><a href="#">80%</a></li>
                                <li><a href="#">85%</a></li>
                                <li><a href="#">80%</a></li>
                                <li><a href="#">70%</a></li>
                                <li><a href="#">56%</a></li>
                                <li><a href="#">95%</a></li>
                                <li><a href="#">70%</a></li>
                                
                                </ul>
                           </div>
                           <div className="border-4 float-right m-2 rounded-full ">
                          <button type = "button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-32 rounded-full p-2"> See All</button>
                        </div>
                           </div>

                           {/* marks details */}
                           <div className="w-2/3 m-2 border-solid border-2 shadow-xl rounded-md">
                           <div className="top-student box">
                        <div className="flex flex-col text-lg m-2 p-2">Top Student</div>
                        <ul >
                            <li className="flex justify-around">
                                <a href="#">

                                    <span className="name">Sanjivani</span>
                                </a>
                                <span className="marks">95%</span>
                            </li>
                            <li className="flex justify-around">
                                <a href="#">

                                    <span className="name">priyanka</span>
                                </a>
                                <span className="marks">85%</span>
                            </li>
                            <li className="flex justify-around">
                                <a href="#">

                                    <span className="name">Mayuri</span>
                                </a>
                                <span className="marks">85%</span>
                            </li>
                            <li className="flex justify-around">
                                <a href="#">

                                    <span className="name">Gita</span>
                                </a>
                                <span className="marks">80%</span>
                            </li>
                            <li className="flex justify-around">
                                <a href="#">

                                    <span className="name">kalyani</span>
                                </a>
                                <span className="marks">80%</span>
                            </li>
                            <li className="flex justify-around">
                                <a href="#">

                                    <span className="name">pooja</span>
                                </a>
                                <span className="marks">75%</span>
                                </li>
                            <li className="flex justify-around">
                                <a href="#">

                                    <span className="name">sita</span>
                                </a>
                                <span className="marks">70%</span>
                            </li>
                            <li className="flex justify-around">
                                <a href="#">
                                    <span className="name">Abhi</span>
                                </a>
                                <span className="marks">75%</span>
                            </li>
                        </ul>
                    </div>

                           </div>
                           </div>
                           </div>


        
<PiCharts/>



    
    

    
        </>
    )
}

export default Dashboard;