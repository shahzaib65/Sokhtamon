import React from "react";

import { Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const ServicesOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="flex flex-col items-center justify-center md:px-5 w-full" />
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
              Detail Page
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-10 items-start justify-start max-w-[1300px] mt-[70px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start w-[37%] md:w-full">
              <Img
                className="h-[416px] md:h-auto object-cover rounded-bl-[5px] rounded-br-[5px] w-full"
                src="images/img_rectangle1909123854.png"
                alt="rectangle190912"
              />
              <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-between w-full">
                <Img
                  className="h-[100px] md:h-auto object-cover rounded-lg"
                  src="images/img_rectangle3171.png"
                  alt="rectangle3171"
                />
                <Img
                  className="h-[100px] md:h-auto object-cover rounded-lg"
                  src="images/img_rectangle3172.png"
                  alt="rectangle3172"
                />
                <Img
                  className="h-[100px] md:h-auto object-cover rounded-lg"
                  src="images/img_rectangle3173.png"
                  alt="rectangle3173"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-3/5 md:w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex flex-row sm:gap-10 gap-[349px] items-center justify-between w-auto md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtRobotoRomanSemiBold24Black900"
                  >
                    Summoni
                  </Text>
                  <Text
                    className="sm:text-[34px] md:text-[40px] text-[44px] text-yellow-800 w-auto"
                    size="txtRobotoRomanBold44"
                  >
                    1199
                  </Text>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start w-auto md:w-full">
                  <div className="flex flex-row gap-2 h-6 md:h-auto items-center justify-start w-auto">
                    <div className="flex flex-row gap-0.5 items-center justify-start w-auto">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icactionsstar.svg"
                        alt="icactionsstar"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_icactionsstar.svg"
                        alt="icactionsstaron"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_icactionsstar.svg"
                        alt="icactionsstartw"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_icactionsstar.svg"
                        alt="icactionsstarth"
                      />
                      <Img
                        className="h-5 w-5"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                    </div>
                    <Text
                      className="text-blue_gray-600 text-sm tracking-[-0.28px] w-[70px]"
                      size="txtRobotoRomanRegular14Bluegray600"
                    >
                      440+ Views
                    </Text>
                  </div>
                  <Text
                    className="leading-[35.00px] max-w-[780px] md:max-w-full text-[19px] text-blue_gray-300_01"
                    size="txtRobotoRomanRegular19"
                  >
                    <span className="text-blue_gray-300_01 font-roboto text-left font-normal">
                      Chanbeller new nay size size 40 - 450c 50 - 600c 60 hamay
                      namudosh hamay razmerosh hastay chorkuncha circla ma hamay
                      namudosh hamay razmerosh hastay chorkuncha circla{" "}
                    </span>
                    <span className="text-blue_gray-300_01 font-roboto text-left font-normal">
                      Chanbeller new nay size size 40 - 450c 50 - 600c 60 hamay
                      namudosh hamay razmerosh hastay chorkuncha circla ma hamay
                      namudosh hamay razmerosh hastay chorkuncha circle.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                <Text
                  className="text-black-900 text-lg w-auto"
                  size="txtRobotoRomanSemiBold18"
                >
                  Dushbane
                </Text>
                <Text
                  className="text-indigo-A200 text-xs w-auto"
                  size="txtRobotoRomanMedium12"
                >
                  03436683499
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="mt-[75px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
            size="txtRobotoBold32"
          >
            Frequently Advertisement
          </Text>
          <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1300px] min-h-[auto] mt-[51px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-1 flex-col items-center justify-start pb-[33px] rounded-md w-full">
              <Img
                className="h-[265px] sm:h-auto object-cover rounded-bl rounded-br rounded-tl-md rounded-tr-md w-full"
                src="images/img_rectangle32.png"
                alt="rectanglethirty"
              />
              <Text
                className="mt-[17px] text-blue_gray-900 text-xl"
                size="txtRobotoBold20"
              >
                Cement
              </Text>
              <Text
                className="leading-[150.00%] lowercase mt-[13px] text-base text-blue_gray-300 text-center tracking-[0.20px] w-[93%] sm:w-full"
                size="txtRobotoRegular16"
              >
                lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR
                LOREM
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-start mt-1.5 w-auto">
                <Text
                  className="text-base text-indigo-A200 tracking-[0.20px] w-auto"
                  size="txtRobotoRomanSemiBold16"
                >
                  Sommoni :
                </Text>
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  1199
                </Text>
              </div>
              <div className="flex flex-row gap-[15px] items-center justify-start mt-[15px] w-auto">
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  13:12:2023
                </Text>
                <Line className="bg-blue_gray-300_01 h-[25px] w-px" />
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  12:30 PM
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-1 flex-col items-center justify-start pb-[33px] rounded-md w-full">
              <Img
                className="h-[265px] sm:h-auto object-cover rounded-bl rounded-br rounded-tl-md rounded-tr-md w-full"
                src="images/img_rectangle32_265x413.png"
                alt="rectanglethirty"
              />
              <Text
                className="mt-[19px] text-blue_gray-900 text-xl"
                size="txtRobotoBold20"
              >
                Electrical & Lightning
              </Text>
              <Text
                className="leading-[150.00%] lowercase mt-[11px] text-base text-blue_gray-300 text-center tracking-[0.20px] w-[93%] sm:w-full"
                size="txtRobotoRegular16"
              >
                lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR
                LOREM
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-start mt-1.5 w-auto">
                <Text
                  className="text-base text-indigo-A200 tracking-[0.20px] w-auto"
                  size="txtRobotoRomanSemiBold16"
                >
                  Sommoni :
                </Text>
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  1199
                </Text>
              </div>
              <div className="flex flex-row gap-[15px] items-center justify-start mt-[15px] w-auto">
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  13:12:2023
                </Text>
                <Line className="bg-blue_gray-300_01 h-[25px] w-px" />
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  12:30 PM
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-1 flex-col items-center justify-start pb-[33px] rounded-md w-full">
              <Img
                className="h-[265px] sm:h-auto object-cover rounded-bl rounded-br rounded-tl-md rounded-tr-md w-full"
                src="images/img_rectangle32_1.png"
                alt="rectanglethirty"
              />
              <Text
                className="mt-[19px] text-blue_gray-900 text-xl"
                size="txtRobotoBold20"
              >
                Engineering Service
              </Text>
              <Text
                className="leading-[150.00%] lowercase mt-[11px] text-base text-blue_gray-300 text-center tracking-[0.20px] w-[93%] sm:w-full"
                size="txtRobotoRegular16"
              >
                lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR
                LOREM
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-start mt-1.5 w-auto">
                <Text
                  className="text-base text-indigo-A200 tracking-[0.20px] w-auto"
                  size="txtRobotoRomanSemiBold16"
                >
                  Sommoni :
                </Text>
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  1199
                </Text>
              </div>
              <div className="flex flex-row gap-[15px] items-center justify-start mt-[15px] w-auto">
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  13:12:2023
                </Text>
                <Line className="bg-blue_gray-300_01 h-[25px] w-px" />
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  12:30 PM
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-1 flex-col items-center justify-start pb-[33px] rounded-md w-full">
              <Img
                className="h-[265px] sm:h-auto object-cover rounded-bl rounded-br rounded-tl-md rounded-tr-md w-full"
                src="images/img_rectangle32_2.png"
                alt="rectanglethirty"
              />
              <Text
                className="mt-[19px] text-blue_gray-900 text-xl"
                size="txtRobotoBold20"
              >
                Plumbing
              </Text>
              <Text
                className="leading-[150.00%] lowercase mt-[11px] text-base text-blue_gray-300 text-center tracking-[0.20px] w-[93%] sm:w-full"
                size="txtRobotoRegular16"
              >
                lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR
                LOREM
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-start mt-1.5 w-auto">
                <Text
                  className="text-base text-indigo-A200 tracking-[0.20px] w-auto"
                  size="txtRobotoRomanSemiBold16"
                >
                  Sommoni :
                </Text>
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  1199
                </Text>
              </div>
              <div className="flex flex-row gap-[15px] items-center justify-start mt-[15px] w-auto">
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  13:12:2023
                </Text>
                <Line className="bg-blue_gray-300_01 h-[25px] w-px" />
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  12:30 PM
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-1 flex-col items-center justify-start pb-[33px] rounded-md w-full">
              <Img
                className="h-[265px] sm:h-auto object-cover rounded-bl rounded-br rounded-tl-md rounded-tr-md w-full"
                src="images/img_rectangle32_3.png"
                alt="rectanglethirty"
              />
              <Text
                className="mt-[19px] text-blue_gray-900 text-xl"
                size="txtRobotoBold20"
              >
                Fosteners And Rigging
              </Text>
              <Text
                className="leading-[150.00%] lowercase mt-[11px] text-base text-blue_gray-300 text-center tracking-[0.20px] w-[93%] sm:w-full"
                size="txtRobotoRegular16"
              >
                lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR
                LOREM
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-start mt-1.5 w-auto">
                <Text
                  className="text-base text-indigo-A200 tracking-[0.20px] w-auto"
                  size="txtRobotoRomanSemiBold16"
                >
                  Sommoni :
                </Text>
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  1199
                </Text>
              </div>
              <div className="flex flex-row gap-[15px] items-center justify-start mt-[15px] w-auto">
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  13:12:2023
                </Text>
                <Line className="bg-blue_gray-300_01 h-[25px] w-px" />
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  12:30 PM
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-1 flex-col items-center justify-start pb-[33px] rounded-md w-full">
              <Img
                className="h-[265px] sm:h-auto object-cover rounded-bl rounded-br rounded-tl-md rounded-tr-md w-full"
                src="images/img_rectangle32_4.png"
                alt="rectanglethirty"
              />
              <Text
                className="mt-[19px] text-blue_gray-900 text-xl"
                size="txtRobotoBold20"
              >
                Appliances
              </Text>
              <Text
                className="leading-[150.00%] lowercase mt-[11px] text-base text-blue_gray-300 text-center tracking-[0.20px] w-[93%] sm:w-full"
                size="txtRobotoRegular16"
              >
                lOREM IPSUM DOLOR SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR
                SIT AMET CONSETETUR LOREM lOREM IPSUM DOLOR SIT AMET CONSETETUR
                LOREM
              </Text>
              <div className="flex flex-row gap-2.5 items-center justify-start mt-1.5 w-auto">
                <Text
                  className="text-base text-indigo-A200 tracking-[0.20px] w-auto"
                  size="txtRobotoRomanSemiBold16"
                >
                  Sommoni :
                </Text>
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  1199
                </Text>
              </div>
              <div className="flex flex-row gap-[15px] items-center justify-start mt-[15px] w-auto">
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  13:12:2023
                </Text>
                <Line className="bg-blue_gray-300_01 h-[25px] w-px" />
                <Text
                  className="text-gray-800 text-lg tracking-[0.20px] w-auto"
                  size="txtRobotoBold18"
                >
                  12:30 PM
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

export default ServicesOnePage;
