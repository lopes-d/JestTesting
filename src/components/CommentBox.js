import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';


class CommentBox extends Component {
  constructor (props) {
    super(props);

    this.state = { comment: '' };
    //this.testi = this.testi.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // state = { comment: '' };

  handleChange = (event) => {
    this.setState({ comment: event.target.value});
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    
    this.props.saveComment(this.state.comment);

    this.setState({comment: ''});
   }

  handleSubmit (event) {
    event.preventDefault();
    
    this.props.saveComment(this.state.comment);

    this.setState({comment: ''});
  }
  
  render() { 
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
        <button className="fetch-comments" onClick={this.props.fetchComments} >Fetch comments</button>
      </div>
    );
  }
 }

export default connect(null, actions)(CommentBox);