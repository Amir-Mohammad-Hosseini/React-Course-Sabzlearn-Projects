import { toast } from "sonner";
import { sendContactForm } from "../../../Api/ContactUs/sendContactForm";

export const contactMutation = () => {
  return {
    mutationFn: sendContactForm,
    onMutate: () => {
      toast.loading("درحال ارسال پیام...");
    },
    onSuccess: () => {
      toast.dismiss();
      toast.success("پیام با موفقیت ارسال شد");
    },
    onError: (error) => {
      toast.dismiss();
      toast.error("خطا در ارسال پیام به سرور");
    },
  };
};
