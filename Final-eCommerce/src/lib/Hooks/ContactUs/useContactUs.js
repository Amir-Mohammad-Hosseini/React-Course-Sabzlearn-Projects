import { useMutation } from "@tanstack/react-query";
import { contactMutation } from "../../TanstackQuery/Mutation/contactMutation";
import { toast } from "sonner";
import { contactSchema } from "../../Zod/contactSchema";
import { globalValidate } from "../../Zod/globalValidator";

export const useContactUs = () => {
  const { mutate, isPending } = useMutation(contactMutation());

  const handleSubmitContactForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const contactDatas = Object.fromEntries(formData);

    const { isSuccess, message } = globalValidate(contactSchema, contactDatas);

    if (isSuccess) {
      mutate(contactDatas);
    } else {
      toast.error(message);
    }
  };


  return { isPending, handleSubmitContactForm };
};
