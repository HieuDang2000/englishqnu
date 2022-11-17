import { dividerClasses } from "@mui/material";
import React from "react";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {},user: "", pass:"" };
  }
  componentDidMount() {
    fetch("https://script.google.com/macros/s/AKfycbwA6UtQBo_MV4KXWersqoBq1Hae9QJw6ZGlKP6g6FMg9a4PD7N3aewqpTpcg7b7s4fW6g/exec")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                data: json,
            });
        })
        console.log(this.state.data);
}
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  };
  handleSubmit = (event) => {
    const data = this.state.data;
    const checkUserResult = data.find((d)=> d.user === this.state.user)
    if (checkUserResult) {
      if (checkUserResult.pass === this.state.pass){
        alert("Login successful");
      }else alert("Login failed");
    }
    else alert("Login failed");
    this.setState({ user: "", pass: "" });
    event.preventDefault();
  };
  changeToSignup = (event) => {
  }
  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label>English Web Quiz</label> <br></br>
          <label>
            Account:
            <input
              type="text"
              name="user"
              value={this.state.user}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Password:
            <input
              type="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <input type="submit" value="Login" />
        </form>
        <label>Don't have account?</label>
        <button onClick={this.changeToSignup}>sign up</button>
      </div>
    );
  }
}

export default Login;
