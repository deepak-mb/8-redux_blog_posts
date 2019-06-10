import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPost, editPost } from "../../actions/postActions";

class EditPost extends Component {
  state = {
    id: "",
    userId: "",
    title: "",
    body: ""
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }
  componentWillReceiveProps(nextProps, nextState) {
    // console.log(nextProps.post);
    const { id, userId, title, body } = nextProps.post;
    this.setState({ id, userId, title, body });
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { id, userId, title, body } = this.state;
    const updPost = {
      id,
      userId,
      title,
      body
    };
    this.props.editPost(updPost);
    this.props.history.push("/");
  };
  render() {
    const { title, body } = this.state;
    return (
      <div className="container" style={{ margin: " 76px auto" }}>
        <h1 className="display-4 text-danger">Edit Post</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="post">Post</label>
            <input
              type="text"
              className="form-control"
              name="body"
              placeholder="Post"
              onChange={this.onChange}
              value={body}
            />
          </div>
          <input type="submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
}

EditPost.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.posts.post
});

export default connect(
  mapStateToProps,
  { getPost, editPost }
)(EditPost);
