import LoginMethods from "./LoginMethods"

describe('LoginMethods()', () => {
    it('isEmailValid should return false if email is invalid', () => {
      expect(LoginMethods().isEmailValid('notvalidemail')).toBeFalsy();
      expect(LoginMethods().isEmailValid('notvalidemail.aswell')).toBeFalsy();
    });
    it('isEmailValid should return false if email is valid', () => {
      expect(LoginMethods().isEmailValid('validemail@gmail.com')).toBeTruthy();
    });
    /* Similar for isPasswordValid and areFormFieldsValid */
  });