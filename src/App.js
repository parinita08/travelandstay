import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import "./App.css";

function App() {
  const { user } = useContext(AuthenticationContext);

  return (
    <Router>
      <div className="app">
        {user ? (
          <>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={SearchPage} />
            <Footer />
          </>
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
}

export default App;
