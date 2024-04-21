import { FunctionComponent } from "react";

const SigninBadge: FunctionComponent = () => {
  return (
    <div className="flex-1 bg-darkslategray-100 flex flex-col items-center justify-start pt-[277px] pb-[289.7px] pr-6 pl-5 box-border gap-[15.7px] min-w-[541px] max-w-full text-left text-xs text-mistyrose font-components-badge-label mq750:min-w-full mq450:pt-[117px] mq450:pb-[122px] mq450:box-border mq1050:pt-[180px] mq1050:pb-[188px] mq1050:box-border">
      <div className="w-[832px] h-[1024px] relative bg-darkslategray-100 hidden max-w-full" />
      <div className="w-[464px] flex flex-col items-start justify-start gap-[9.8px] max-w-full">
        <img className="w-0 h-0 relative z-[1]" loading="lazy" alt="" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border max-w-full">
          <div className="h-[418.4px] flex-1 relative max-w-full">
            <div className="absolute top-[0px] left-[0px] w-full h-full">
              <img
                className="absolute top-[0px] left-[34.5px] w-[349.2px] h-[231.3px] z-[2]"
                loading="lazy"
                alt=""
                src="/group-2.svg"
              />
              <div className="absolute top-[16.7px] left-[0px] w-[451.8px] h-[401.7px]">
                <img
                  className="absolute top-[0px] left-[0px] w-full h-full"
                  alt=""
                  src="/main-layout.svg"
                />
                <img
                  className="absolute top-[282.7px] left-[241.7px] w-[155px] h-[35.7px] z-[2]"
                  loading="lazy"
                  alt=""
                  src="/group-3.svg"
                />
              </div>
            </div>
            <div className="absolute top-[349.2px] left-[438px] tracking-[0.15px] leading-[160%] font-medium [transform:_rotate(-90deg)] [transform-origin:0_0] z-[2]">
              www.socialrepeat.com
            </div>
          </div>
        </div>
      </div>
      <div className="w-[464px] flex flex-row items-start justify-end py-0 pr-[22.2px] pl-[26px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
          <div className="w-[240.7px] flex flex-col items-start justify-start pt-[1.3px] px-0 pb-0 box-border">
            <img
              className="self-stretch h-[12.1px] relative max-w-full overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/group-4.svg"
            />
          </div>
          <img
            className="h-[8.9px] w-[8.1px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/group-5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SigninBadge;
