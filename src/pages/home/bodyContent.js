import React, { Component } from "react";

class BodyContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            unit: {},
            clicked: false,
          };
      }
  
  componentDidMount() {
    const APIUrl ="https://script.google.com/macros/s/AKfycbw6TirH7cgIuQE1XfFkz2-7vj8ytXfn9RS_YAKVIMUUuijzEXdrEAoH6K8zbgfSmlELkQ/exec";
    fetch(APIUrl)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }
  handleClickUnit = (id) => {
    const { data } = this.state;
    // const unit1 = data.find((index) => index === id);
    this.setState({
    //   clicked: true,
      unit: {
        unit: "unit1",
        voc: "hehe",
        gra: "grammar"
      },
    });
  };
  render() {
    const { unit } = this.state;
    return this.state.clicked ? (
      <div>
        {unit.unit}
        {unit.voc}
        {unit.gra}
      </div>
    ) : (
      <div className="container">
        day la trang chu
        <div className="Content 0">
          <a href="" onClick={this.handleClickUnit(0)}>
            Unit 1
          </a>
        </div>
      </div>
    );
  }
}

export default BodyContent;
