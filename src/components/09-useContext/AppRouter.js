import React from 'react';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

export const AppRouter = () => {
    return (

        <BrowserRouter>
            <div>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route exact path="/" element={<HomeScreen />} />
                        <Route exact path="/about" element={<AboutScreen />} />
                        <Route exact path="/login" element={<LoginScreen />} />
                    </Routes>

                </div>
            </div>
        </BrowserRouter>

    );
};
