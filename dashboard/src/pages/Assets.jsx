import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { Contexts } from "../context/Contexts";
import cadilac from "../Assets/Image/assetCadilac.png";
import AssetStatistic from "../components/AssetStatistic";
import { icons } from "../utilits/icons";

function Assets() {
  const { darkMode } = useContext(Contexts);

  const [dropDown, setDropDown] = useState(false);

  return (
    <div>
      <div
        className={
          darkMode
            ? "w-[360px] lg:w-full h-[100hv] flex items-start bg-Cblack"
            : "w-[360px] lg:w-full h-[100hv] flex items-start bg-[#F5F5F5]"
        }
      >
        <Aside />
        <div className="w-[360px] lg:w-full">
          <Navbar />
          <div className="m-[30px]">
              <h3 className={darkMode?" mt-[80px]  mb-[20px] lg:mt-[0px] text-white  text-signTitle":" mt-[80px]  mb-[20px] lg:mt-[0px]  text-signTitle"}>Assets</h3>
            <div className="lg:flex">
              <div className={darkMode?"py-[10px] w-[310px] h-[586px] lg:w-[361px] lg:h-[674px] bg-[#03030340] rounded-[14px] mr-[25px] ":"py-[10px] w-[310px] h-[586px] lg:w-[361px] lg:h-[674px] bg-[#438FFE] rounded-[14px] mr-[25px] "}>
                <div className="mx-[20px] my-[30px] flex ">
                  <div className="w-[130px] h-[51px] mr-[25px]  ">
                    <p className="text-searchTittle text-[#C6DCFC] ">
                      Fuel Usage
                    </p>
                    <p className="text-signBtn text-white ">2903.89 Ltr</p>
                  </div>
                  <div className="w-[2px] h-[41px] bg-[#579BFF] mr-[25px] "></div>
                  <div>
                    <p className="text-searchTittle text-[#C6DCFC] ">
                      KM Driven
                    </p>
                    <p className="text-signBtn text-white ">2903.89 Ltr</p>
                  </div>
                </div>
                <div className="mx-[20px] mb-[48px] flex ">
                  <div className="w-[130px] h-[51px] mr-[25px]  ">
                    <p className="text-searchTittle text-[#C6DCFC] ">
                      Total Cost
                    </p>
                    <p className="text-signBtn text-white ">$3,00,290.00</p>
                  </div>
                  <div className="w-[2px] h-[41px] bg-[#579BFF] mr-[25px] "></div>
                  <div>
                    <p className="text-searchTittle text-[#C6DCFC] ">
                      Top Speed
                    </p>
                    <p className="text-signBtn text-white ">$5.2K</p>
                  </div>
                </div>
                <div className="w-[236px] m-auto lg:w-auto ">
                  <img src={cadilac} alt="" />
                </div>
              </div>
              <div className="mt-[100px] lg:mt-[0px] ">
                <div className={darkMode?" lg:w-[640px] h-[270px] py-[27px] px-[24px] bg-[#03030340] rounded-[14px] ":" lg:w-[640px] h-[270px] py-[27px] px-[24px] bg-white rounded-[14px] "}>
                  <AssetStatistic />
                </div>
                <div className="grid lg:grid lg:grid-cols-2 gap-[25px] mt-[20px]">
                  <div className={darkMode?"w-[311px] h-[314px] rounded-[14px] bg-[#03030340] py-[13px] px-[20px] ":"w-[311px] h-[314px] rounded-[14px] bg-white py-[13px] px-[20px] "}>
                    <h3 className={darkMode?"text-signBtn text-[white] mb-[16px] ":"text-signBtn mb-[16px] "}>Noties</h3>
                    <div className="flex">
                      <div className="w-[44px] h-[44px] shadow-[0_2px_4px_0px_#93909033] p-[13px] rounded-[50%] mr-[14px] ">
                        {darkMode?<span>{icons.massage2}</span>:<span>{icons.massage}</span>}
                      </div>
                      <div className="">
                        <p className={darkMode?"text-messagesSubTitle text-[white] ":"text-messagesSubTitle "}>
                          Monday, 6th Apirl 2020
                        </p>
                        <p className={darkMode?"text-subDate text-[#7C7C8D] mt-[4px] ":"text-subDate text-[#72767C] mt-[4px] "}>
                          Book for General Service
                        </p>
                        <button className="mt-[10px] py-[4px] px-[10px] uppercase text-subHeading text-white rounded-[4px] bg-[#70CF97] ">
                          COMPLETED
                        </button>
                      </div>
                    </div>
                    <div className="flex my-[18px] ">
                      <div className="w-[44px] h-[44px] shadow-[0_2px_4px_0px_#93909033] p-[13px] rounded-[50%] mr-[14px] ">
                        {icons.warning}
                      </div>
                      <div className="">
                        <p className={darkMode?"text-messagesSubTitle text-[white] ":"text-messagesSubTitle "}>
                          Thursday, 24th October 2021
                        </p>
                        <p className={darkMode?"text-subDate text-[#7C7C8D] mt-[4px] ":"text-subDate text-[#72767C] mt-[4px] "}>
                          Vehicle LV 001 has been marked for recall.
                        </p>
                        <p className={darkMode?"w-[100px] mt-[10px] py-[3px] px-[10px] text-subHeading text-[#E0E4E7] rounded-[4px] bg-[#2B2E38] ":"w-[100px] mt-[10px] py-[3px] px-[10px] text-subHeading rounded-[4px] bg-[#ECEEF0] "}>
                          14:07-21/11/2021
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-[44px] h-[44px] shadow-[0_2px_4px_0px_#93909033] p-[13px] rounded-[50%] mr-[14px] ">
                        {icons.key}
                      </div>
                      <div className="">
                        <p className={darkMode?"text-messagesSubTitle text-white ":"text-messagesSubTitle "}>
                          Monday, 13th August 2018
                        </p>
                        <p className={darkMode?"text-subDate text-[#7C7C8D] mt-[4px] ":"text-subDate text-[#72767C] mt-[4px] "}>
                          Monday, 13th August 2018
                        </p>
                        <p className={darkMode?"w-[100px] mt-[10px] py-[3px] px-[10px] text-subHeading text-[#E0E4E7] rounded-[4px] bg-[#2B2E38] ":"w-[100px] mt-[10px] py-[3px] px-[10px] text-subHeading rounded-[4px] bg-[#ECEEF0] "}>
                          14:07-21/11/2021
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={darkMode?"w-[311px] h-[314px] rounded-[14px] bg-[#03030340] p-[20px] relative ":"w-[311px] h-[314px] rounded-[14px] bg-white p-[20px] relative "}>
                    <div className={darkMode?"flex pb-[20px] items-center border-b-[1px] border-b-[#2C303D] ":"flex pb-[20px] items-center border-b-[1px] border-b-[#F3F3F3] "}>
                      <h3 className={darkMode?"text-settingTitle text-[white] mr-[50px] ":"text-settingTitle mr-[50px] "}>
                        Available Sensors
                      </h3>
                      <p
                        onClick={() => setDropDown(!dropDown)}
                        className={darkMode?"flex text-serviceTitle text-[#7C7C8D] cursor-pointer":"flex text-serviceTitle text-[#72767C] cursor-pointer"}
                      >
                        Assets{" "}
                        <span className="ml-[11px] ">{icons.dropDown}</span>
                      </p>
                    </div>
                    <div
                      className={
                        dropDown
                          ? "dropdown  w-[90px] absolute top-[40px] right-[30px] bg-[white] text-subTittle2 pl-[7px] "
                          : "hidden"
                      }
                    >
                      <p className="bg-white hover:bg-[#F3F5F8] cursor-pointer ">
                        first order
                      </p>
                      <p className="bg-white hover:bg-[#F3F5F8] cursor-pointer ">
                        second order
                      </p>
                      <p className="bg-white hover:bg-[#F3F5F8] cursor-pointer ">
                        third order
                      </p>
                      <p className="bg-white hover:bg-[#F3F5F8] cursor-pointer ">
                        fourth order
                      </p>
                      <p className="bg-white hover:bg-[#F3F5F8] cursor-pointer ">
                        fifth order
                      </p>
                    </div>
                    <div className="">
                      <div className="text-messagesSubTitle text-[#D43B3B] mt-[20px] flex items-center justify-between ">
                        <div className="flex items-center">
                          <div className="inline-block py-[5px] px-[4px] bg-[#FF6370] rounded-[3px] mr-[10px] ">
                            {icons.checked}
                          </div>
                          <p>Asset - Fuel Consumed (10</p>
                        </div>
                        <div className="">
                          {icons.progress}
                        </div>
                      </div>  
                      <div className="text-messagesSubTitle  mt-[17.5px] flex items-center justify-between ">
                        <div className="flex items-center">
                          <div className={darkMode?"w-[18px] h-[18px] border-[1px] border-[#333642] rounded-[3px] mr-[10px] ":"w-[18px] h-[18px] border-[1px] rounded-[3px] mr-[10px] "}></div>
                          <p className={darkMode?"text-white ":"text-[#242731] "}>Asset - Runtime <span className="text-[#72767C] ">(km)</span></p>
                        </div>
                        <div className="">
                          {icons.progress2}
                        </div>
                      </div>
                      <div className="text-messagesSubTitle  mt-[17.5px] flex items-center justify-between ">
                        <div className="flex items-center">
                          <div className={darkMode?"w-[18px] h-[18px] border-[1px] border-[#333642] rounded-[3px] mr-[10px] ":"w-[18px] h-[18px] border-[1px] rounded-[3px] mr-[10px] "}></div>
                          <p className={darkMode?"text-white ":"text-[#242731] "}>Asset - Speed <span className="text-[#72767C] "> (hr)</span></p>
                        </div>
                        <div className="">
                          {icons.progress2}
                        </div>
                      </div>
                      <div className="text-messagesSubTitle  mt-[17.5px] flex items-center justify-between ">
                        <div className="flex items-center">
                          <div className={darkMode?"w-[18px] h-[18px] border-[1px] border-[#333642] rounded-[3px] mr-[10px] ":"w-[18px] h-[18px] border-[1px] rounded-[3px] mr-[10px] "}></div>
                          <p className={darkMode?"text-white ":"text-[#242731] "}>Engine Temperature <span className="text-[#72767C] "> (deg C)</span></p>
                        </div>
                        <div className="">
                          {icons.progress2}
                        </div>
                      </div>
                      <div className="text-messagesSubTitle  mt-[17.5px] flex items-center justify-between ">
                        <div className="flex items-center">
                          <div className={darkMode?"w-[18px] h-[18px] border-[1px] border-[#333642] rounded-[3px] mr-[10px] ":"w-[18px] h-[18px] border-[1px] rounded-[3px] mr-[10px] "}></div>
                          <p className={darkMode?"text-white ":"text-[#242731] "}>Asset - Odometer <span className="text-[#72767C] ">(km)</span></p>
                        </div>
                        <div className="">
                          {icons.progress2}
                        </div>
                      </div>
                      <button className="mt-[20px] py-[5px] px-[12px] bg-[#FF6370] rounded-[5px] text-menu2 text-white ">See All</button>                  
                    </div>
                  </div>
                </div>
                <div className={darkMode?"w-[310px] h-auto lg:w-[648px]  bg-[#242731] rounded-[14px] py-[16px] px-[20px] my-[20px] ":"w-[310px] lg:w-[648px] h-[201px] bg-white rounded-[14px] py-[16px] px-[20px] my-[20px] "}>
                  <div className="flex justify-between items-center mb-[14px] ">
                    <h3 className={darkMode?"text-settingTitle text-[white] ":"text-settingTitle "}>Reminder</h3>
                    <button className="py-[6px] px-[12px] bg-[#A162F7] rounded-[6px] text-menu2 text-white ">+ Add New</button>
                  </div>
                  <div className={darkMode?"grid grid-cols-5 gap-[15px] lg:gap-[40px] py-[14px] border-t-[1px] border-t-[#2C303D] lg:text-menu2 text-[9px] ":"grid grid-cols-5 gap-[15px] lg:gap-[82px] py-[14px] border-t-[1px] lg:text-menu2 text-[9px] "}>
                    <div className="text-[#72767C] "><p>Description</p></div>
                    <div className="text-[#72767C] "><p>Due</p></div>
                    <div className="text-[#72767C] "><p>Overdue</p></div>
                    <div className="text-[#72767C] "><p>Notify</p></div>
                    <div className="text-[#72767C] "><p>Status</p></div>
                  </div>
                  <div className={darkMode?"grid grid-cols-5 gap-[15px] lg:gap-[40px] py-[14px] border-t-[1px] border-t-[#2C303D] lg:text-messagesSubTitle text-[7px] text-[#E0E4E7] ":"grid grid-cols-5 gap-[15px] lg:gap-[82px] py-[14px] border-t-[1px] lg:text-messagesSubTitle text-[7px] text-[#242731]  "}>
                    <div><p>Urgent Safety Recall</p></div>
                    <div><p>06/04/2022</p></div>
                    <div><p>08/04/2022</p></div>
                    <div><p>David Demo</p></div>
                    <div><p>Completed</p></div>
                  </div>
                  <div className={darkMode?"grid grid-cols-5 gap-[15px] lg:gap-[40px] py-[14px] border-t-[1px] border-t-[#2C303D] lg:text-messagesSubTitle text-[7px] text-[#E0E4E7] ":"grid grid-cols-5 gap-[15px] lg:gap-[82px] py-[14px] border-t-[1px] lg:text-messagesSubTitle text-[7px] text-[#242731]  "}>
                    <div><p>Urgent Safety Recall</p></div>
                    <div><p>06/04/2022</p></div>
                    <div><p>08/04/2022</p></div>
                    <div><p>David Demo</p></div>
                    <div><p>Completed</p></div>
                  </div>                                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
