import { FunctionComponent } from "react";
import CopyButton from "./CopyButton";

const Metrics: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-primary-indigo-dark overflow-hidden flex flex-row items-start justify-center py-[75px] pr-5 pl-[21px] box-border max-w-full text-left text-13xl text-ghostwhite font-body-l-medium mq450:pt-[49px] mq450:pb-[49px] mq450:box-border">
      <div className="w-[953px] flex flex-col items-start justify-start gap-[70px] max-w-full mq800:gap-[17px] mq1125:gap-[35px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[42px] font-semibold font-inherit mq450:text-lgi mq450:leading-[25px] mq800:text-7xl mq800:leading-[33px]">
            Work with Nusa Tech
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq800:flex-wrap mq800:justify-center">
          <CopyButton
            f7person3="/f7person3.svg"
            logicLink="10,000+"
            happyCustomers="Happy Customers"
          />
          <CopyButton
            f7person3="/uitprocess.svg"
            logicLink="20,000+"
            happyCustomers="Success Processes"
            propWidth="190px"
            propMinWidth="129px"
          />
          <div className="w-[152px] flex flex-col items-start justify-start gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[26px]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[100px] flex-1 flex flex-row items-start justify-start relative gap-[10px]">
                <div className="h-full w-full absolute !m-[0] top-[0px] left-[0px] rounded-[50%] bg-primary-lilac" />
                <img
                  className="h-[70px] w-[70px] absolute !m-[0] top-[calc(50%_-_35px)] left-[calc(50%_-_35px)] overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/solarstarlinear.svg"
                />
              </button>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.01em] leading-[42px] font-semibold mq450:text-lgi mq450:leading-[25px] mq800:text-7xl mq800:leading-[33px]">
                10+ Years
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[9px] text-xl">
                <div className="relative leading-[150%] font-medium mq450:text-base mq450:leading-[24px]">
                  of Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
