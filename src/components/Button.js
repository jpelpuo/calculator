import React, { Component } from "react";

class Button extends Component {
  render() {
    const { value, handleBtn } = this.props;
    return (
      <span className="">
        <button
          name={value}
          className="btn btn-primary p-4 font-weight-bold"
          onClick={handleBtn.bind(this, value)}
        >
          {value}
        </button>
      </span>
    );
  }
}

export default Button;
