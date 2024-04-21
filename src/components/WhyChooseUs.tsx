import { FunctionComponent } from "react";
import ChartGenerator from "./ChartGenerator";
import ScrollView from "./ScrollView";

const WhyChooseUs: FunctionComponent = () => {
  return (
    <section className="self-stretch bg-darkslategray-200 overflow-hidden flex flex-row flex-wrap items-end justify-start pt-20 pb-[146px] pr-[59px] pl-[69px] box-border [row-gap:20px] max-w-full text-left text-21xl text-ghostwhite font-body-l-medium mq800:pt-[22px] mq800:pb-10 mq800:pr-[29px] mq800:pl-[34px] mq800:box-border mq1125:pt-[34px] mq1125:pb-[62px] mq1125:box-border mq1300:pt-[52px] mq1300:pb-[95px] mq1300:box-border">
      <ChartGenerator />
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[110px] box-border min-w-[436px] min-h-[1720px] max-w-full ml-[-30px] text-29xl text-background-paper mq450:pb-[30px] mq450:box-border mq800:min-w-full mq1125:pb-[46px] mq1125:box-border mq1125:ml-0 mq1300:pb-[71px] mq1300:box-border">
        <ScrollView />
      </div>
    </section>
  );
};

export default WhyChooseUs;
