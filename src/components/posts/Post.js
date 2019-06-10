import React, { Component } from "react";
import { deletePost } from "../../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Post extends Component {
  onClick = id => {
    this.props.deletePost(id);
  };
  render() {
    // console.log(this.props.post);
    const { id, title, body } = this.props.post;
    return (
      <div>
        <div className="card my-2">
          <div className="card-body">
            <div className="card-title">{title}</div>
            <div className="card-text">{body}</div>
            <div className="card-link my-1">
              <Link to={`/post/edit/${id}`}>
                <i
                  className="fas fa-pencil-alt btn btn-primary mx-1"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <i
                to="/post/edit/:id"
                className="fas fa-times btn btn-danger mx-1"
                onClick={this.onClick.bind(this, id)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  deletePost: PropTypes.func.isRequired
};

export default connect(
  null,
  { deletePost }
)(Post);
