import React, { Component } from "react";
import { getPosts } from "../../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Post from "./Post";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    // console.log(this.props.posts);
    const { posts } = this.props;
    return (
      <div className="container" style={{ margin: "76px auto" }}>
        <h1 className="display-4 text-danger">Posts</h1>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
