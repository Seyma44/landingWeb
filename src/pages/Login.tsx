import { FunctionComponent } from "react";
import LoginForm from "../components/LoginForm";
import SigninBadge from "../components/SigninBadge";

const Login: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-paper overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-[55px] box-border gap-[131px] leading-[normal] tracking-[normal] text-center text-xs text-background-paper font-components-badge-label mq750:gap-[65px] mq450:gap-[33px] mq1125:flex-wrap mq1125:pl-5 mq1125:pr-5 mq1125:pb-5 mq1125:box-border">
      <img
        className="h-[172.2px] w-[158.2px] relative hidden"
        alt=""
        src="/group.svg"
      />
      <img
        className="h-[247.4px] w-[233px] relative hidden"
        alt=""
        src="/group1.svg"
      />
      <img
        className="h-[225.6px] w-[210px] relative hidden"
        alt=""
        src="/group2.svg"
      />
      <img
        className="h-[235.2px] w-[242.8px] relative hidden"
        alt=""
        src="/group3.svg"
      />
      <img
        className="h-[244.3px] w-[238.7px] relative hidden"
        alt=""
        src="/group4.svg"
      />
      <LoginForm />
      <SigninBadge />
      <div className="h-5 rounded-[64px] bg-palevioletred hidden flex-row items-center justify-center py-0 px-1.5 box-border">
        <div className="self-stretch relative tracking-[0.14px] leading-[20px] font-medium flex items-center justify-center">
          Beta
        </div>
      </div>
    </div>
  );
};

export default Login;
