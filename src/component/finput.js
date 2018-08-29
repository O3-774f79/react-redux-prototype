import React from "react";

class Box extends React.Component {
  render() {
    console.log(`props` + this.props.handleClick);
    return (
      <div className="wrapper">
        <div
        >
          <input value={this.props.textvalue}/>   
        </div>
      </div>
    );
  }
}

export default Box;
