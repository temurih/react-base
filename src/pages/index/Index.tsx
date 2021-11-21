import logo from './../../logo.svg';
import styled from 'styled-components';
import { FC, useCallback, useEffect } from 'react';
import { useApiRequest } from '../../utils/hooks/useApiRequest';
import { testApi, TestApiResponse } from './testApi';
import { isLoading } from '../../utils/hooks/useRequestState';

const AppStyle = styled.div`
    text-align: center;

    .app-logo {
        height: 40vmin;
        cursor: pointer;
    }

    @media (prefers-reduced-motion: no-preference) {
        .app-logo {
            animation: app-logo-spin infinite 20s linear;
        }
    }

    .code {
        color: #000;
        background-color: #61dafb;
    }

    .app-header {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
    }

    .app-link {
        color: #61dafb;
        transition: color 1s;
    }
    .app-link:hover {
        color: #fff;
    }

    @keyframes app-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const App: FC = () => {
    const [requestState, makeRequest] = useApiRequest<TestApiResponse>();

    useEffect(() => {
        switch (requestState.type) {
            case 'REQUEST_INIT':
                console.log(requestState.type);
                break;
            case 'REQUEST_START':
                console.log(requestState.type);
                break;
            case 'REQUEST_SUCCESS':
                console.log(requestState.type, requestState.data);
                break;
            case 'REQUEST_ERROR':
                console.log('Error message ->', requestState.error.message);
                break;
            default:
                break;
        }
    }, [requestState]);

    const handleClick = useCallback(() => {
        makeRequest(testApi(['something', 'something-else']));
    }, [makeRequest]);
    return (
        <AppStyle>
            <header className="app-header">
                <img
                    src={logo}
                    className="app-logo"
                    alt="logo"
                    title="logo"
                    onClick={handleClick}
                />
                <p>
                    Edit{' '}
                    <code
                        className={isLoading(requestState) ? 'code' : undefined}
                    >
                        src/pages/index/Index.tsx
                    </code>{' '}
                    and save to reload.
                </p>
                <a
                    className="app-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </AppStyle>
    );
};

export default App;
