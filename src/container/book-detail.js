import React, { Component } from 'react';
import { connect } from 'react-redux';
class BookDetail extends Component {
  render() {

    if (!this.props.book) {
      return <div>Select a book</div>
    }

    console.log(this.props.book)
    if (this.props.port)
      console.log(Object.keys(this.props.port))
    return (

      <div>
        <h2>{this.props.book.title}</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
    port: state.portfolio
  }
}

export default connect(mapStateToProps)(BookDetail)