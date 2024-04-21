import { FunctionComponent } from "react";

const Testimonial: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-neutral-black overflow-hidden flex flex-col items-center justify-start pt-[100px] px-5 pb-[108px] box-border gap-[50px] max-w-full text-left text-13xl text-ghostwhite font-body-l-medium mq450:gap-[25px] mq800:pt-[65px] mq800:pb-[70px] mq800:box-border">
      <div className="w-[858px] flex flex-row items-start justify-center py-0 pr-0 pl-[7px] box-border max-w-full">
        <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[42px] font-bold font-inherit mq450:text-lgi mq450:leading-[25px] mq800:text-7xl mq800:leading-[33px]">
          Here’s what They say about Nusa Tech?
        </h1>
      </div>
      <div className="w-[857px] rounded-11xl bg-primary-lilac overflow-hidden flex flex-col items-start justify-start py-[34px] px-[81px] box-border max-w-full text-center text-base text-background-paper mq450:pt-[22px] mq450:pb-[22px] mq450:box-border mq1125:pl-10 mq1125:pr-10 mq1125:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-[30px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[30px]">
            <div className="flex flex-col items-center justify-start gap-[15px]">
              <img
                className="w-20 h-20 relative rounded-[50%] object-contain"
                loading="lazy"
                alt=""
                src="/ellipse-35@2x.png"
              />
              <div className="flex flex-col items-center justify-start gap-[5px]">
                <b className="relative leading-[150%] inline-block min-w-[124px]">
                  Sarah Johnson
                </b>
                <b className="relative leading-[150%]">
                  Owner of a Boutique Clothing Store
                </b>
              </div>
            </div>
            <b className="self-stretch relative text-xl leading-[150%] mq450:text-base mq450:leading-[24px]">
              “Nusa Tech delivers exceptional service! Highly responsive and
              effective digital marketing strategies have boosted our website
              traffic and conversions”.
            </b>
          </div>
          <div className="flex flex-row items-start justify-start gap-[20px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/pepiconspopangleleft.svg"
            />
            <b className="relative leading-[150%] inline-block min-w-[23px]">
              1/3
            </b>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 object-contain min-h-[24px]"
              alt=""
              src="/pepiconspopangleleft-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
