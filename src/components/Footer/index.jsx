import React from "react";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-0.5 py-[18px] w-full">
          <div className="flex flex-col items-center justify-center mt-[42px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[70px] mr-[177px] w-[83%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[28%] md:w-full">
                <Img
                  className="h-[50px] md:h-auto object-cover w-[29%] sm:w-full"
                  src="images/img_sokhtamon1.png"
                  alt="sokhtamonOne_One"
                />
                <Text
                  className="leading-[148.00%] mt-[15px] text-base text-gray-900 tracking-[0.51px] w-full"
                  size="txtRobotoMedium16"
                >
                  Lorem ipsum dolor sit amet consetetur sit amet lorem ipsum
                  dolor sit amet consetetur sit amet{" "}
                </Text>
                <Img
                  className="h-[21px] mt-[35px] w-24"
                  src="images/img_user.svg"
                  alt="user"
                />
              </div>
              <div className="flex flex-col gap-[35px] items-end justify-start w-[58%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start md:mt-0 mt-0.5 w-[11%] md:w-full">
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRobotoRomanSemiBold20"
                    >
                      Page
                    </Text>
                    <div className="flex flex-col gap-[27px] items-start justify-start w-auto">
                      <Text
                        className="text-base text-gray-900 tracking-[0.51px] w-auto"
                        size="txtRobotoMedium16"
                      >
                        Home
                      </Text>
                      <Text
                        className="text-base text-gray-900 tracking-[0.51px] w-auto"
                        size="txtRobotoMedium16"
                      >
                        About Us
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[185px] w-[18%] md:w-full">
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRobotoRomanSemiBold20"
                    >
                      Support
                    </Text>
                    <ul className="flex flex-col gap-[27px] items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <Text
                          className="text-base text-gray-900 tracking-[0.51px]"
                          size="txtRobotoMedium16"
                        >
                          FAQ,s
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-base text-gray-900 tracking-[0.51px]"
                          size="txtRobotoMedium16"
                        >
                          Support Center
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-base text-gray-900 tracking-[0.51px]"
                          size="txtRobotoMedium16"
                        >
                          Security
                        </Text>
                      </li>
                    </ul>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-5 items-start justify-start md:ml-[0] ml-[100px] w-[31%] md:w-full">
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtRobotoRomanSemiBold20"
                    >
                      Contact Us
                    </Text>
                    <ul className="flex flex-col gap-[27px] items-start justify-start w-auto md:w-full common-column-list">
                      <li>
                        <Text
                          className="text-base text-gray-900 tracking-[0.51px]"
                          size="txtRobotoMedium16"
                        >
                          +92- 343-6683-499
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-base text-gray-900 tracking-[0.51px]"
                          size="txtRobotoMedium16"
                        >
                          expertssys@gmail.com
                        </Text>
                      </li>
                      <li>
                        <Text
                          className="text-base text-gray-900 tracking-[0.51px]"
                          size="txtRobotoMedium16"
                        >
                          92, Expertsysytems, Lahore
                        </Text>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-end w-[63%] md:w-full">
                  <Img
                    className="h-[59px]"
                    src="images/img_googleplay.svg"
                    alt="googleplay"
                  />
                  <Img
                    className="h-[59px]"
                    src="images/img_appstore.svg"
                    alt="appstore"
                  />
                </div>
              </div>
            </div>
            <Line className="bg-blue_gray-300 h-px mt-[50px] w-full" />
            <div className="flex flex-col items-center justify-start mt-[19px] w-[29%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="flex flex-row items-center justify-evenly">
                  <Text
                    className="text-[10px] text-blue_gray-500"
                    size="txtRobotoLight10"
                  >
                    Copyright
                  </Text>
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                  <Text
                    className="text-[10px] text-blue_gray-500"
                    size="txtRobotoLight10"
                  >
                    A1 construction 2023 All rights reserved.
                  </Text>
                </div>
                <Img
                  className="h-6"
                  src="images/img_group1261152811.svg"
                  alt="group1261152811"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
