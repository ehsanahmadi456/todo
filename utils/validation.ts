function isValidEmail(email: string) {
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function isValidPassword(password: string) {
    return password.length >= 4;
}

function isValidFirstName(password: string) {
    return password.length >= 3;
}

export { isValidEmail, isValidPassword, isValidFirstName };