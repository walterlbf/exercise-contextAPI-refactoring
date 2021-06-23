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
      <CARSContext.Provider value={{ ...this.state, moveCar: this.moveCar }} >
        {children}
      </CARSContext.Provider >
    )
  }
}

CARSProvider.propTypes = {
  moveCar: PropTypes.func.isRequired,
};
