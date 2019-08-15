import React from 'react';


const Comments = React.createClass({
  renderComments(comment, i) {
    const { text, user } = comment;
    return (
      <div className="comment" key={i}>
      <p>
        <strong>{user}</strong>
        {text}
        <button
          className="remove-comment"
          onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}
        >
          &times;
        </button>
      </p>
      </div>
    )
  },

  handleSubmit(e) {
    e.preventDefault();

    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();

  },

  render() {
    const { postComments } = this.props;

    return(
      <div className="comments">
        {postComments.map((comment, i) => this.renderComments(comment, i))}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />

        </form>
      </div>
    )
  }
});

export default Comments;
