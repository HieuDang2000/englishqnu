import "./App.css";
import React, { Component } from "react";
import Login from "./pages/Login";
import HomePage from "./pages/home/HomePage";

class App extends Component {
  
  state = { user: "", pass: "", login: true };
  
  handlerLogin = (user, pass) => {
    this.setState({
      user: user,
      pass: pass,
      login: true,
    });
    console.log("loi o app")
  };

  handlerLogout = () => {
    this.setState({ user: "", pass: "", login: false });
  };

  render() {
    const isLogin = this.state.login;
    if (isLogin) {
      return <HomePage user={this.state.user} logout={this.handlerLogout} />
    }
    else return <Login handlerLogin={this.handlerLogin} />
  }
}

export default App;
