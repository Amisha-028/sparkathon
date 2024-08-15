import React, { useState } from 'react';
import TablesProducts from '../Components/DashBoardComps/Tables';
import Prediction from "../Components/DashBoardComps/Tables2"
import Sply from "../Components/DashBoardComps/Table3"
import Header from '../Components/DashBoardComps/Header';
import Footer from '../Components/LandingComps/Footer';
import ShortestRoute from '../Components/DashBoardComps/ShortestRoute'; 

const DashBoard = () => {
    const [routeVisibility, setRouteVisibility] = useState(false);
  return (
    <div>
        <Header />
        <div className='p-8'>
            <div className='text-[28px] font-semibold text-center' >
                INVENTORY
            </div>
            <TablesProducts/>
        </div>
        <div className='flex justify-between items-center' >
            <div className='p-8'>
                <div className='text-[28px] font-semibold text-center' >
                    SUPPLY CHAIN
                </div>
                <Sply/>
            </div>
            <div className='p-8'>
                <div className='text-[28px] font-semibold text-center' >
                    PREDICTIONS
                </div>
                <Prediction/>
            </div>
        </div>
        <div className='flex justify-center items-center my-10' >
            <button className=' bg-[#0071CE] text-white px-4 text-[18px] py-2 rounded-xl ' onClick={() => setRouteVisibility(!routeVisibility)}>
                {routeVisibility ? "Hide Route" : "Show Route"}
            </button>
        </div>
        <ShortestRoute visibility={routeVisibility} />
        <Footer />
    </div>
  );
};

export default DashBoard;
