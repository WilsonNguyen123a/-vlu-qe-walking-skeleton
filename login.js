function checkLogin(username, password) {
    return username === "admin" && password === "123";
}

// Export để Jest có thể test
module.exports = checkLogin;
