import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Footer from "components/Footer";

const searchOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddpagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto items-center justify-start mx-auto pb-[26px] w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <Img
              className="md:flex-1 h-[50px] sm:h-auto md:ml-[0] ml-[70px] md:mt-0 my-5 object-cover w-[7%] md:w-full"
              src="images/img_sokhtamon1.png"
              alt="sokhtamonone"
            />
            <div className="h-[50px] md:h-[70px] ml-11 md:ml-[0] md:mt-0 my-5 relative w-[70%] md:w-full">
              <div className="bg-white-A700 border border-gray-100_01 border-solid flex flex-col h-full items-end justify-start m-auto md:pl-10 sm:pl-5 pl-[956px] rounded w-full">
                <Img
                  className="h-[50px] rounded-br rounded-tr w-[50px]"
                  src="images/img_frame198.svg"
                  alt="frame198"
                />
              </div>
              <Text
                className="absolute h-max inset-y-[0] left-[1%] my-auto text-blue_gray-300 text-sm tracking-[0.20px]"
                size="txtRobotoRegular14Bluegray300"
              >
                Search
              </Text>
            </div>
            <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] md:mt-0 mx-[70px] my-7 w-auto">
              <Img
                className="h-[34px] w-[34px]"
                src="images/img_carbonlocation.svg"
                alt="carbonlocation"
              />
              <Text
                className="text-black-900 text-sm tracking-[0.20px] w-auto"
                size="txtRobotoRomanMedium14Black900"
              >
                Cities
              </Text>
            </div>
          </header>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end md:ml-[0] ml-[161px] mt-[75px] md:px-5 w-[84%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[18%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Input
                  name="group1261152878"
                  placeholder="Category"
                  className="!placeholder:text-black-900 !text-black-900 p-0 text-left text-sm w-full"
                  wrapClassName="flex w-full"
                  suffix={
                    <Img
                      className="h-6 ml-[35px] my-auto"
                      src="images/img_carboncatalogpublish.svg"
                      alt="carbon:catalog-publish"
                    />
                  }
                  size="xs"
                ></Input>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[141px] text-black-900 text-lg"
              size="txtRobotoRomanSemiBold18"
            >
              Price
            </Text>
            <Button
              className="cursor-pointer min-w-[119px] ml-5 md:ml-[0] rounded text-center text-sm"
              shape="round"
              color="gray_100"
              size="sm"
            >
              $10
            </Button>
            <Line className="bg-blue_gray-300_01 h-px md:ml-[0] ml-[15px] md:mt-0 my-[21px] w-[3%]" />
            <Button
              className="cursor-pointer min-w-[119px] md:ml-[0] ml-[15px] rounded text-center text-sm"
              shape="round"
              color="gray_100"
              size="sm"
            >
              $30
            </Button>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[245px] w-[21%] md:w-full">
              <SelectBox
                className="!text-black-900 text-left text-sm w-full"
                placeholderClassName="!text-black-900"
                indicator={
                  <Img
                    className="h-6 mr-[0] w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="group1261152880"
                options={searchOptionsList}
                isSearchable={false}
                placeholder="Search"
                shape="round"
                color="gray_100"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-start max-w-[1300px] mt-[41px] mx-auto md:px-5 w-full">
            <div className="bg-gray-200 flex md:flex-1 flex-col gap-[22px] items-start justify-end mb-[152px] md:mt-0 mt-1 p-[18px] rounded-[5px] w-[31%] md:w-full">
              <Text
                className="md:ml-[0] ml-[7px] mt-[11px] text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px]"
                size="txtRobotoRomanSemiBold24"
              >
                Electrical and Lightning
              </Text>
              <div className="flex flex-col gap-[17px] items-start justify-start md:ml-[0] ml-[7px] w-auto">
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Cable, wire
                </Text>
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Cable Channels
                </Text>
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Junction and Installation boxes
                </Text>
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Power automatic machines
                </Text>
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Switches
                </Text>
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Cable Channels
                </Text>
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Construction Materials
                </Text>
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Door, Window and other products
                </Text>
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Tools and equipments
                </Text>
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Plumbing
                </Text>
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Fosteners and rigging{" "}
                </Text>
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Decoration Materials
                </Text>
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Appliances
                </Text>
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Delivery{" "}
                </Text>
                <Text
                  className="text-base text-gray-700_01 tracking-[-0.32px] w-auto"
                  size="txtRobotoRomanRegular16"
                >
                  Other
                </Text>
              </div>
            </div>
            <List
              className="flex flex-col gap-[37.5px] pb-[41px] w-[66%]"
              orientation="vertical"
            >
              <div className="flex md:flex-col flex-row gap-[25px] items-start justify-between w-full">
                <Img
                  className="h-[216px] md:h-auto md:mt-0 mt-1 object-cover"
                  src="images/img_rectangle1909123837.png"
                  alt="rectangle190912"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtRobotoRomanSemiBold24Black900"
                  >
                    Chanbeller
                  </Text>
                  <Text
                    className="leading-[27.00px] mt-[7px] text-black-900 text-lg w-full"
                    size="txtRobotoRomanRegular18"
                  >
                    Chanbeller new nay size size 40 - 450c 50 - 600c 60 hamay
                    namudosh hamay razmerosh hastay chorkuncha circla ma hamay
                    namudosh hamay razmerosh hastay chorkuncha circla ma...
                  </Text>
                  <div className="flex flex-col gap-[5px] items-start justify-start mt-3.5 w-auto md:w-full">
                    <Text
                      className="text-black-900 text-lg w-auto"
                      size="txtRobotoRomanSemiBold18"
                    >
                      Dushbane
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-auto"
                      size="txtRobotoRomanRegular18"
                    >
                      01/11/2023 22:30
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-100 w-full" />
              <div className="flex md:flex-col flex-row gap-[25px] items-start justify-between w-full">
                <Img
                  className="h-[216px] md:h-auto md:mt-0 mt-1 object-cover"
                  src="images/img_rectangle1909123838.png"
                  alt="rectangle190912"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtRobotoRomanSemiBold24Black900"
                  >
                    Chanbeller
                  </Text>
                  <Text
                    className="leading-[27.00px] mt-[7px] text-black-900 text-lg w-full"
                    size="txtRobotoRomanRegular18"
                  >
                    Chanbeller new nay size size 40 - 450c 50 - 600c 60 hamay
                    namudosh hamay razmerosh hastay chorkuncha circla ma hamay
                    namudosh hamay razmerosh hastay chorkuncha circla ma...
                  </Text>
                  <div className="flex flex-col gap-[5px] items-start justify-start mt-3.5 w-auto md:w-full">
                    <Text
                      className="text-black-900 text-lg w-auto"
                      size="txtRobotoRomanSemiBold18"
                    >
                      Dushbane
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-auto"
                      size="txtRobotoRomanRegular18"
                    >
                      01/11/2023 22:30
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="self-center h-px bg-blue_gray-100 w-full" />
              <div className="flex md:flex-col flex-row gap-[25px] items-start justify-between w-full">
                <Img
                  className="h-[216px] md:h-auto md:mt-0 mt-1 object-cover"
                  src="images/img_rectangle1909123839.png"
                  alt="rectangle190912"
                />
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                    size="txtRobotoRomanSemiBold24Black900"
                  >
                    Chanbeller
                  </Text>
                  <Text
                    className="leading-[27.00px] mt-[7px] text-black-900 text-lg w-full"
                    size="txtRobotoRomanRegular18"
                  >
                    Chanbeller new nay size size 40 - 450c 50 - 600c 60 hamay
                    namudosh hamay razmerosh hastay chorkuncha circla ma hamay
                    namudosh hamay razmerosh hastay chorkuncha circla ma...
                  </Text>
                  <div className="flex flex-col gap-[5px] items-start justify-start mt-3.5 w-auto md:w-full">
                    <Text
                      className="text-black-900 text-lg w-auto"
                      size="txtRobotoRomanSemiBold18"
                    >
                      Dushbane
                    </Text>
                    <Text
                      className="text-black-900 text-lg w-auto"
                      size="txtRobotoRomanRegular18"
                    >
                      01/11/2023 22:30
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <Footer className="bg-white-A700 flex items-center justify-center mt-[69px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AddpagePage;
