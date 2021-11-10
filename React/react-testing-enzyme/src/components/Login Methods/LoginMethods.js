export const LoginMethods = () => {
  const isEmailValid = text => /@/.test(text);
  const isPasswordValid = password => password.length >= 8;
  const areFormFieldsValid = (email, password) =>
    isEmailValid(email) && isPasswordValid(password);

  return {
    isEmailValid,
    isPasswordValid,
    areFormFieldsValid,
  };
};

export default function Login(props) {
  /* useState declarations unchanged */

  React.useEffect(() => {
    setIsLoginDisabled(!LoginMethods().areFormFieldsValid(email, password));
  }, [email, password]);