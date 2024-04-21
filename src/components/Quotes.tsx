import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const Quotes: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-primary-indigo-light overflow-hidden flex flex-row items-start justify-start pt-[119px] px-[71px] pb-6 box-border gap-[261px] max-w-full text-left text-21xl text-background-paper font-body-l-medium mq450:gap-[33px] mq800:gap-[65px] mq1300:flex-wrap mq1300:gap-[130px] mq1300:pl-[35px] mq1300:pr-[35px] mq1300:box-border">
      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[45px] max-w-full mq450:gap-[22px]">
          <div className="flex flex-row items-start justify-start p-2.5">
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[130%] font-semibold font-inherit mq450:text-5xl mq450:leading-[31px] mq800:text-13xl mq800:leading-[42px]">
              “Stand out online and make an impact”
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start p-2.5 box-border max-w-full text-xl">
            <div className="relative leading-[150%] font-medium mq450:text-base mq450:leading-[24px]">
              David Smith - CEO of a Tech Startup
            </div>
          </div>
        </div>
      </div>
      <Button
        className="h-[74px] w-[179px]"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#f8f9ff",
          fontSize: "16",
          background: "#ac6cff",
          borderRadius: "20px",
          "&:hover": { background: "#ac6cff" },
          width: 179,
          height: 74,
        }}
      >
        Start Now
      </Button>
    </section>
  );
};

export default Quotes;
