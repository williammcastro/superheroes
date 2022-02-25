import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LoginScreen } from '../login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
            <BrowserRouter>
                <Routes>

                    <Route path="/login" element={
                            <PublicRoute>
                                <LoginScreen />
                            </PublicRoute>
                        } 
                    />


                    {/* <Route path="/login" element={<LoginScreen />} /> */}

                    <Route path='/*' element={
                            <PrivateRoute>
                                <DashboardRoutes />
                            </PrivateRoute>
                        } 
                    />

                        {/* <Route path="/*" element={<DashboardRoutes />} /> */}

                </Routes>
            </BrowserRouter>
    )
}
