import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const FrameComponent4: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[179px] max-w-full text-left text-sm text-text-primary font-components-badge-label mq450:gap-[89px]">
      <div className="w-[264px] overflow-hidden flex flex-row items-end justify-start py-0 pr-5 pl-0 box-border gap-[11.8px]">
        <img
          className="h-10 w-[40.2px] relative shrink-0 [debug_commit:1de1738]"
          loading="lazy"
          alt=""
          src="/group.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[1.5px]">
          <img
            className="self-stretch h-[29.6px] relative max-w-full overflow-hidden shrink-0 [debug_commit:1de1738]"
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[200px] box-border max-w-full mq750:pb-[130px] mq750:box-border">
        <form className="m-0 w-[345px] flex flex-col items-end justify-start gap-[44px] max-w-full mq450:gap-[22px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0">
                <h3 className="m-0 relative text-xl tracking-[0.15px] leading-[160%] font-medium font-components-badge-label text-text-primary text-left inline-block min-w-[62px] mq450:text-base mq450:leading-[26px]">
                  Sign in
                </h3>
              </div>
              <TextField
                className="[border:none] bg-[transparent] self-stretch h-14 font-components-badge-label text-base text-text-secondary"
                placeholder="Email Address *"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "rgba(0, 0, 0, 0.23)" },
                  "& .MuiInputBase-root": { height: "56px" },
                  "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.6)" },
                }}
              />
            </div>
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-14 font-components-badge-label text-base text-text-secondary"
              placeholder="Password *"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "rgba(0, 0, 0, 0.23)" },
                "& .MuiInputBase-root": { height: "56px" },
                "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.6)" },
              }}
            />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="shadow-[0px_3px_1px_-2px_rgba(0,_0,_0,_0.2),_0px_2px_2px_rgba(0,_0,_0,_0.14),_0px_1px_5px_rgba(0,_0,_0,_0.12)] rounded bg-primary-lilac overflow-hidden flex flex-col items-center justify-center">
                <div className="overflow-hidden flex flex-col items-start justify-start py-2 px-[22px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[7px]">
                    <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-badge-label text-gray text-left inline-block min-w-[46px]">
                      Login
                    </div>
                    <img
                      className="h-[22px] w-[18px] relative"
                      alt=""
                      src="/masked-icon.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <div className="relative text-sm tracking-[0.1px] leading-[22px] font-medium font-components-badge-label text-text-primary text-left">
                  Forgot your password?
                </div>
              </div>
            </div>
          </div>
          <Button
            className="self-stretch h-[42px] shadow-[0px_3px_1px_-2px_rgba(0,_0,_0,_0.2),_0px_2px_2px_rgba(0,_0,_0,_0.14),_0px_1px_5px_rgba(0,_0,_0,_0.12)]"
            variant="contained"
            sx={{
              color: "#000",
              fontSize: "15",
              background: "#e2fe30",
              borderRadius: "4px",
              "&:hover": { background: "#e2fe30" },
              height: 42,
            }}
          >
            create new account
          </Button>
        </form>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[39px]">
        <div className="flex flex-row items-start justify-start gap-[18px]">
          <div className="relative tracking-[0.15px] leading-[143%]">
            Terms and conditions
          </div>
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <div className="w-[5px] h-[5px] relative rounded-[50%] bg-black" />
          </div>
          <div className="relative tracking-[0.15px] leading-[143%] inline-block min-w-[88px]">
            Privacy policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
