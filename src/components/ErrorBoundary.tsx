import { Component, FC } from 'react';
import styled from 'styled-components';

const ErrorStyles = styled.div`
    padding: 20px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Error: FC = () => {
    return (
        <ErrorStyles>
            Something went wrong, please check back later!
        </ErrorStyles>
    );
};

interface ErrorState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<{}, ErrorState> {
    constructor(props: {}) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: unknown) {
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, errorInfo);
        console.error(error, errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <Error />;
        }
        return this.props.children;
    }
}
