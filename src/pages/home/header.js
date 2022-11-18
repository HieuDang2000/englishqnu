import React from "react";
class Header extends React.Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="navigator-left">
          <a href=''>
            <i className="fas fa-step-backward"></i>
          </a>
          <a href=''>
            <i className="fas fa-home"></i>
          </a>
          <a href=''>
            <i className="fas fa-step-forward"></i>
          </a>
        </div>
        <input
          type="search"
          className="lessonSearch"
          id="lessonSearch"
          name="q"
          placeholder="Search"
        />
        <div className="userInfo-right">
            hello {this.props.user}
          <a href="">
            <i className="fas fa-bars"></i>{" "}
          </a>
          <div className="hidden-info">
          <button>Change Infomation</button>
          <button onClick= {this.props.logout} >Logout</button></div>
        </div>
      </div>
    );
  }
}

export default Header;
