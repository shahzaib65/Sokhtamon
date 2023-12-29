import React from "react";

import { Img, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";

const selectCategoryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomepageOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <div className="bg-white-A700 border-b border-blue_gray-100 border-solid flex flex-row md:gap-10 items-center justify-between p-5 w-full">
              <div className="h-[50px] ml-[50px] relative w-[7%]">
                <Img
                  className="h-[50px] m-auto object-cover w-full"
                  src="images/img_sokhtamon1.png"
                  alt="sokhtamonOne"
                />
                <Img
                  className="absolute h-[50px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_sokhtamon1.png"
                  alt="sokhtamonOne_One"
                />
              </div>
              <ul className="flex flex-row gap-10 sm:hidden items-center justify-start mr-[50px] w-auto common-row-list">
                <li>
                  <a
                    href="javascript:"
                    className="text-blue_gray-500 text-sm tracking-[0.20px]"
                  >
                    <Text size="txtRobotoRegular14">City</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-blue_gray-500 text-sm tracking-[0.20px]"
                  >
                    <Text size="txtRobotoRegular14">About Us</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-blue_gray-500 text-sm tracking-[0.20px]"
                  >
                    <Text size="txtRobotoRegular14">Contact Us</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex flex-col items-center justify-start w-full">
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
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <div className="h-[601px] sm:h-[620px] md:px-5 relative w-full">
            <Img
              className="h-[601px] m-auto object-cover w-full"
              src="images/img_rectangle1909123830.png"
              alt="rectangle190912"
            />
            <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[8%] w-[91%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="h-[50px] relative w-[49%] md:w-full">
                  <div className="bg-white-A700 flex flex-col h-full items-end justify-start m-auto md:pl-10 sm:pl-5 pl-[575px] rounded w-full">
                    <Img
                      className="h-[50px] rounded-br rounded-tr w-[50px]"
                      src="images/img_frame198.svg"
                      alt="frame198"
                    />
                  </div>
                  <div className="absolute flex flex-row sm:gap-10 h-max inset-y-[0] items-center justify-between left-[2%] my-auto w-[89%]">
                    <Text
                      className="text-blue_gray-300 text-sm tracking-[0.20px]"
                      size="txtRobotoRegular14Bluegray300"
                    >
                      Search
                    </Text>
                    <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                      <SelectBox
                        className="text-black-900 text-left text-sm tracking-[0.20px] w-[78%] sm:w-full"
                        placeholderClassName="text-black-900"
                        indicator={
                          <Img
                            className="h-5 w-5"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="frame1984077262"
                        options={selectCategoryOptionsList}
                        isSearchable={false}
                        placeholder="Select Category"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[12%] md:w-full">
                  <div className="md:h-[42px] h-[50px] pr-1 py-1 relative rounded w-full">
                    <div className="bg-yellow-800 h-[42px] m-auto rounded-sm w-[98%]"></div>
                    <Text
                      className="absolute h-max inset-[0] justify-center m-auto text-sm text-white-A700 tracking-[0.20px] w-max"
                      size="txtRobotoRomanSemiBold14"
                    >
                      Place an Add
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="leading-[133.00%] mt-[51px] sm:text-[34px] md:text-[40px] text-[44px] text-white-A700 tracking-[1.32px] w-[52%] sm:w-full"
                size="txtRobotoRomanSemiBold44"
              >
                Diversified And Unvarying Material
              </Text>
              <Text
                className="leading-[150.00%] mt-5 text-lg text-white-A700 tracking-[0.20px] w-[45%] sm:w-full"
                size="txtRobotoRegular18"
              >
                Lorem ipsum dolor sit amet consetetur Lorem ipsum dolor sit amet
                consetetur Lorem ipsum dolor sit amet consetetur Lorem ipsum
                dolor sit amet consetetur Lorem ipsum dolor sit amet consetetur.
              </Text>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[70px] grid sm:grid-cols-1 grid-cols-2 mt-[70px] w-[45%]"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-[25px] items-center justify-start w-auto">
                  <Img
                    className="h-20 md:h-auto rounded-[50%] w-20"
                    src="images/img_ellipse77.png"
                    alt="ellipseSeventySeven"
                  />
                  <div className="flex flex-col gap-[-3px] items-start justify-start w-auto">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.20px] w-auto"
                      size="txtRobotoRomanBold28"
                    >
                      10,000 +
                    </Text>
                    <Text
                      className="text-lg text-white-A700 tracking-[0.20px] w-auto"
                      size="txtRobotoRomanMedium18"
                    >
                      Satisfied Clients
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[25px] items-center justify-start w-auto">
                  <Img
                    className="h-20 md:h-auto rounded-[50%] w-20"
                    src="images/img_ellipse77_80x80.png"
                    alt="ellipseSeventySeven"
                  />
                  <div className="flex flex-col gap-[-3px] items-start justify-start w-auto">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700 tracking-[0.20px] w-auto"
                      size="txtRobotoRomanBold28"
                    >
                      500 +
                    </Text>
                    <Text
                      className="text-lg text-white-A700 tracking-[0.20px] w-auto"
                      size="txtRobotoRomanMedium18"
                    >
                      Projects Completed
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <Text
            className="mt-[62px] md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
            size="txtRobotoBold32"
          >
            New Advertisement
          </Text>
          <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1300px] min-h-[auto] mt-[54px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid flex flex-1 flex-col items-center justify-start pb-[33px] rounded-md w-full">
              <Img
                className="h-[265px] sm:h-auto object-cover rounded-bl rounded-br rounded-tl-md rounded-tr-md w-full"
                src="images/img_rectangle32.png"
                alt="rectangleThirtyTwo"
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
                alt="rectangleThirtyTwo"
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
                alt="rectangleThirtyTwo"
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
                alt="rectangleThirtyTwo"
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
                alt="rectangleThirtyTwo"
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
                alt="rectangleThirtyTwo"
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

export default HomepageOnePage;
