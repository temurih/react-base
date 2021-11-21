import { axiosClient } from '../../utils/axiosClient';

// http://validate.jsontest.com/?json=[something]
// notice that our Axios interceptor convert snake_case to camelCase
export interface TestApiResponse {
    size: number;
    parseTimeNanoseconds: number;
    objectOrArray: 'array' | 'object';
    validate: boolean;
    empty: boolean;
}

export const testApi = (data: string[]) => {
    // if you are using a test URL, you may have to
    // turn off CORS policy from the browser temporarily
    const url = `/?json=[${data}]`;
    return axiosClient.get<TestApiResponse>(url, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    });
};
