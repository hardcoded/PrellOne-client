export const submitSignUp = (userName, firstName, lastName, email, password) => ({
    type: 'SUBMIT_SIGN_UP',
    userName,
    firstName,
    lastName,
    email,
    password
})