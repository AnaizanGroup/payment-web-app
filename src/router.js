import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Auth from "./components/authForms/Auth";
import Login from "./components/authForms/login/Login";
import Register from "./components/authForms/register/Register";
import ResetForm from "./components/authForms/resetPwd/ResetForm";
import ResetPwd from "./components/authForms/resetPwd/ResetPwd";
import { Spinner } from "./components/spinner/Spinner";
import Deposit from "./pages/dashboard/deposit/Deposit";
import Invest from "./pages/dashboard/Invest/Invest";

import LayoutDashboard from "./pages/dashboard/LayoutDashboard";
import Payment from "./pages/dashboard/payment/Payement";
import Index from "./pages/dashboard/transaction";
import PrivateRoute from "./PrivateRoute";
import {
    DASHBOARD_DEPOSIT,
    DASHBOARD_HOME,
    DASHBOARD_INVEST,
    DASHBOARD_PAYMENT,
    DASHBOARD_TRANSACTION,
    LOGIN,
    REGISTER,
    RESETFORM
} from "./settings/constant";


function ProtectedRoutes({ children }) {
    const isAuth = true;
    if (!isAuth) {
        return <Navigate to='/' replace />
    }
    return children;
}

const ROUTES = () => {
    return (
        <Router>
            <Routes>
                {/* Dashboard Home */}
                <Route path={DASHBOARD_TRANSACTION} element={
                    <ProtectedRoutes>
                        <LayoutDashboard>
                            <Suspense fallback={Spinner}>
                                <Index />
                            </Suspense>
                        </LayoutDashboard>
                    </ProtectedRoutes>
                } />

                <Route path={DASHBOARD_DEPOSIT} element={
                    <ProtectedRoutes>
                        <LayoutDashboard>
                            <Suspense fallback={Spinner}>
                                <Deposit />
                            </Suspense>
                        </LayoutDashboard>
                    </ProtectedRoutes>
                } />

                <Route path={DASHBOARD_INVEST} element={
                    <ProtectedRoutes>
                        <LayoutDashboard>
                            <Suspense fallback={Spinner}>
                                <Invest />
                            </Suspense>
                        </LayoutDashboard>
                    </ProtectedRoutes>
                } />

                <Route path={DASHBOARD_PAYMENT} element={
                    <ProtectedRoutes>
                        <LayoutDashboard>
                            <Suspense fallback={Spinner}>
                                <Payment />
                            </Suspense>
                        </LayoutDashboard>
                    </ProtectedRoutes>
                } />

                <Route path={REGISTER} element={
                    <ProtectedRoutes>
                        <Suspense fallback={Spinner}>
                            <Register />
                        </Suspense>
                    </ProtectedRoutes>
                } />

                <Route path={LOGIN} element={
                    <ProtectedRoutes>
                        <Suspense fallback={Spinner}>
                            <Login />
                        </Suspense>
                    </ProtectedRoutes>
                } />

                <Route path={RESETFORM} element={
                    <ProtectedRoutes>
                        <Suspense fallback={Spinner}>
                            <ResetPwd />
                        </Suspense>
                    </ProtectedRoutes>
                } />

            </Routes>
        </Router>
    )
}

export default ROUTES;