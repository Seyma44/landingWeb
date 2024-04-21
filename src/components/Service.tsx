import { FunctionComponent } from "react";

const Service: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-primary-indigo-light overflow-hidden flex flex-col items-start justify-start pt-[100px] px-[71px] pb-[142px] box-border gap-[60px] max-w-full text-left text-13xl text-ghostwhite font-body-l-medium mq450:gap-[15px] mq800:gap-[30px] mq800:pt-[65px] mq800:px-[35px] mq800:pb-[92px] mq800:box-border">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
        <div className="w-[821px] flex flex-col items-start justify-start gap-[20px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[42px] font-semibold font-inherit mq450:text-lgi mq450:leading-[25px] mq800:text-7xl mq800:leading-[33px]">
              Services
            </h1>
          </div>
          <div className="relative text-xl leading-[150%] font-medium mq450:text-base mq450:leading-[24px]">
            Strategic services drive digital success with tailored,
            comprehensive approaches.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-[20px] text-5xl text-background-paper mq1300:flex-wrap">
        <div className="flex-[0.6436] rounded-xl bg-primary-lilac overflow-hidden flex flex-row items-start justify-start py-10 px-[66px] box-border min-w-[285px] max-w-[309px] min-h-[280px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1 mq1300:min-h-[auto]">
          <div className="flex-1 flex flex-col items-center justify-start gap-[46px]">
            <img
              className="w-[100px] h-[100px] relative object-contain"
              loading="lazy"
              alt=""
              src="/laptop-metrics@2x.png"
            />
            <h3 className="m-0 relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
              SEO Marketing
            </h3>
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[50px] px-[17px] pb-[60px] bg-primary-lilac flex-1 rounded-xl overflow-hidden flex flex-col items-start justify-start box-border min-w-[285px] max-w-[310px] min-h-[280px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[56px] mq450:gap-[28px]">
            <img
              className="w-20 h-20 relative object-contain"
              alt=""
              src="/web-marketing@2x.png"
            />
            <div className="relative text-5xl leading-[34px] font-semibold font-body-l-medium text-background-paper text-left mq450:text-lgi mq450:leading-[27px]">
              Research Topic Trends
            </div>
          </div>
        </button>
        <div className="flex-[0.7174] rounded-xl bg-primary-lilac overflow-hidden flex flex-col items-start justify-start pt-10 px-14 pb-[60px] box-border min-w-[285px] max-w-[310px] min-h-[280px] mq450:pl-5 mq450:pr-5 mq450:box-border mq450:flex-1">
          <div className="self-stretch flex flex-col items-center justify-start gap-[56px]">
            <img
              className="w-[90px] h-[90px] relative object-contain"
              loading="lazy"
              alt=""
              src="/email-open@2x.png"
            />
            <h3 className="m-0 relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
              Email Marketing
            </h3>
          </div>
        </div>
        <div className="flex-[0.9782] rounded-xl bg-primary-lilac overflow-hidden flex flex-row items-start justify-center py-10 px-5 box-border min-w-[285px] max-w-[309px] min-h-[280px] mq450:flex-1 mq1300:min-h-[auto]">
          <div className="flex flex-col items-center justify-start gap-[56px]">
            <img
              className="w-[90px] h-[90px] relative object-contain"
              loading="lazy"
              alt=""
              src="/paid-search@2x.png"
            />
            <h3 className="m-0 relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
              Google PPC
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
