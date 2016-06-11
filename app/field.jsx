import React from 'react';

export default class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      available: this.props.available,
    };
  }
  render() {
    var availableStyle = this.state.available ? "available" : "unavailable";
    var stylename = "field " + availableStyle;
    var x = (this.state.id + 1) % 44;
    var y = Math.round((this.state.id + 1) / 44);
    console.log("position: " + x + ", " + y);
    return <div
        className={stylename}>
        {this.state.id}
      </div>
  }
}
