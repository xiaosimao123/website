import React, { Component } from "react";

class Tabs extends Component {
  state = {
    selected: this.props.selected || 0
  };

  handleChange(index) {
    this.setState({ selected: index });
  }

  render() {
    return (
      <>
        <ul className="w-full flex flex-row pt-0.5 bg-slate-100">
          {this.props.children.map((elem, index) => {
            let style = index === this.state.selected ? "opacity-100 bg-white text-blue-500" : "";
            return (
              <li
                key={index}
                className={ index === this.state.selected? "x-4 p-1.5 opacity-100 bg-white text-blue-500 " :"x-4 p-1.5 opacity-50 hover:opacity-100 transition " }
                onClick={() => this.handleChange(index)}
              >
                {elem.props.title}
              </li>
            );
          })}
        </ul>
        <div className="tab">{this.props.children[this.state.selected]}</div>
      </>
    );
  }
}

export default Tabs;