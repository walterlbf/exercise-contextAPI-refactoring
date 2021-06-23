import React, { Component } from 'react'
import CARSContext from './CARSContext';
import PropTypes from 'prop-types';

export default class CARSProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
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

  changeSignal = (color) => {
    this.setState({
      signal: {
        ...this.state.signal,
        color: color,
      }
    })
  }

  render() {
    const { children } = this.props;
    return (
      <CARSContext.Provider value={{ ...this.state, moveCar: this.moveCar, changeSignal: this.changeSignal }} >
        {children}
      </CARSContext.Provider >
    )
  }
}

CARSProvider.propTypes = {
  moveCar: PropTypes.func.isRequired,
};
