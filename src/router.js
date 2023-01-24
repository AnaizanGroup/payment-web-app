import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Cookies from "universal-cookie"
import Layout from "./layouts/layoutSite/Layout";
import Home from "./pages/site/home";
import Product from "./pages/site/product/Product";
import { HOME, PRODUCT } from "./settings/constant";


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
                <Route path={HOME} element={
                    <ProtectedRoutes>
                        <Layout>
                            <Suspense fallback="...">
                                <Home />
                            </Suspense>
                        </Layout>
                    </ProtectedRoutes>
                } />

                <Route path={PRODUCT} element={
                    <ProtectedRoutes>
                        <Layout>
                            <Suspense fallback="...">
                                <Product />
                            </Suspense>
                        </Layout>
                    </ProtectedRoutes>
                } />
            </Routes>
        </Router>
    )
}

export default ROUTES;