import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "../auth/protected-route";

// views
import LandingPage from "./views/LandingPage/LandingPage.js";
import ProductPage from "./views/ProductPage/ProductPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import CartPage from "./views/CartPage/CartPage";
import HistoryPage from "./views/HistoryPage/HistoryPage";
import AboutPage from "./views/AboutPage/AboutPage";
import Profile from "./views/ProfilePage/profile";
import ExternalApi from "./views/ExternalApiPage/external-api";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/product" component={ProductPage} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />
          <ProtectedRoute
            exact
            path="/product/upload"
            component={UploadProductPage}
          />
          <Route
            exact
            path="/product/:productID"
            component={DetailProductPage}
          />
          <ProtectedRoute exact path="/user/cart" component={CartPage} />
          <ProtectedRoute exact path="/history" component={HistoryPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
