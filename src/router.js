import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Cookies from "universal-cookie"
import ResetForm from "./components/authForms/resetPwd/ResetForm";
import LayoutCartCheckout from "./layouts/layoutSite/LayoutCartCheckout";
import LayoutHome from "./layouts/layoutSite/LayoutHome";
import LayoutShop from "./layouts/layoutSite/LayoutShop";
import HomeBuyer from "./pages/dashboard/dashboardBuyer/home/Home";
import LayoutBuyer from "./pages/dashboard/dashboardBuyer/LayoutBuyer";
import MessageBuyer from "./pages/dashboard/dashboardBuyer/message/Message";
import Order from "./pages/dashboard/dashboardBuyer/order/Order";
import ProfilBuyer from "./pages/dashboard/dashboardBuyer/profil/Profil";
import WhishList from "./pages/dashboard/dashboardBuyer/whishlist/WhishList";
import HomeSeller from "./pages/dashboard/dashboardSeller/home/Home";
import LayoutSeller from "./pages/dashboard/dashboardSeller/LayoutSeller";
import MessageSeller from "./pages/dashboard/dashboardSeller/message/MessageSeller";
import PayementSettings from "./pages/dashboard/dashboardSeller/payement/PayementSettings";
import AddProduct from "./pages/dashboard/dashboardSeller/products/AddProduct";
import Cobeille from "./pages/dashboard/dashboardSeller/products/Cobeille";
import ListProduct from "./pages/dashboard/dashboardSeller/products/ListProducts";
import ProfilSeller from "./pages/dashboard/dashboardSeller/profil/ProfilSeller";
import Sale from "./pages/dashboard/dashboardSeller/sale/Sale";
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
    DASHBOARD_BUYER_FAVORIS,
    DASHBOARD_BUYER_HOME,
    DASHBOARD_BUYER_MESSAGE,
    DASHBOARD_BUYER_ORDER,
    DASHBOARD_BUYER_PROFIL,
    DASHBOARD_SELLER_ADD_PRODUCTS,
    DASHBOARD_SELLER_COBEILLE,
    DASHBOARD_SELLER_HOME,
    DASHBOARD_SELLER_MESSAGE,
    DASHBOARD_SELLER_PAYEMENT,
    DASHBOARD_SELLER_PRODUCTS,
    DASHBOARD_SELLER_PROFIL,
    DASHBOARD_SELLER_SALLE,
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
                <Route path={DASHBOARD_BUYER_HOME} element={
                    <ProtectedRoutes>
                        <LayoutBuyer>
                            <Suspense fallback="...">
                                <HomeBuyer />
                            </Suspense>
                        </LayoutBuyer>
                    </ProtectedRoutes>
                } />
                <Route path={DASHBOARD_BUYER_PROFIL} element={
                    <ProtectedRoutes>
                        <LayoutBuyer>
                            <Suspense fallback="...">
                                <ProfilBuyer />
                            </Suspense>
                        </LayoutBuyer>
                    </ProtectedRoutes>
                } />
                <Route path={DASHBOARD_BUYER_MESSAGE} element={
                    <ProtectedRoutes>
                        <LayoutBuyer>
                            <Suspense fallback="...">
                                <MessageBuyer/>
                            </Suspense>
                        </LayoutBuyer>
                    </ProtectedRoutes>
                } />
                  <Route path={DASHBOARD_BUYER_FAVORIS} element={
                    <ProtectedRoutes>
                        <LayoutBuyer>
                            <Suspense fallback="...">
                                <WhishList />
                            </Suspense>
                        </LayoutBuyer>
                    </ProtectedRoutes>
                } />
                <Route path={DASHBOARD_BUYER_ORDER} element={
                    <ProtectedRoutes>
                        <LayoutBuyer>
                            <Suspense fallback="...">
                                <Order />
                            </Suspense>
                        </LayoutBuyer>
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

                <Route path={DASHBOARD_SELLER_SALLE} element={
                    <ProtectedRoutes>
                        <LayoutSeller>
                            <Suspense fallback="...">
                                <Sale />
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

                <Route path={DASHBOARD_SELLER_COBEILLE} element={
                    <ProtectedRoutes>
                        <LayoutSeller>
                            <Suspense fallback="...">
                                <Cobeille />
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