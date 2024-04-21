import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CopyButtonType = {
  f7person3?: string;
  logicLink?: string;
  happyCustomers?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const CopyButton: FunctionComponent<CopyButtonType> = ({
  f7person3,
  logicLink,
  happyCustomers,
  propWidth,
  propMinWidth,
}) => {
  const copyButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const logicLinkStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="w-[183px] flex flex-col items-start justify-start gap-[20px] text-left text-13xl text-ghostwhite font-body-l-medium"
      style={copyButtonStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[41px] pl-[41.5px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[100px] flex-1 flex flex-row items-start justify-start relative gap-[10px]">
          <div className="h-full w-full absolute !m-[0] top-[0px] left-[0px] rounded-[50%] bg-primary-lilac" />
          <img
            className="h-[70px] w-[70px] absolute !m-[0] top-[calc(50%_-_35px)] left-[calc(50%_-_35px)] overflow-hidden shrink-0 z-[1]"
            alt=""
            src={f7person3}
          />
        </button>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="flex flex-row items-start justify-start py-0 px-[30px]">
          <div
            className="relative tracking-[-0.01em] leading-[42px] font-semibold inline-block min-w-[123px] mq450:text-lgi mq450:leading-[25px] mq800:text-7xl mq800:leading-[33px]"
            style={logicLinkStyle}
          >
            {logicLink}
          </div>
        </div>
        <div className="relative text-xl leading-[150%] font-medium mq450:text-base mq450:leading-[24px]">
          {happyCustomers}
        </div>
      </div>
    </div>
  );
};

export default CopyButton;
