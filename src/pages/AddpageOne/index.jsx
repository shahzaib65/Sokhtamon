import React from "react";

import {
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
  TextArea,
} from "components";
import Footer from "components/Footer";

const yournameOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const yournametwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const yournamesixOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddpageOnePage = () => {
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
                <List
                  className="sm:flex-col flex-row gap-[38px] grid grid-cols-2 w-[66%] sm:w-full"
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
                    <Text
                      className="text-blue_gray-500 text-sm tracking-[0.20px] w-auto"
                      size="txtRobotoRegular14"
                    >
                      Contact Us
                    </Text>
                  </div>
                </List>
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
              Post an Add
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start max-w-[1300px] mt-[70px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[49%] md:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Category
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <SelectBox
                    className="text-left text-sm w-full"
                    placeholderClassName="text-gray-700"
                    indicator={
                      <Img
                        className="h-6 mr-[0] w-6"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="yourname"
                    options={yournameOptionsList}
                    isSearchable={false}
                    placeholder="Select Category"
                    shape="round"
                    color="gray_100"
                    size="sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start mt-[25px] w-auto md:w-full">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Heading
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="yournameone"
                    placeholder="abc..."
                    className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                    wrapClassName="w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start mt-[25px] w-auto md:w-full">
                <Text
                  className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                  size="txtRobotoRomanMedium14Gray90003"
                >
                  Price
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="price_One"
                    placeholder="10$ etc"
                    className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                    wrapClassName="w-full"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-row gap-[30px] items-center justify-start mt-3 w-[31%] md:w-full">
                <CheckBox
                  className="font-medium text-[13px] text-left tracking-[-0.26px]"
                  inputClassName="border-2 border-blue_gray-400_01 border-solid h-6 mr-[5px] w-6"
                  name="bargain"
                  id="bargain"
                  label="Bargain"
                ></CheckBox>
                <CheckBox
                  className="font-medium text-[13px] text-left tracking-[-0.26px]"
                  inputClassName="border-2 border-blue_gray-400_01 border-solid h-6 mr-[5px] w-6"
                  name="forfree"
                  id="forfree"
                  label="For Free"
                ></CheckBox>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start md:mt-0 mt-[115px] w-[49%] md:w-full">
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px]"
                size="txtRobotoRomanMedium14Gray90003"
              >
                State
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <SelectBox
                  className="text-left text-sm w-full"
                  placeholderClassName="text-gray-700"
                  indicator={
                    <Img
                      className="h-6 mr-[0] w-6"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="yournametwo"
                  options={yournametwoOptionsList}
                  isSearchable={false}
                  placeholder="Select State"
                  shape="round"
                  color="gray_100"
                  size="sm"
                />
              </div>
            </div>
          </div>
          <Line className="bg-blue_gray-300_01 h-px max-w-[1300px] mt-10 mx-auto w-full" />
          <Text
            className="mt-10 text-gray-900 text-sm tracking-[-0.28px]"
            size="txtRobotoRomanMedium14Gray90003"
          >
            Photos:
          </Text>
          <div className="bg-deep_orange-100 flex flex-col h-[100px] items-center justify-start mt-3.5 p-[34px] md:px-5 rounded w-[100px]">
            <Img
              className="h-8 w-8"
              src="images/img_carbonaddfilled.svg"
              alt="carbonaddfilled"
            />
          </div>
          <Line className="bg-blue_gray-300_01 h-px max-w-[1300px] mt-10 mx-auto w-full" />
          <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start max-w-[1300px] mt-[39px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-auto md:w-full">
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
                YouTube Video Link:
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <Input
                  name="yournamethree"
                  placeholder="www.you tube.com"
                  className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-auto md:w-full">
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
                Tiktok Link:
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <Input
                  name="weburl"
                  placeholder="www.tiktok.com"
                  className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
            </div>
          </div>
          <Text
            className="mt-[26px] text-gray-900 text-sm tracking-[-0.28px]"
            size="txtRobotoRomanMedium14Gray90003"
          >
            Video
          </Text>
          <div className="flex sm:flex-col flex-row gap-5 items-center justify-start mt-3.5 md:px-5 w-[39%] md:w-full">
            <div className="bg-deep_orange-100 flex flex-col h-[100px] items-center justify-start p-[34px] sm:px-5 rounded w-[100px]">
              <Img
                className="h-8 w-8"
                src="images/img_carbonaddfilled.svg"
                alt="carbonaddfilled_One"
              />
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
                Upload a video of your product, they will attract more buyers.
              </Text>
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
                Maximum video size 500 megabytes, supported formats. mpg, mp4,
                mov
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start mt-[25px] md:px-5 w-auto md:w-full">
            <Text
              className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
              size="txtRobotoRomanMedium14Gray90003"
            >
              Description:
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <TextArea
                className="bg-gray-100 border-0 pb-[35px] pl-[25px] pr-[35px] pt-5 sm:px-5 rounded placeholder:text-gray-700 text-gray-700 text-left text-sm w-full"
                name="yournamefour"
                placeholder="Lorem ipsum dolor sit amet...."
              ></TextArea>
            </div>
          </div>
          <Text
            className="mt-3.5 text-gray-500_01 text-sm"
            size="txtRobotoRomanRegular14"
          >
            10000 left
          </Text>
          <Line className="bg-blue_gray-300_01 h-px max-w-[1300px] mt-[42px] mx-auto w-full" />
          <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start max-w-[1300px] mt-[39px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-auto md:w-full">
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
                Name:
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <Input
                  name="yournamefive"
                  placeholder="Hamza"
                  className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                  wrapClassName="w-full"
                ></Input>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-auto md:w-full">
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
                City:
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
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
                  name="yournamesix"
                  options={yournamesixOptionsList}
                  isSearchable={false}
                  placeholder="Dushanbe"
                  shape="round"
                  color="gray_100"
                  size="sm"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start max-w-[1300px] mt-[25px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-auto md:w-full">
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
                Email
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <Input
                  name="email_One"
                  placeholder="abc@gmail.com"
                  className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                  wrapClassName="w-full"
                  type="email"
                ></Input>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-auto md:w-full">
              <Text
                className="text-gray-900 text-sm tracking-[-0.28px] w-auto"
                size="txtRobotoRomanMedium14Gray90003"
              >
                Telephone
              </Text>
              <div className="flex flex-col items-center justify-start w-full">
                <Input
                  name="yournameseven"
                  placeholder="03436683499"
                  className="p-0 placeholder:text-gray-700 text-left text-sm w-full"
                  wrapClassName="w-full"
                  type="number"
                ></Input>
              </div>
            </div>
          </div>
          <Text
            className="mt-[27px] text-gray-900 text-sm tracking-[-0.28px]"
            size="txtRobotoRomanMedium14Gray90003"
          >
            Messenger:
          </Text>
          <CheckBox
            className="!text-gray-900_04 mt-[13px] text-left text-sm"
            inputClassName="border-2 border-blue_gray-400_01 border-solid h-6 mr-[5px] w-6"
            name="whatsapp"
            id="whatsapp"
            label="Whatsapp"
          ></CheckBox>
          <Text
            className="mt-[15px] text-gray-900_04 text-sm"
            size="txtRobotoRomanRegular14Gray90004"
          >
            <span className="text-gray-900_04 font-roboto text-left font-normal">
              If you want to change your contact information , go to the “{" "}
            </span>
            <span className="text-indigo-A200 font-roboto text-left font-medium">
              my setting
            </span>
            <span className="text-gray-900_04 font-roboto text-left font-normal">
              ” section.
            </span>
          </Text>
          <Footer className="bg-white-A700 flex items-center justify-center mt-[71px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AddpageOnePage;
