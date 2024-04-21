import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";

export type ExpressionEvolverType = {
  starterPlan?: string;
  calculationCasement?: string;
  responsiveWebsiteDesignAn?: string;
  basicSEO?: string;
  socialMediaManagement?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding1?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ExpressionEvolver: FunctionComponent<ExpressionEvolverType> = ({
  starterPlan,
  calculationCasement,
  responsiveWebsiteDesignAn,
  basicSEO,
  socialMediaManagement,
  propPadding,
  propGap,
  propAlignSelf,
  propPadding1,
  propMinWidth,
}) => {
  const expressionEvolverStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const functionFolderStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const logicLabStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding1,
    };
  }, [propAlignSelf, propPadding1]);

  const calculationCasementStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="flex-1 rounded-11xl bg-primary-indigo-light overflow-hidden flex flex-row items-start justify-start py-10 px-[18px] box-border min-w-[232px] text-left text-5xl text-ghostwhite font-body-l-medium mq450:pt-[26px] mq450:pb-[26px] mq450:box-border"
      style={expressionEvolverStyle}
    >
      <div
        className="flex-1 flex flex-col items-center justify-start gap-[20px]"
        style={functionFolderStyle}
      >
        <div
          className="self-stretch flex flex-col items-center justify-start py-0 px-[65px] gap-[10px] mq450:pl-5 mq450:pr-5 mq450:box-border"
          style={logicLabStyle}
        >
          <h3 className="m-0 relative text-inherit leading-[34px] font-semibold font-inherit mq450:text-lgi mq450:leading-[27px]">
            {starterPlan}
          </h3>
          <div
            className="relative text-21xl tracking-[-0.02em] leading-[130%] font-semibold text-primary-lilac inline-block min-w-[102px] whitespace-nowrap mq450:text-5xl mq450:leading-[31px] mq800:text-13xl mq800:leading-[42px]"
            style={calculationCasementStyle}
          >
            {calculationCasement}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] text-base mq450:gap-[20px]">
          <div className="self-stretch relative leading-[150%]">
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li className="mb-0">{responsiveWebsiteDesignAn}</li>
              <li className="mb-0">{basicSEO}</li>
              <li>{socialMediaManagement}</li>
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
  );
};

export default ExpressionEvolver;
