import React, { Component } from 'react'

export default class Headers extends Component {
  render() {
    return (
      <div className="header">

        <div  hidden>
          <div className="header-right">
            <a className="active" href="#home"></a>
            <a href="#contact"></a>
            <a href="#about"></a>
          </div>
        </div>
      </div>
    )
  }
}
