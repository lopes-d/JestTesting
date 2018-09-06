import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  constructor (props) {
    super(props);

    // this.testi = this.testi.bind(this);
    // this.testi2 = this.testi2.bind(this);
  }
  // componentDidMount () {
  //   this.testi();
  // }
  // testi () {
  //   console.log('HEY');
  // }

  // testi2() {
  //   const { propFunction } = this.props;
  //   propFunction();
  //   return 'Name';
  // }

  renderComments() {
  // renderComments = () => {
    const { comments } = this.props;
    return comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>
    )};
};

function mapStateToProps(state) {
  return { comments: state.comments };
 };

export default connect(mapStateToProps)(CommentList);