import * as z from "zod";

export const sendOtpSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(/^09\d{9}$/, { message: "شماره موبایل معتبر نمی باشد" }),
});

export const verifyOtpSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(/^09\d{9}$/, { message: "شماره موبایل معتبر نمی باشد" }),
  otp: z.string().trim().length(4, { message: "کد تایید باید 4 رقمی باشد" }),
});
