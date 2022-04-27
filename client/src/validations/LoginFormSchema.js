import * as Yup from "yup";

const LoginFormSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .required("Username is required")
    .min(4, "You need at least 4 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "You need to at least 6 characters"),
});

export default LoginFormSchema;
