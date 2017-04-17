import React from 'react';
import CommentList from './CommentList'

var samepleData = [
  { id: 1, author: 'John', text: 'Quiche!'},
  { id: 2, author: 'Keir', text: 'Jam!'},
];

export default class CommentContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: samepleData
    };
  }

  render () {
    return (
      <div>
      <h1>Comments</h1>
      <CommentList comments={this.state.data}/>
      </div>
      );
  }
}