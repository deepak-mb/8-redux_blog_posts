import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPost } from "../../actions/postActions";
import uuid from "uuid";

class AddPost extends Component {
  state = {
    title: "",
    body: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    if (title === "" || body === "") {
      alert("Please enter a title and body");
    } else {
      const newPost = {
        id: uuid(),
        userId: uuid(),
        title,
        body
      };
      // console.log(newPost);
      this.props.addPost(newPost);
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div className="container" style={{ margin: " 76px auto" }}>
        <h1 className="display-4 text-danger">Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="Title"
              onChange={this.onChange}
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
            />
          </div>
          <input type="submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
}

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(AddPost);
