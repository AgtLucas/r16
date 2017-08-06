import React, { Component } from 'react'

class Error extends Component {
  constructor () {
    super()
    this.state = { error: null, errorInfo: null }
  }

  componentDidCcatch (error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }

  render () {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong...</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }

    return this.props.children
  }
}

export default Error
