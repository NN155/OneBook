import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from '../../layouts';
import { RoomsPage, CreateRoomForm } from '../../pages';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<RoomsPage />} />
                    <Route path="/create" element={<CreateRoomForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;