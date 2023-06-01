// take two parameters: one for the username and one for the user type
// if the username starts with a capital letter and has length between 5 and 10 characters long, it must return "Username valid"; otherwise, it must return "Username invalid"
// if the user type is an admin or a manager, all usernames must return "Username valid"

function checkUserName (userName, userType){
    if (userType === "admin" || userType === "manager"){
        return "Username valid"
    }
    if (userName.toUpperCase()[0] === userName[0] && userName.length >5 && userName.length <10) { //had to google... not sure  what does it mean...
    return "Username valid"
    }
    return "Username Invalid"
}
console.log (checkUserName ("username", "Anastasia"))