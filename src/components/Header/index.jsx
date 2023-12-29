import React from "react";

import { Img, List, Text } from "components";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 border-b border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-10 items-center justify-between p-5 w-full">
          <div className="header-row ">
            <Img
              className="h-[50px] md:h-auto object-cover"
              src="images/img_sokhtamon1.png"
              alt="sokhtamonOne"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-[38px] sm:hidden items-center justify-start mr-[50px] w-auto">
            <Link to=""
              className="text-blue_gray-500 text-sm tracking-[0.20px] w-auto"
              size="txtRobotoRegular14"
            >
              City
            </Link>
            <List
              className="sm:flex-col flex-row gap-[38px] grid grid-cols-3 w-[76%] sm:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col h-[42px] md:h-auto items-center justify-center px-[13px] py-3 w-[108px]">
                <Text
                  className="text-blue_gray-300_01 text-sm tracking-[0.20px] w-auto"
                  size="txtRobotoRegular14Bluegray30001"
                >
                  About Us
                </Text>
              </div>
              <div className="flex flex-col h-[42px] md:h-auto items-center justify-center px-[13px] py-3 w-[108px]">

               <Link to="/contactus">
               <Text
                  className="text-blue_gray-500 text-sm tracking-[0.20px] w-auto"
                  size="txtRobotoRegular14">
                  Contact Us
                </Text>
               </Link>
               
              </div>
              <div className="flex flex-col h-[42px] md:h-auto items-center justify-center px-[13px] py-3 w-[108px]">
                <Text
                  className="text-blue_gray-300_01 text-sm tracking-[0.20px] w-auto"
                  size="txtRobotoRomanMedium14Bluegray30001"
                >
                  Services
                </Text>
              </div>
            </List>
            <div className="flex flex-col items-center justify-start w-[6%] sm:w-full">
              <div className="flex flex-col items-center justify-start w-auto">
               <Link to="/aboutus"  className="text-blue_gray-500 text-xs tracking-[0.20px] w-auto"
                  size="txtRobotoRegular12">
              Login
               </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
