import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import ExpressionEvolver from "./ExpressionEvolver";

const Pricing: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-yellow overflow-hidden flex flex-col items-center justify-start pt-[50px] pb-[150px] pr-[21px] pl-5 box-border gap-[50px] max-w-full text-left text-13xl text-black font-body-l-medium mq800:gap-[25px] mq800:pt-8 mq800:pb-[97px] mq800:box-border">
      <div className="w-[969px] flex flex-row items-start justify-center py-0 pr-0 pl-0.5 box-border max-w-full">
        <div className="flex flex-col items-start justify-start gap-[20px]">
          <div className="flex flex-row items-start justify-start py-0 px-14 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[42px] font-semibold font-inherit mq450:text-lgi mq450:leading-[25px] mq800:text-7xl mq800:leading-[33px]">
              Pricing Plans
            </h1>
          </div>
          <div className="relative text-xl leading-[150%] text-primary-indigo-light mq450:text-base mq450:leading-[24px]">
            The Best Solution for Our Clients
          </div>
        </div>
      </div>
      <div className="w-[969px] flex flex-row flex-wrap items-start justify-center gap-[21px] max-w-full text-5xl text-ghostwhite">
        <ExpressionEvolver
          starterPlan="Starter Plan"
          calculationCasement="$500"
          responsiveWebsiteDesignAn="Responsive website design and development (5 pages)"
          basicSEO="Basic SEO"
          socialMediaManagement="Social media management  "
        />
        <div className="flex-1 rounded-11xl bg-primary-indigo-light overflow-hidden flex flex-row items-start justify-start py-[45px] px-[18px] box-border min-w-[232px] mq450:pt-[29px] mq450:pb-[29px] mq450:box-border">
          <div className="flex-1 flex flex-col items-center justify-start gap-[9px]">
            <div className="flex flex-col items-center justify-start gap-[10px]">
              <h3 className="m-0 relative text-inherit leading-[34px] font-semibold font-inherit whitespace-pre-wrap mq450:text-lgi mq450:leading-[27px]">
                Business Plan
              </h3>
              <div className="relative text-21xl tracking-[-0.02em] leading-[130%] font-semibold text-primary-lilac inline-block min-w-[116px] whitespace-nowrap mq450:text-5xl mq450:leading-[31px] mq800:text-13xl mq800:leading-[42px]">
                $1000
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px] text-base">
              <div className="self-stretch relative leading-[150%]">
                <ul className="m-0 font-inherit text-inherit pl-[21px]">
                  <li className="mb-0">
                    Responsive website design and development (10 pages)
                  </li>
                  <li className="mb-0">Advanced SEO</li>
                  <li className="mb-0">Social media management</li>
                  <li>{`PPC advertising campaign  `}</li>
                </ul>
              </div>
              <Button
                className="w-[120px] h-12"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#f8f9ff",
                  fontSize: "16",
                  background: "#ac6cff",
                  borderRadius: "20px",
                  "&:hover": { background: "#ac6cff" },
                  width: 120,
                  height: 48,
                }}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
        <ExpressionEvolver
          starterPlan="Premium Plan"
          calculationCasement="$2000"
          responsiveWebsiteDesignAn="Advanced Business plan"
          basicSEO="Regular content creation"
          socialMediaManagement="Performance analysis and monthly reporting"
          propPadding="45px 18px"
          propGap="9px"
          propAlignSelf="unset"
          propPadding1="unset"
          propMinWidth="124px"
        />
      </div>
    </section>
  );
};

export default Pricing;
