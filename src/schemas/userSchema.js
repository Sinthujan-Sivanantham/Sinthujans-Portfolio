import * as yup from "yup";

export default yup.object({
    firstName: yup
        .string()
        .required("First Name required")
        .min(2),
    lastName: yup
        .string()
        .required("Last Name required")
        .min(4),
   email: yup
    .string()
    .required("Please enter your Email address")
    .min(5, "Email must be at least 5 characters long")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"),
    phone: yup  
    .string()
    .required("Please enter a valid phone number")
    .matches(/^\+?[0-9]{7,15}$/, "Please enter a valid phone number"),

  message: yup
    .string()
    .required("Please Enter your message")
    .min(20, "The message must be at least 20 characters long"),

    country: yup
        .string()
        .required("Country Name required")
        .matches(/^[A-Za-z]{4,}$/, "4–letters minimum"),
        
    city: yup
        .string()
        .required("City Name required")
        .matches(/^[A-Za-z]{4,}$/, "4–letters minimum"),
    adress: yup
        .string()
        .required("Adress Name House Number required")
        .min(5)
        .matches(/^[A-Za-z0-9\s,.-]{10,}$/, "5–letters minimum"),     


});