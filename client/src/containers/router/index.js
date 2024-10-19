import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from '../../layouts';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" component={<RootLayout />}>
                    <Route index component={<></>} />
                    <Route path="/create" component={<></>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;