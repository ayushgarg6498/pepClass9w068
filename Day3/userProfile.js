function createUserProfile(username, age = 25, country = "Unknown") {
    return {username,age,country};
}

console.log(createUserProfile("Ayush"));