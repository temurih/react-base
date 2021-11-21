import { useState } from 'react';

interface ErrorResponse extends Error {
    isAxiosError: boolean;
    response: {
        status: number;
        data?: {
            message?: string;
        };
    };
}

export type ApiResponse<T> =
    | {
          success: true;
          data?: T;
      }
    | {
          success: false;
          error?: ErrorResponse;
      };

interface RequestStateSuccess<T> {
    type: 'REQUEST_SUCCESS';
    data: T;
}

export const isSucceeded = <T>(state: RequestState<T>): boolean =>
    state.type === 'REQUEST_SUCCESS';
export const isLoading = <T>(state: RequestState<T>): boolean =>
    state.type === 'REQUEST_START';
export const isFailed = <T>(state: RequestState<T>): boolean =>
    state.type === 'REQUEST_ERROR';

export const requestInit = () =>
    ({ type: 'REQUEST_INIT', data: null } as const);
export const requestStart = () =>
    ({ type: 'REQUEST_START', data: null } as const);
export const requestSuccess = <T>(data: T): RequestStateSuccess<T> =>
    ({ type: 'REQUEST_SUCCESS', data } as const);

export const requestError = (error: ErrorResponse) =>
    ({ type: 'REQUEST_ERROR', error, data: null } as const);

export const dataOrUndefined = <T>(request: RequestState<T>): T | undefined =>
    request.type === 'REQUEST_SUCCESS' ? request.data : undefined;

export type RequestState<T> =
    | ReturnType<typeof requestInit | typeof requestStart | typeof requestError>
    | RequestStateSuccess<T>;

export const useRequestState = <T>() => {
    const [requestState, setRequestState] = useState<RequestState<T>>(
        requestInit(),
    );
    return [requestState, setRequestState] as const;
};
