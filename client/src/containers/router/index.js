import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from '../../layouts';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<></>} />
                    <Route path="/create" element={<></>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;