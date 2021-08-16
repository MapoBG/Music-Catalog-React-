import Backendless from "backendless/dist/backendless";

function gotError(err) {
    console.log("error message - " + err.message);
    console.log("error code - " + err.statusCode);
}

export async function register(userData) {
    userData.name = userData.email.split('@')[0];
    const user = new Backendless.User(userData);

    Backendless.UserService.register(user)
        .then(() => console.log(user.name + " has been registered"))
        .catch (gotError);
}

export async function login(userData) {
    userData.stayLoggedIn = true;

    Backendless.UserService.login(userData.email, userData.password, userData.stayLoggedIn)
        .then(() => console.log(userData.email + " has logged in"))
        .catch(gotError);
}

export function logout() {
    Backendless.UserService.logout()
        .then(() => console.log("user has been logged out"))
        .catch(gotError);
}