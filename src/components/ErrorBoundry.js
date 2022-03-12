import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state.hasError;
    if (hasError) {
      return <h1>opps we encountered an error</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
