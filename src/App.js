import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import Fuse from 'fuse.js';
import Home from "./Home";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import "./App.css";
import data from './data/search.json'

function App() {
  const { user } = useContext(AuthenticationContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [hotels, setHotels] = useState([]);

  console.log(data);
  useEffect(() => {
    setHotels(data);
  }, [hotels]);


  useEffect(() => {
    const fuse = new Fuse(hotels, { keys: ['data.title', 'data.location'] });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (hotels.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setHotels(results);
    } else {
      setHotels(hotels);
    }
  }, [searchTerm]);



  return (
    <Router>
      <div className="app">
        {user ? (
          <>
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <Route exact path="/" component={Home} />
            <Route exact path="/search"  render={(props) => (
    <SearchPage data={hotels} />
  )}/>
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
