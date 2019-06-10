import React, { Component } from "react";
// import logo from "./images/logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./components/layout/About";
import NotFound from "./components/layout/NotFound";
import Posts from "./components/posts/Posts";
import AddPost from "./components/posts/AddPost";
import EditPost from "./components/posts/EditPost";

// Store
import store from "./store";
import { Provider } from "react-redux";
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/post/add" component={AddPost} />
              <Route exact path="/post/edit/:id" component={EditPost} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
