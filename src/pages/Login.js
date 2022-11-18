import React from "react";
class Login extends React.Component {
  state = { data: {}, user: "", pass: "" };
  componentDidMount() {
    const APIUrl ="https://script.google.com/macros/s/AKfycbwA6UtQBo_MV4KXWersqoBq1Hae9QJw6ZGlKP6g6FMg9a4PD7N3aewqpTpcg7b7s4fW6g/exec";
    fetch(APIUrl)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  };
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    const {data,user,pass} = this.state;
    const checkUserResult = data.find((u) => u.user === user);
    if (checkUserResult && checkUserResult.pass === pass) {
      alert("Login successful");
      console.log("loi o login")
      this.props.handlerLogin(user,pass);
    } 
    else {
      alert("Login failed");
      this.setState({ user: "", pass: "" });
    }
    event.preventDefault();
  };
  render() {
    const {user,pass} = this.state;

    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label>English Web Quiz</label> <br></br>
          <label>
            Account:
            <input
              type="text"
              name="user"
              value={user}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Password:
            <input
              type="password"
              name="pass"
              value={pass}
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
