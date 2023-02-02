import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Cookies from "universal-cookie"
import ResetForm from "./components/authForms/resetPwd/ResetForm";
import LayoutCartCheckout from "./layouts/layoutSite/LayoutCartCheckout";
import LayoutHome from "./layouts/layoutSite/LayoutHome";
import LayoutShop from "./layouts/layoutSite/LayoutShop";
import CartShopping from "./pages/site/cart/CartShopping";
import Checkout from "./pages/site/checkout/Checkout";
import Home from "./pages/site/home";
import Product from "./pages/site/product/Product";
import ProductDetails from "./pages/site/productDetails/ProductDetails";
import Shop from "./pages/site/shop/Shop";
import {
    CART_SHOPPING,
    CHECKOUT,
    HOME,
    PRODUCT,
    PRODUCT_DETAILS,
    RESETPWD,
    SHOP_HOME
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
                        <LayoutHome>
                            <Suspense fallback="...">
                                <Home />
                            </Suspense>
                        </LayoutHome>
                    </ProtectedRoutes>
                } />

                {/* product page */}
                <Route path={PRODUCT} element={
                    <ProtectedRoutes>
                        <LayoutHome>
                            <Suspense fallback="...">
                                <Product />
                            </Suspense>
                        </LayoutHome>
                    </ProtectedRoutes>
                } />

                {/* product details */}
                <Route path={PRODUCT_DETAILS} element={
                    <ProtectedRoutes>
                        <LayoutHome>
                            <Suspense fallback="...">
                                <ProductDetails />
                            </Suspense>
                        </LayoutHome>
                    </ProtectedRoutes>
                } />

                {/* cart shopping */}
                <Route path={CART_SHOPPING} element={
                    <ProtectedRoutes>
                        <LayoutCartCheckout>
                            <Suspense fallback="...">
                                <CartShopping />
                            </Suspense>
                        </LayoutCartCheckout>
                    </ProtectedRoutes>
                } />

                {/* checkout */}
                <Route path={CHECKOUT} element={
                    <ProtectedRoutes>
                        <LayoutCartCheckout>
                            <Suspense fallback="...">
                                <Checkout />
                            </Suspense>
                        </LayoutCartCheckout>
                    </ProtectedRoutes>
                } />

                {/* shop */}
                <Route path={SHOP_HOME} element={
                    <ProtectedRoutes>
                        <LayoutShop>
                            <Suspense fallback="...">
                                <Shop />
                            </Suspense>
                        </LayoutShop>
                    </ProtectedRoutes>
                } />
            </Routes>
        </Router>
    )
}

export default ROUTES;