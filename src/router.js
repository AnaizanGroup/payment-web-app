import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Cookies from "universal-cookie"
import ResetForm from "./components/authForms/resetPwd/ResetForm";
import Layout from "./layouts/layoutSite/Layout";
import CartShopping from "./pages/site/cart/CartShopping";
import Home from "./pages/site/home";
import Product from "./pages/site/product/Product";
import ProductDetails from "./pages/site/productDetails/ProductDetails";
import { CART_SHOPPING, 
    HOME, 
    PRODUCT, 
    PRODUCT_DETAILS,
    RESETPWD } from "./settings/constant";


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
                {/* reset pwd page */}
                <Route path={RESETPWD} element={
                    <ProtectedRoutes>
                        <Suspense fallback="...">
                            <ResetForm />
                        </Suspense>
                    </ProtectedRoutes>
                } />

                {/* home page */}
                <Route path={HOME} element={
                    <ProtectedRoutes>
                        <Layout>
                            <Suspense fallback="...">
                                <Home />
                            </Suspense>
                        </Layout>
                    </ProtectedRoutes>
                } />

                {/* product page */}
                <Route path={PRODUCT} element={
                    <ProtectedRoutes>
                        <Layout>
                            <Suspense fallback="...">
                                <Product />
                            </Suspense>
                        </Layout>
                    </ProtectedRoutes>
                } />

                {/* product details */}
                <Route path={PRODUCT_DETAILS} element={
                    <ProtectedRoutes>
                        <Layout>
                            <Suspense fallback="...">
                                <ProductDetails />
                            </Suspense>
                        </Layout>
                    </ProtectedRoutes>
                } />

                {/* cart shopping */}
                <Route path={CART_SHOPPING} element={
                    <ProtectedRoutes>
                        <Layout>
                            <Suspense fallback="...">
                                <CartShopping />
                            </Suspense>
                        </Layout>
                    </ProtectedRoutes>
                } />
            </Routes>
        </Router>
    )
}

export default ROUTES;