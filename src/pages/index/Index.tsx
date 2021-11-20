import logo from './../../logo.svg';
import styled from 'styled-components';
import { FC } from 'react';

const AppStyle = styled.div`
    text-align: center;

    .app-logo {
        height: 40vmin;
        pointer-events: none;
    }

    @media (prefers-reduced-motion: no-preference) {
        .app-logo {
            animation: app-logo-spin infinite 20s linear;
        }
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
    return (
        <AppStyle>
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
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
