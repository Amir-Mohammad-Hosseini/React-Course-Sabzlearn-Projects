import { toast } from "sonner";
import { sendOtp, sendVerifyOtp } from "../../../Api/Auth/auth";

export const sendOtpMutation = () => {
  return {
    mutationFn: sendOtp,
    onSuccess: () => {
      toast.success("کد تایید ارسال شد");
    },
    onError: (error) => {
      toast.error("خطا در ارسال کد تایید");
    },
  };
};
export const verifyOtpMutation = () => {
  return {
    mutationFn: sendVerifyOtp,
    onSuccess: () => {
      toast.success("ورود موفقیت آمیز بود");
    },
    onError: (error) => {
      toast.error("خطا در ورود به سایت");
    },
  };
};
