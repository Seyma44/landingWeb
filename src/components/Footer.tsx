import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";

const Footer: FunctionComponent = () => {
  return (
    <footer className="self-stretch bg-primary-lilac overflow-hidden flex flex-col items-start justify-start pt-[60px] pb-[37px] pr-[61px] pl-[70px] box-border gap-[85px] max-w-full text-left text-11xl text-background-paper font-montserrat mq450:gap-[21px] mq800:gap-[42px] mq800:pt-[39px] mq800:pb-6 mq800:pr-[30px] mq800:pl-[35px] mq800:box-border">
      <FrameComponent1 />
      <FrameComponent />
    </footer>
  );
};

export default Footer;
