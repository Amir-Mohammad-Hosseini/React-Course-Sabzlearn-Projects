export const globalValidate = (schema, data) => {
  const result = schema.safeParse(data);

  const success = result.success;
  const firstErrorMessage = !success
    ? result?.error?.issues[0]?.message || "مشکلی در ورودی ها وجود دارد"
    : "";
  return { isSuccess: success, message: firstErrorMessage };
};
