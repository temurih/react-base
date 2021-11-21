import { AxiosError, AxiosResponse } from 'axios';
import { useCallback } from 'react';
import {
    requestStart,
    requestSuccess,
    requestError,
    useRequestState,
} from './useRequestState';

export const useApiRequest = <T>() => {
    const [requestState, setRequestState] = useRequestState<T>();
    const makeRequest = useCallback(
        async (request: Promise<AxiosResponse<T>>) => {
            setRequestState(requestStart());
            request
                .then((data: AxiosResponse<T>) => {
                    setRequestState(requestSuccess<T>(data.data!));
                })
                .catch((error: AxiosError) => {
                    setRequestState(requestError(error));
                });
        },
        //eslint-disable-next-line
        [setRequestState],
    );
    return [requestState, makeRequest, setRequestState] as const;
};
