import { FunctionComponent } from "react";
import FrameComponent4 from "./FrameComponent4";

const LoginForm: FunctionComponent = () => {
  return (
    <div className="w-[422px] flex flex-col items-start justify-start pt-[54px] px-0 pb-0 box-border min-w-[422px] max-w-full text-left text-sm text-text-primary font-components-badge-label mq750:pt-[23px] mq750:box-border mq750:min-w-full mq1050:pt-[35px] mq1050:box-border mq1125:flex-1">
      <FrameComponent4 />
    </div>
  );
};

export default LoginForm;
