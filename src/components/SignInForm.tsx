import { FunctionComponent } from "react";
import FormSignUp from "./FormSignUp";

const SignInForm: FunctionComponent = () => {
  return (
    <div className="w-[626px] flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border min-w-[626px] max-w-full text-left text-xs text-text-secondary font-components-badge-label mq750:min-w-full mq1250:flex-1">
      <FormSignUp />
    </div>
  );
};

export default SignInForm;
