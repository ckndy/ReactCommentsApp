import React from 'react';



export default class Comment extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div >
      <h4 id='author'>{this.props.author}</h4>
      <p>{this.props.children}</p>
      </div>
      );
  }
}