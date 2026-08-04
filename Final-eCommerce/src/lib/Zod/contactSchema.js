import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "نام کاربری حداقل باید 3 کارکتر باشد" })
    .max(20, { message: "نام کاربری حداکثر باید 20 کارکتر باشد" }),
phone : z.string().trim().regex(/^[0-9]{10,11}$/ , {
    message :  "شماره تلفن صحیح نمی باشد"
}) ,
subject : z.string().trim().min(3 , {message : "موضوع پیام نباید کمتر از 3 کارکتر باشد"}).max(50 , {message : "موضوع پیام نباید بیشتر از 50 کارکتر باشد"}),
content : z.string().trim().min(10 , {message : "محتوای پیام نباید کمتر از 10 کارکتر باشد"}).max(1000 , {message : "محتوای پیام نباید بیشتر از 1000 کارکتر باشد"})
});
