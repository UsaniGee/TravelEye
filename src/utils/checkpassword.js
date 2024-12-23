
/**
 * @params password string
 * @description checks password strength
 */
export const checkPasswordStrength = (password = "") => {
    const MIN_PASSWORD_LENGTH = 8;
  
    // Password strength criteria with their respective messages
    const criteria = [
      { test: /[A-Z]/, message: 'should contain an uppercase letter' },
      { test: /[a-z]/, message: 'should contain a lowercase letter' },
      { test: /[0-9]/, message: 'should contain at least a number' },
      { test: new RegExp(`.{${MIN_PASSWORD_LENGTH},}`), message: `should be at least ${MIN_PASSWORD_LENGTH} characters long` },
    ];
  
    for (const { test, message } of criteria) {
      if (!test.test(password)) {
        return { message, isStrong: false };
      }
    }
  
    return { message: '', isStrong: true };
  };