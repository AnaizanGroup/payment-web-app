import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Cookies from "universal-cookie"
import ResetForm from "./components/authForms/resetPwd/ResetForm";
import LayoutCartCheckout from "./layouts/layoutSite/LayoutCartCheckout";
import LayoutHome from "./layouts/layoutSite/LayoutHome";
import LayoutShop from "./layouts/layoutSite/LayoutShop";
import Index from "./pages/dashboard/dashboardBuyer";
import Order from "./pages/dashboard/dashboardBuyer/order/Order";
import HomeSeller from "./pages/dashboard/dashboardSeller/home/Home";
import LayoutSeller from "./pages/dashboard/dashboardSeller/LayoutSeller";
import MessageSeller from "./pages/dashboard/dashboardSeller/message/MessageSeller";
import PayementSettings from "./pages/dashboard/dashboardSeller/payement/PayementSettings";
import AddProduct from "./pages/dashboard/dashboardSeller/products/AddProduct";
import ListProduct from "./pages/dashboard/dashboardSeller/products/ListProducts";
import ProfilSeller from "./pages/dashboard/dashboardSeller/profil/ProfilSeller";
import CartShopping from "./pages/site/cart/CartShopping";
import Checkout from "./pages/site/checkout/Checkout";
import Home from "./pages/site/home";
import Product from "./pages/site/product/Product";
import ProductDetails from "./pages/site/productDetails/ProductDetails";
import Shop from "./pages/site/shop/Shop";
import ShopProduct from "./pages/site/shopCategorie/ShopCategorie";
import ShopPromo from "./pages/site/shopPromo/ShopPromo";
import {
    CART_SHOPPING,
    CHECKOUT,
    DASHBOARD_BUYER,
    DASHBOARD_SELLER_ADD_PRODUCTS,
    DASHBOARD_SELLER_HOME,
    DASHBOARD_SELLER_MESSAGE,
    DASHBOARD_SELLER_ORDER,
    DASHBOARD_SELLER_PAYEMENT,
    DASHBOARD_SELLER_PRODUCTS,
    DASHBOARD_SELLER_PROFIL,
    HOME,
    PRODUCT,
    PRODUCT_DETAILS,
    RESETPWD,
    SHOP_HOME,
    SHOP_PRODUCT,
    SHOP_PROMO
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

                {/* shop product */}
                <Route path={SHOP_PRODUCT} element={
                    <ProtectedRoutes>
                        <LayoutShop>
                            <Suspense fallback="...">
                                <ShopProduct />
                            </Suspense>
                        </LayoutShop>
                    </ProtectedRoutes>
                } />
                {/* shop product promo */}
                <Route path={SHOP_PROMO} element={
                    <ProtectedRoutes>
                        <LayoutShop>
                            <Suspense fallback="...">
                                <ShopPromo />
                            </Suspense>
                        </LayoutShop>
                    </ProtectedRoutes>
                } />

                {/* Dashboard buyer */}
                <Route path={DASHBOARD_BUYER} element={
                    <ProtectedRoutes>
                        <Suspense fallback="...">
                            <Index />
                        </Suspense>
                    </ProtectedRoutes>
                } />

                {/* Dashboard seller */}
                <Route path={DASHBOARD_SELLER_HOME} element={
                    <ProtectedRoutes>
                        <LayoutSeller>
                            <Suspense fallback="...">
                                <HomeSeller />
                            </Suspense>
                        </LayoutSeller>
                    </ProtectedRoutes>
                } />

                <Route path={DASHBOARD_SELLER_PROFIL} element={
                    <ProtectedRoutes>
                        <LayoutSeller>
                            <Suspense fallback="...">
                                <ProfilSeller />
                            </Suspense>
                        </LayoutSeller>
                    </ProtectedRoutes>
                } />

                <Route path={DASHBOARD_SELLER_MESSAGE} element={
                    <ProtectedRoutes>
                        <LayoutSeller>
                            <Suspense fallback="...">
                                <MessageSeller />
                            </Suspense>
                        </LayoutSeller>
                    </ProtectedRoutes>
                } />

                <Route path={DASHBOARD_SELLER_ORDER} element={
                    <ProtectedRoutes>
                        <LayoutSeller>
                            <Suspense fallback="...">
                                <Order />
                            </Suspense>
                        </LayoutSeller>
                    </ProtectedRoutes>
                } />

                <Route path={DASHBOARD_SELLER_PRODUCTS} element={
                    <ProtectedRoutes>
                        <LayoutSeller>
                            <Suspense fallback="...">
                                <ListProduct />
                            </Suspense>
                        </LayoutSeller>
                    </ProtectedRoutes>
                } />

                <Route path={DASHBOARD_SELLER_ADD_PRODUCTS} element={
                    <ProtectedRoutes>
                        <LayoutSeller>
                            <Suspense fallback="...">
                                <AddProduct />
                            </Suspense>
                        </LayoutSeller>
                    </ProtectedRoutes>
                } />

                <Route path={DASHBOARD_SELLER_PAYEMENT} element={
                    <ProtectedRoutes>
                        <LayoutSeller>
                            <Suspense fallback="...">
                                <PayementSettings />
                            </Suspense>
                        </LayoutSeller>
                    </ProtectedRoutes>
                } />
            </Routes>
        </Router>
    )
}

export default ROUTES;