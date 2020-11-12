import React, { Component } from 'react';

export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  }
  componentDidCatch() {
    this.setState({
      hasError: true});
  }
  render() {
    if(this.state.hasError) {
      return <div>Something happend... pls reload the page or try lat0er</div>
    }
    return this.props.children;
  }
}