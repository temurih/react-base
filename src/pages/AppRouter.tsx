import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Error, ErrorBoundary } from '../components/ErrorBoundary';
import { ROUTE } from '../utils/Route';
import App from './index/Index';

const AppRouter: React.FC = () => {
    return (
        <ErrorBoundary>
            <Router>
                <Routes>
                    <Route caseSensitive path={ROUTE.index} element={<App />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </ErrorBoundary>
    );
};

export default AppRouter;
