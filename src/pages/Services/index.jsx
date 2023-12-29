import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const scheduleOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const cityOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ServicesPage = () => {
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
              Services
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start max-w-[884px] mt-[70px] mx-auto md:px-5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
              size="txtRobotoRomanSemiBold24Black900"
            >
              Search :
            </Text>
            <div className="border border-blue_gray-300_01 border-solid flex md:flex-1 flex-row items-center justify-between pl-10 sm:pl-5 rounded w-[85%] md:w-full">
              <SelectBox
                className="font-medium text-base text-center text-gray-400 w-[16%] sm:w-full"
                placeholderClassName="text-gray-400"
                indicator={
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="frame1984077302"
                options={scheduleOptionsList}
                isSearchable={false}
                placeholder="Schedule"
              />
              <Line className="bg-blue_gray-300_01 h-[62px] w-px" />
              <SelectBox
                className="font-medium text-base text-center text-gray-400 w-[11%] sm:w-full"
                placeholderClassName="text-gray-400"
                indicator={
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="frame1984077300"
                options={cityOptionsList}
                isSearchable={false}
                placeholder="City"
              />
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[155px] rounded-br rounded-tr"
                leftIcon={
                  <Img
                    className="h-7 mr-3.5"
                    src="images/img_search.svg"
                    alt="search"
                  />
                }
                size="md"
              >
                <div className="font-medium text-base text-center">Search</div>
              </Button>
            </div>
          </div>
          <div className="md:gap-5 gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1300px] min-h-[auto] mt-10 mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border border-blue_gray-100_7f border-solid flex flex-1 flex-col items-center justify-center p-[13px] rounded w-full">
              <div className="flex flex-col gap-[11px] items-center justify-start mt-3 w-[39%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-[23px] sm:px-5 w-20"
                  style={{ backgroundImage: "url('images/img_group3.svg')" }}
                >
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                </div>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoBold16"
                >
                  Electrical
                </Text>
              </div>
              <Text
                className="leading-[150.00%] mt-2 text-blue_gray-300_01 text-center text-xs w-full"
                size="txtRobotoRomanRegular12"
              >
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </span>
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet consetetur
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[15px] text-base text-center"
                shape="round"
              >
                126
              </Button>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_7f border-solid flex flex-1 flex-col items-center justify-center p-[13px] rounded w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start mt-3 w-[39%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-[23px] sm:px-5 w-20"
                  style={{ backgroundImage: "url('images/img_group3.svg')" }}
                >
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_materialsymbol.svg"
                    alt="materialsymbol"
                  />
                </div>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoBold16"
                >
                  Designer
                </Text>
              </div>
              <Text
                className="leading-[150.00%] mt-1.5 text-blue_gray-300_01 text-center text-xs w-full"
                size="txtRobotoRomanRegular12"
              >
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </span>
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet consetetur
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[15px] text-base text-center"
                shape="round"
              >
                126
              </Button>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_7f border-solid flex flex-1 flex-col items-center justify-center p-[13px] rounded w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start mt-3 p-[23px] sm:px-5 w-20"
                style={{ backgroundImage: "url('images/img_group3.svg')" }}
              >
                <Img
                  className="h-[34px] w-[34px]"
                  src="images/img_materialsymbol.svg"
                  alt="materialsymbol"
                />
              </div>
              <Text
                className="mt-[11px] text-base text-black-900"
                size="txtRobotoBold16"
              >
                Constructor Mechanic
              </Text>
              <Text
                className="leading-[150.00%] mt-2 text-blue_gray-300_01 text-center text-xs w-full"
                size="txtRobotoRomanRegular12"
              >
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </span>
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet consetetur
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[15px] text-base text-center"
                shape="round"
              >
                126
              </Button>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_7f border-solid flex flex-1 flex-col items-center justify-center p-[13px] rounded w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start mt-3 w-[39%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-[23px] sm:px-5 w-20"
                  style={{ backgroundImage: "url('images/img_group3.svg')" }}
                >
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_materialsymbol.svg"
                    alt="materialsymbol"
                  />
                </div>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoBold16"
                >
                  Engineer
                </Text>
              </div>
              <Text
                className="leading-[150.00%] mt-1.5 text-blue_gray-300_01 text-center text-xs w-full"
                size="txtRobotoRomanRegular12"
              >
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </span>
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet consetetur
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[15px] text-base text-center"
                shape="round"
              >
                126
              </Button>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_7f border-solid flex flex-1 flex-col items-center justify-center p-[13px] rounded w-full">
              <div className="flex flex-col gap-[11px] items-center justify-start mt-3 w-[39%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-[23px] sm:px-5 w-20"
                  style={{ backgroundImage: "url('images/img_group3.svg')" }}
                >
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_mapplumber.svg"
                    alt="mapplumber"
                  />
                </div>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoBold16"
                >
                  Plumber
                </Text>
              </div>
              <Text
                className="leading-[150.00%] mt-2 text-blue_gray-300_01 text-center text-xs w-full"
                size="txtRobotoRomanRegular12"
              >
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </span>
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet consetetur
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[15px] text-base text-center"
                shape="round"
              >
                126
              </Button>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_7f border-solid flex flex-1 flex-col items-center justify-center p-[13px] rounded w-full">
              <div className="flex flex-col gap-[11px] items-center justify-start mt-3 w-[39%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-[23px] sm:px-5 w-20"
                  style={{ backgroundImage: "url('images/img_group3.svg')" }}
                >
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                </div>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoBold16"
                >
                  Electrical
                </Text>
              </div>
              <Text
                className="leading-[150.00%] mt-2 text-blue_gray-300_01 text-center text-xs w-full"
                size="txtRobotoRomanRegular12"
              >
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </span>
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet consetetur
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[15px] text-base text-center"
                shape="round"
              >
                126
              </Button>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_7f border-solid flex flex-1 flex-col items-center justify-center p-[13px] rounded w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start mt-3 w-[39%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-[23px] sm:px-5 w-20"
                  style={{ backgroundImage: "url('images/img_group3.svg')" }}
                >
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_materialsymbol.svg"
                    alt="materialsymbol"
                  />
                </div>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoBold16"
                >
                  Designer
                </Text>
              </div>
              <Text
                className="leading-[150.00%] mt-1.5 text-blue_gray-300_01 text-center text-xs w-full"
                size="txtRobotoRomanRegular12"
              >
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </span>
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet consetetur
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[15px] text-base text-center"
                shape="round"
              >
                126
              </Button>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_7f border-solid flex flex-1 flex-col items-center justify-center p-[13px] rounded w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start mt-3 p-[23px] sm:px-5 w-20"
                style={{ backgroundImage: "url('images/img_group3.svg')" }}
              >
                <Img
                  className="h-[34px] w-[34px]"
                  src="images/img_materialsymbol.svg"
                  alt="materialsymbol"
                />
              </div>
              <Text
                className="mt-[11px] text-base text-black-900"
                size="txtRobotoBold16"
              >
                Constructor Mechanic
              </Text>
              <Text
                className="leading-[150.00%] mt-2 text-blue_gray-300_01 text-center text-xs w-full"
                size="txtRobotoRomanRegular12"
              >
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </span>
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet consetetur
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[15px] text-base text-center"
                shape="round"
              >
                126
              </Button>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_7f border-solid flex flex-1 flex-col items-center justify-center p-[13px] rounded w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start mt-3 w-[39%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-[23px] sm:px-5 w-20"
                  style={{ backgroundImage: "url('images/img_group3.svg')" }}
                >
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_materialsymbol.svg"
                    alt="materialsymbol"
                  />
                </div>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoBold16"
                >
                  Engineer
                </Text>
              </div>
              <Text
                className="leading-[150.00%] mt-1.5 text-blue_gray-300_01 text-center text-xs w-full"
                size="txtRobotoRomanRegular12"
              >
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </span>
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet consetetur
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[15px] text-base text-center"
                shape="round"
              >
                126
              </Button>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_7f border-solid flex flex-1 flex-col items-center justify-center p-[13px] rounded w-full">
              <div className="flex flex-col gap-[11px] items-center justify-start mt-3 w-[39%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-20 items-center justify-start p-[23px] sm:px-5 w-20"
                  style={{ backgroundImage: "url('images/img_group3.svg')" }}
                >
                  <Img
                    className="h-[34px] w-[34px]"
                    src="images/img_mapplumber.svg"
                    alt="mapplumber"
                  />
                </div>
                <Text
                  className="text-base text-black-900"
                  size="txtRobotoBold16"
                >
                  Plumber
                </Text>
              </div>
              <Text
                className="leading-[150.00%] mt-2 text-blue_gray-300_01 text-center text-xs w-full"
                size="txtRobotoRomanRegular12"
              >
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet{" "}
                </span>
                <span className="text-blue_gray-300_01 font-roboto font-normal">
                  Lorem ipsum dolor sit amet consetetur
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold mb-3 min-w-[70px] mt-[15px] text-base text-center"
                shape="round"
              >
                126
              </Button>
            </div>
          </div>
          <Footer className="bg-white-A700 flex items-center justify-center mt-[70px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
