import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

const apiUrl = process.env.REACT_APP_API_URL_BASE;

if (!apiUrl) {
    throw new Error(
        `Please create .env file in the root folder of the app and define REACT_APP_API_BASE_URL=https://some-backend-url.com`,
    );
}

export const axiosClient = applyCaseMiddleware(
    axios.create({
        baseURL: new URL('api', apiUrl).toString(),
        withCredentials: true,
    }),
    {
        preservedKeys: ['_method'],
    },
);

axiosClient.interceptors.request.use((req) => {
    // if (!req.headers.authorization) {
    //     req.headers.authorization = getAccessTokenLocalStorage();
    // }
    return req;
});
