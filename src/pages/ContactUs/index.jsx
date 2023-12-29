import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import { Link } from "react-router-dom";

const ContactUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 border-b border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center p-5 w-full">
            <div className="header-row ">
             <Link to="/">
             <Img
                className="h-[50px] md:h-auto object-cover"
                src="images/img_sokhtamon1.png"
                alt="sokhtamonone"
              />
             </Link>
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <Text
              className="sm:hidden md:ml-[0] ml-[868px] text-blue_gray-500 text-sm tracking-[0.20px]"
              size="txtRobotoRegular14"
            >
              City
            </Text>
            <Link to="/aboutus">
            <Text
              className="sm:hidden md:ml-[0] ml-[46px] text-blue_gray-500 text-sm tracking-[0.20px]"
              size="txtRobotoRegular14"
            >
              About Us
            </Text>
            </Link>
          
            <Button
              className="cursor-pointer h-[42px] sm:hidden md:ml-[0] ml-[45px] md:mt-0 my-1 text-center text-sm tracking-[0.20px] w-[108px]"
              shape="round"
              size="sm"
            >
              Contact Us
            </Button>
            <div className="flex md:flex-1 flex-col sm:hidden items-center justify-start ml-6 md:ml-[0] w-[3%] md:w-full">
              <div className="flex flex-col items-center justify-start w-auto">
                <a
                  href="javascript:"
                  className="text-blue_gray-500 text-xs tracking-[0.20px] w-auto"
                >
                  <Text size="txtRobotoRegular12">Login</Text>
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="h-[340px] md:px-5 relative w-full">
          <Img
            className="h-[340px] m-auto object-cover w-full"
            src="images/img_rectangle3282.png"
            alt="rectangle3282"
          />
          <Text
            className="absolute h-max inset-[0] justify-center m-auto sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700 tracking-[-1.00px] w-max"
            size="txtRobotoRomanBold50"
          >
            Contact Us
          </Text>
        </div>
        <Text
          className="mt-[62px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
          size="txtRobotoBold32"
        >
          Get In Touch
        </Text>
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1300px] mt-[54px] mx-auto p-[11px] md:px-5 rounded-[10px] shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-[49px] items-start justify-between w-[99%] md:w-full">
            <div className="bg-deep_orange-A100 flex flex-col items-end justify-end pl-10 sm:pl-5 pt-10 rounded-[10px] w-2/5 md:w-full">
              <div className="flex flex-col items-start justify-start mt-2.5 w-full">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700 tracking-[-0.52px]"
                  size="txtRobotoRomanBold26"
                >
                  Contact Information
                </Text>
                <Text
                  className="mt-4 text-base text-white-A700"
                  size="txtRobotoRomanMedium16"
                >
                  Feel free to contact with us.
                </Text>
                <div className="flex flex-row gap-[15px] items-start justify-start mt-[62px] w-[35%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxsphonecall.svg"
                    alt="bxsphonecall"
                  />
                  <Text
                    className="text-base text-white-A700"
                    size="txtRobotoRomanMedium16"
                  >
                    +1012 3456 789
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-start mt-[30px] w-[38%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icsharpemail.svg"
                    alt="icsharpemail"
                  />
                  <Text
                    className="mt-[3px] text-base text-white-A700"
                    size="txtRobotoRomanMedium16"
                  >
                    demo@gmail.com
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-start mt-[30px] w-[73%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_carbonlocationfilled.svg"
                    alt="carbonlocationf"
                  />
                  <Text
                    className="text-base text-white-A700 w-[89%] sm:w-full"
                    size="txtRobotoRomanMedium16"
                  >
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-[83px] w-full">
                  <Img
                    className="h-[54px] mb-3"
                    src="images/img_group1000001776.svg"
                    alt="group1000001776"
                  />
                  <div className="h-[37px] md:h-[66px] mt-[29px] relative w-[47%]">
                    <div className="absolute bg-white-A700_1e bottom-[0] h-[11px] right-[0] rounded-[90px] w-[87%]"></div>
                    <div className="absolute bg-gray-50_21 h-[37px] inset-y-[0] left-[0] my-auto rounded-[69px] w-[67%]"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start md:mt-0 mt-12 w-[58%] md:w-full">
              <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] w-[68%] md:w-full">
                <Text
                  className="text-base text-blue_gray-300_02"
                  size="txtRobotoRomanMedium16Bluegray30002"
                >
                  Full Name
                </Text>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoRomanMedium16Black900"
                >
                  Email Address
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[7px] mt-3 w-[53%] md:w-full">
                <div className="bg-gray-600 h-[13px] w-[1%]"></div>
                <div className="bg-gray-600 h-[13px] w-[1%]"></div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[50px] items-center justify-between ml-0.5 md:ml-[0] mt-[11px] w-full">
                <Line className="bg-blue_gray-400 h-px w-[47%]" />
                <Line className="bg-blue_gray-300_02 h-px w-[47%]" />
              </div>
              <div className="flex flex-row items-start justify-between ml-0.5 md:ml-[0] mt-[43px] w-[69%] md:w-full">
                <Text
                  className="text-base text-blue_gray-300_02"
                  size="txtRobotoRomanMedium16Bluegray30002"
                >
                  Subject
                </Text>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoRomanMedium16Black900"
                >
                  Phone Number
                </Text>
              </div>
              <div className="flex flex-row items-start justify-between md:ml-[0] ml-[7px] mt-2 w-[68%] md:w-full">
                <div className="bg-gray-600 h-[13px] w-[1%]"></div>
                <Text
                  className="text-gray-900_01 text-sm"
                  size="txtRobotoRomanMedium14"
                >
                  +1 012 3456 789
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[55px] items-center justify-between ml-0.5 md:ml-[0] mt-[9px] w-full">
                <Line className="bg-blue_gray-400 h-px w-[47%]" />
                <Line className="bg-gray-900_01 h-px w-[47%]" />
              </div>
              <Text
                className="ml-0.5 md:ml-[0] mt-[45px] text-base text-gray-900_02"
                size="txtRobotoRomanMedium16Gray90002"
              >
                Description
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] mt-[9px] text-blue_gray-300_02 text-sm"
                size="txtRobotoRomanMedium14Bluegray30002"
              >
                Write your message..
              </Text>
              <Line className="bg-blue_gray-400 h-px mt-2 w-full" />
              <Button
                className="cursor-pointer font-bold h-14 leading-[normal] min-w-[202px] md:ml-[0] ml-[500px] mt-[85px] rounded-[5px] shadow-bs1 text-base text-center"
                shape="round"
                size="md"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-white-A700 flex items-center justify-center mt-[70px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ContactUsPage;
