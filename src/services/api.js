import Backendless from "backendless/dist/backendless";

Backendless.serverURL = "https://eu-api.backendless.com";
const APP_ID = "2835CDB7-FA8C-CCEB-FF4D-38ABC21D3700";
const JS_API_KEY = "15C3FC31-9703-437D-AD76-F1DF440A48D8";
Backendless.initApp(APP_ID, JS_API_KEY);

export let settings = {};
settings.host = Backendless.serverURL + `/${APP_ID}/${JS_API_KEY}`;

async function request(url, options) {
    try {
        const res = await fetch(url, options);

        if (!res.ok) {
            const error = await res.json();
            alert(error.message)
            throw new Error(error.message);
        }

        try {
            const data = await res.json();
            return data;
        } catch (error) {
            return res;
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

function createOptions(method = "get", data) {
    const result = {
        method,
        headers: {}
    };

    if (data) {
        result.headers["Content-Type"] = "application/json";
        result.body = JSON.stringify(data);
    }

    const userData = JSON.parse(sessionStorage.getItem("user"));
    if (userData) {
        result.headers["X-Authorization"] = userData.token;
    }

    return result;
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data) {
    return request(url, createOptions("post", data));
}

export async function put(url, data) {
    return request(url, createOptions("put", data));
}

export async function del(url) {
    return request(url, createOptions("delete"));
}


// export async function register(userData) {
//     const data = await post(settings.host + settings.registerEP, userData);

//     sessionStorage.setItem("user", JSON.stringify({
//         token: data.accessToken,
//         email: data.email,
//         id: data._id,
//     }));
// }

// export async function login(userData) {
//     const data = await post(settings.host + settings.loginEP, userData);

//     sessionStorage.setItem("user", JSON.stringify({
//         token: data.accessToken,
//         email: data.email,
//         id: data._id,
//     }));
// }

// export async function logout() {
//     await get(settings.host + settings.logoutEP);

//     sessionStorage.clear();
// }