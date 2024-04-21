import { FunctionComponent } from "react";
import SignInForm from "../components/SignInForm";
import SignUpBadge from "../components/SignUpBadge";

const Signup: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-background-paper overflow-hidden flex flex-row items-end justify-between py-0 pr-0 pl-[55px] box-border leading-[normal] tracking-[normal] gap-[20px] mq1250:flex-wrap mq1250:p-5 mq1250:box-border">
      <SignInForm />
      <SignUpBadge />
    </div>
  );
};

export default Signup;
