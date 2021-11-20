import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { ROUTE } from '../utils/Route';
import App from './index/Index';

const AppRouter: React.FC = () => {
    return (
        <ErrorBoundary>
            <Router>
                <Routes>
                    <Route caseSensitive path={ROUTE.index} element={<App />} />
                </Routes>
            </Router>
        </ErrorBoundary>
    );
};

export default AppRouter;
