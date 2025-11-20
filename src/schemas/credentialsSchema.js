import * as yup from "yup";

export default yup.object({
  username: yup
    .string()
    .required("Username required")
    .matches(/^[A-Za-z]{3,10}$/, 
             "3–10 letters only"),
  password: yup
    .string()
    .required("Password required")
    .matches(/^(?=.*[A-Z])(?=.*\d).{6,}$/, 
             "Min 6 chars, 1 uppercase, 1 number")
});