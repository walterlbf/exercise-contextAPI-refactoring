import React, { Component } from 'react'

export default class CARSProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    }
  }

  moveCar = (car, side) => {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  render() {
    const { children } = this.props;
    return (
      <CARSProvider.Provider value={{ ...this.state, moveCar: this.moveCar }} >
        {children}
      </CARSProvider.Provider >
    )
  }
}
