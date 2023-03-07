import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Auth from "./components/authForms/Auth";
import Login from "./components/authForms/login/Login";
import Register from "./components/authForms/register/Register";
import ResetForm from "./components/authForms/resetPwd/ResetForm";
import ResetPwd from "./components/authForms/resetPwd/ResetPwd";
import VerifyCode from "./components/authForms/resetPwd/VerifyCode";
import { Spinner } from "./components/spinner/Spinner";
import Layout from "./layout/Layout";
import Deposit from "./pages/dashboard/deposit/Deposit";
import Invest from "./pages/dashboard/Invest/Invest";

import LayoutDashboard from "./pages/dashboard/LayoutDashboard";
import Payment from "./pages/dashboard/payment/Payement";
import Index from "./pages/dashboard/transaction";
import HomePage from "./pages/site/home";
import InvestGold from "./pages/site/investGold/InvestGold";
import Investiment from "./pages/site/investiment/Investiment";
import InvestimentStart from "./pages/site/investimentStart/InvestimentStart";
import PaymentGateway from "./pages/site/paymentGateway/PaymentGateway";
import PaymentLink from "./pages/site/paymentLink/PaymentLink";
import PaymentScan from "./pages/site/paymentScan/PaymentScan";
import PrivateRoute from "./PrivateRoute";
import {
    DASHBOARD_DEPOSIT,
    DASHBOARD_HOME,
    DASHBOARD_INVEST,
    DASHBOARD_PAYMENT,
    DASHBOARD_TRANSACTION,
    HOME_PAGE,
    INVESTIMENT,
    INVESTIMENT_START,
    INVEST_GOLD,
    LOGIN,
    PAYMENT_GATEWAY,
    PAYMENT_LINK,
    PAYMENT_SCAN,
    REGISTER,
    RESETFORM,
    RESETPWD,
    VERIFY
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
                {/* Home */}
                <Route path={HOME_PAGE} element={
                    <ProtectedRoutes>
                        <Layout>
                            <Suspense fallback={Spinner}>
                                <HomePage />
                            </Suspense>
                        </Layout>
                    </ProtectedRoutes>
                } />

                {/* investiment */}
                <Route path={INVESTIMENT} element={
                    <ProtectedRoutes>
                        <Layout>
                            <Suspense fallback={Spinner}>
                                <Investiment />
                            </Suspense>
                        </Layout>
                    </ProtectedRoutes>
                } />

                {/* investiment start */}
                <Route path={INVESTIMENT_START} element={
                    <ProtectedRoutes>
                        <Layout>
                            <Suspense fallback={Spinner}>
                                <InvestimentStart />
                            </Suspense>
                        </Layout>
                    </ProtectedRoutes>
                } />

                {/* investiment gold */}
                <Route path={INVEST_GOLD} element={
                    <ProtectedRoutes>
                        <Layout>
                            <Suspense fallback={Spinner}>
                                <InvestGold />
                            </Suspense>
                        </Layout>
                    </ProtectedRoutes>
                } />

                {/* investiment gold */}
                <Route path={PAYMENT_LINK} element={
                    <ProtectedRoutes>
                        <Layout>
                            <Suspense fallback={Spinner}>
                                <PaymentLink />
                            </Suspense>
                        </Layout>
                    </ProtectedRoutes>
                } />

                <Route path={PAYMENT_SCAN} element={
                    <ProtectedRoutes>
                        <Layout>
                            <Suspense fallback={Spinner}>
                                <PaymentScan />
                            </Suspense>
                        </Layout>
                    </ProtectedRoutes>
                } />

                <Route path={PAYMENT_GATEWAY} element={
                    <ProtectedRoutes>
                        <Layout>
                            <Suspense fallback={Spinner}>
                                <PaymentGateway />
                            </Suspense>
                        </Layout>
                    </ProtectedRoutes>
                } />

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

                <Route path={RESETPWD} element={
                    <ProtectedRoutes>
                        <Suspense fallback={Spinner}>
                            <ResetForm />
                        </Suspense>
                    </ProtectedRoutes>
                } />
                <Route path={VERIFY} element={
                    <ProtectedRoutes>
                        <Suspense fallback={Spinner}>
                            <VerifyCode />
                        </Suspense>
                    </ProtectedRoutes>
                } />

            </Routes>
        </Router>
    )
}

export default ROUTES;