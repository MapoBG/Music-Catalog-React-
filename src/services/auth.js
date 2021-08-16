import Backendless from "backendless/dist/backendless";

function userRegistered(user) {
    console.log(user.name + " has been registered");
}

function userLoggedIn(user) {
    console.log(user.email + " has logged in");
}

function userLoggedOut() {
    console.log("user has been logged out");
}

function gotError(err) {
    console.log("error message - " + err.message);
    console.log("error code - " + err.statusCode);
}

export async function register(userData) {
    userData.name = userData.email.split('@')[0];
    const user = new Backendless.User(userData);

    Backendless.UserService.register(user)
        .then(userRegistered)
        .catch(gotError);
}

export async function login(userData) {
    userData.stayLoggedIn = true;

    Backendless.UserService.login(userData.email, userData.password, userData.stayLoggedIn)
        .then(userLoggedIn)
        .catch(gotError);
}

export function logout() {
    Backendless.UserService.logout()
        .then(userLoggedOut)
        .catch(gotError);
}