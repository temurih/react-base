import { useCallback } from 'react';
import {
    requestStart,
    requestSuccess,
    requestError,
    useRequestState,
    ApiResponse,
} from './useRequestState';

export const useApiRequest = <T>() => {
    const [requestState, setRequestState] = useRequestState<T>();
    const makeRequest = useCallback(
        async (request: Promise<ApiResponse<T>>) => {
            setRequestState(requestStart());
            const response = await request;
            if (response.success) {
                setRequestState(requestSuccess<T>(response.data!));
            } else {
                setRequestState(requestError(response.error!));
            }
        },
        //eslint-disable-next-line
        [setRequestState],
    );
    return [requestState, makeRequest, setRequestState] as const;
};
