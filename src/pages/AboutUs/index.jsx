import React from "react";

import { Button, Img, Line, Radio, Text } from "components";
import Footer from "components/Footer";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <div className="bg-white-A700 border-b border-blue_gray-100 border-solid flex flex-row md:gap-10 items-center justify-between p-5 w-full">
              <div className="header-row ">
                <Img
                  className="h-[50px] md:h-auto object-cover"
                  src="images/img_sokhtamon1.png"
                  alt="sokhtamonone"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[38px] sm:hidden items-center justify-start mr-[50px] w-auto">
                <Text
                  className="text-blue_gray-500 text-sm tracking-[0.20px] w-auto"
                  size="txtRobotoRegular14"
                >
                  City
                </Text>
                <Button
                  className="cursor-pointer h-[42px] text-center text-sm tracking-[0.20px] w-[108px]"
                  shape="round"
                  size="sm"
                >
                  About Us
                </Button>
                <div className="flex flex-col h-[42px] md:h-auto items-center justify-center px-[13px] py-3 w-[108px]">
                  <a
                    href="javascript:"
                    className="text-blue_gray-500 text-sm tracking-[0.20px] w-auto"
                  >
                    <Text size="txtRobotoRegular14">Contact Us</Text>
                  </a>
                </div>
                <div className="flex flex-col items-center justify-start w-[9%] sm:w-full">
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
              About Us
            </Text>
          </div>
          <Text
            className="mt-[65px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
            size="txtRobotoBold32"
          >
            Material Points Company
          </Text>
          <Text
            className="leading-[150.00%] lowercase mt-[21px] text-base text-blue_gray-300 text-center tracking-[0.20px] w-[91%] sm:w-full"
            size="txtRobotoRegular16"
          >
            lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT
            AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM
            lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT
            AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM
            lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT
            AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR
            LOREMlOREM IPSUM DOLOR SIT AMET CONSETETUR.
          </Text>
          <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1300px] min-h-[auto] mt-[50px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-start justify-center p-[25px] sm:px-5 rounded-md shadow-bs2 w-full">
              <Radio
                value="Appliances"
                className="font-bold mt-[3px] text-base text-blue_gray-900 text-left"
                inputClassName="border-2 border-indigo-A200 border-solid h-5 mr-[5px] w-5"
                checked={false}
                name="productname"
                label="Appliances"
                id="Appliances"
              ></Radio>
              <Text
                className="leading-[150.00%] lowercase mb-1 text-blue_gray-300 text-xs tracking-[0.20px] w-full"
                size="txtRobotoRegular12Bluegray300"
              >
                lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR
                LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM
                DOLOR SIT AMET CONSETETUR CONSETETUR LOREM lOREM IPSUM DOLOR SIT
                AMET CONSETETUR
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-start justify-center p-[25px] sm:px-5 rounded-md shadow-bs2 w-full">
              <Radio
                value="ResidencialService"
                className="font-bold mt-[3px] text-base text-blue_gray-900 text-left"
                inputClassName="border-2 border-indigo-A200 border-solid h-5 mr-[5px] w-5"
                checked={false}
                name="productname1"
                label="Residencial Service"
                id="ResidencialService"
              ></Radio>
              <Text
                className="leading-[150.00%] lowercase mb-1 text-blue_gray-300 text-xs tracking-[0.20px] w-full"
                size="txtRobotoRegular12Bluegray300"
              >
                lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR
                LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM
                DOLOR SIT AMET CONSETETUR CONSETETUR LOREM lOREM IPSUM DOLOR SIT
                AMET CONSETETUR
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-start justify-center p-[25px] sm:px-5 rounded-md shadow-bs2 w-full">
              <Radio
                value="CommercialService"
                className="font-bold mt-[3px] text-base text-blue_gray-900 text-left"
                inputClassName="border-2 border-indigo-A200 border-solid h-5 mr-[5px] w-5"
                checked={false}
                name="productname2"
                label="Commercial Service"
                id="CommercialService"
              ></Radio>
              <Text
                className="leading-[150.00%] lowercase mb-1 text-blue_gray-300 text-xs tracking-[0.20px] w-full"
                size="txtRobotoRegular12Bluegray300"
              >
                lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR
                LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM
                DOLOR SIT AMET CONSETETUR CONSETETUR LOREM lOREM IPSUM DOLOR SIT
                AMET CONSETETUR
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-start justify-center p-[25px] sm:px-5 rounded-md shadow-bs2 w-full">
              <Radio
                value="CommercialService"
                className="font-bold mt-[3px] text-base text-blue_gray-900 text-left"
                inputClassName="border-2 border-indigo-A200 border-solid h-5 mr-[5px] w-5"
                checked={false}
                name="productname3"
                label="Commercial Service"
                id="CommercialService2"
              ></Radio>
              <Text
                className="leading-[150.00%] lowercase mb-1 text-blue_gray-300 text-xs tracking-[0.20px] w-full"
                size="txtRobotoRegular12Bluegray300"
              >
                lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR
                LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM
                DOLOR SIT AMET CONSETETUR CONSETETUR LOREM lOREM IPSUM DOLOR SIT
                AMET CONSETETUR
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-start justify-center p-[25px] sm:px-5 rounded-md shadow-bs2 w-full">
              <Radio
                value="Maintenance"
                className="font-bold mt-[3px] text-base text-blue_gray-900 text-left"
                inputClassName="border-2 border-indigo-A200 border-solid h-5 mr-[5px] w-5"
                checked={false}
                name="productname4"
                label="Maintenance"
                id="Maintenance"
              ></Radio>
              <Text
                className="leading-[150.00%] lowercase mb-1 text-blue_gray-300 text-xs tracking-[0.20px] w-full"
                size="txtRobotoRegular12Bluegray300"
              >
                lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR
                LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM
                DOLOR SIT AMET CONSETETUR CONSETETUR LOREM lOREM IPSUM DOLOR SIT
                AMET CONSETETUR
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-1 flex-col gap-2.5 items-start justify-center p-[25px] sm:px-5 rounded-md shadow-bs2 w-full">
              <Radio
                value="Maintenance"
                className="font-bold mt-[3px] text-base text-blue_gray-900 text-left"
                inputClassName="border-2 border-indigo-A200 border-solid h-5 mr-[5px] w-5"
                checked={false}
                name="productname5"
                label="Maintenance"
                id="Maintenance2"
              ></Radio>
              <Text
                className="leading-[150.00%] lowercase mb-1 text-blue_gray-300 text-xs tracking-[0.20px] w-full"
                size="txtRobotoRegular12Bluegray300"
              >
                lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR
                LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM
                DOLOR SIT AMET CONSETETUR CONSETETUR LOREM lOREM IPSUM DOLOR SIT
                AMET CONSETETUR
              </Text>
            </div>
          </div>
          <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1299px] min-h-[auto] mt-[50px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-1 flex-col gap-[35px] items-center justify-center p-[15px] rounded-md w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-center mt-[31px] rounded-[50%] shadow-bs3 w-[150px]">
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_group1261152866.svg"
                  alt="group1261152866"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[31px] w-auto sm:w-full">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtRobotoBold20Black900"
                >
                  Markets
                </Text>
                <Text
                  className="leading-[150.00%] lowercase max-w-[383px] md:max-w-full text-base text-blue_gray-300 text-center tracking-[0.20px]"
                  size="txtRobotoRegular16"
                >
                  lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                  SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET
                  CONSETETUR LOREM
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-1 flex-col gap-[35px] items-center justify-center p-[15px] rounded-md w-full">
              <div className="bg-white-A700 flex flex-col h-[150px] items-center justify-start mt-[31px] p-10 sm:px-5 rounded-[50%] shadow-bs3 w-[150px]">
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_save.svg"
                  alt="save"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[31px] w-auto sm:w-full">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtRobotoBold20Black900"
                >
                  Construction Materials
                </Text>
                <Text
                  className="leading-[150.00%] lowercase max-w-[383px] md:max-w-full text-base text-blue_gray-300 text-center tracking-[0.20px]"
                  size="txtRobotoRegular16"
                >
                  lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                  SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET
                  CONSETETUR LOREM
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-1 flex-col gap-[35px] items-center justify-center p-[15px] rounded-md w-full">
              <div className="bg-white-A700 flex flex-col h-[150px] items-center justify-start mt-[31px] p-10 sm:px-5 rounded-[50%] shadow-bs3 w-[150px]">
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_group1261152869.svg"
                  alt="group1261152869"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[31px] w-auto sm:w-full">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtRobotoBold20Black900"
                >
                  Doors
                </Text>
                <Text
                  className="leading-[150.00%] lowercase max-w-[383px] md:max-w-full text-base text-blue_gray-300 text-center tracking-[0.20px]"
                  size="txtRobotoRegular16"
                >
                  lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                  SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET
                  CONSETETUR LOREM
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-1 flex-col gap-[35px] items-center justify-center p-[15px] rounded-md w-full">
              <div className="bg-white-A700 flex flex-col h-[150px] items-center justify-start mt-[31px] p-10 sm:px-5 rounded-[50%] shadow-bs3 w-[150px]">
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[31px] w-auto sm:w-full">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtRobotoBold20Black900"
                >
                  Electrical And Lightning
                </Text>
                <Text
                  className="leading-[150.00%] lowercase max-w-[383px] md:max-w-full text-base text-blue_gray-300 text-center tracking-[0.20px]"
                  size="txtRobotoRegular16"
                >
                  lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                  SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET
                  CONSETETUR LOREM
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-1 flex-col gap-[35px] items-center justify-center p-[15px] rounded-md w-full">
              <div className="bg-white-A700 flex flex-col h-[150px] items-center justify-start mt-[31px] p-10 sm:px-5 rounded-[50%] shadow-bs3 w-[150px]">
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_group1261152859.svg"
                  alt="group1261152859"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[31px] w-auto sm:w-full">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtRobotoBold20Black900"
                >
                  Tools And Equipment
                </Text>
                <Text
                  className="leading-[150.00%] lowercase max-w-[383px] md:max-w-full text-base text-blue_gray-300 text-center tracking-[0.20px]"
                  size="txtRobotoRegular16"
                >
                  lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                  SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET
                  CONSETETUR LOREM
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-1 flex-col gap-[35px] items-center justify-center p-[15px] rounded-md w-full">
              <div className="bg-white-A700 flex flex-col h-[150px] items-center justify-start mt-[31px] p-10 sm:px-5 rounded-[50%] shadow-bs3 w-[150px]">
                <Img
                  className="h-[70px] w-[70px]"
                  src="images/img_checkmark_indigo_a200.svg"
                  alt="checkmark"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-start mb-[31px] w-auto sm:w-full">
                <Text
                  className="text-black-900 text-xl w-auto"
                  size="txtRobotoBold20Black900"
                >
                  Plumbing
                </Text>
                <Text
                  className="leading-[150.00%] lowercase max-w-[383px] md:max-w-full text-base text-blue_gray-300 text-center tracking-[0.20px]"
                  size="txtRobotoRegular16"
                >
                  lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                  SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET
                  CONSETETUR LOREM
                </Text>
              </div>
            </div>
          </div>
          <Footer className="bg-white-A700 flex items-center justify-center mt-[70px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
