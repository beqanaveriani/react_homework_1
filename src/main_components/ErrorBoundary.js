import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: '',
  };
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
          <h1>Something went wrong...</h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
