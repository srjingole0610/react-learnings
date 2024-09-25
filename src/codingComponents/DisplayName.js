import React, { Component } from 'react'


export default class DisplayName extends Component {
    constructor(){
        super()
        this.name =  "Suraj"
    }
  render() {
    return (
      <div>
        <h1 className="text-center text-secondary display-1 mt-5 bg-warning fw-bold">Hello {this.name}</h1>
      </div>
    )
  }
}

