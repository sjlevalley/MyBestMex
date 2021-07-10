// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./util/auth";
// import { get as getUser } from "./util/userApi";
import HomePage from "./pages/HomePage";
import SubmitShopPage from "./pages/SubmitShop";
import ShopPage from "./pages/Shop";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
// import PrivatePage from "./pages/PrivatePage";
import SignupPage from "./pages/SignupPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/shop/:id">
            <ShopPage />
          </Route>
          <PrivateRoute path="/submitshop">
            <SubmitShopPage />
          </PrivateRoute>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
