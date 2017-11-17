import React, { Component } from 'react';
import { List, fromJS } from 'immutable';
import IconButton from 'react-toolbox/lib/button';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

class Posts extends Component {

  state = {
    posts: List(),
    postsCount: 1,
    showForm: false,
    postToEdit: undefined,
  };

  handleDeletePost = (id) => {
    const index = this.state.posts.findIndex(p => p.props.id === id);
    console.log(index);
    const posts = this.state.posts.delete(index);
    console.log(posts);
    this.setState({ posts });
  }

  handleEditForm = (post) => {
    console.log(post);
    this.setState({ showForm: true, postToEdit: fromJS(post) });
  };

  handleCreatePost = (post) => {
    const postItem = (
      <Post
        key={this.state.postsCount}
        id={this.state.postsCount}
        title={post.get('title')}
        body={post.get('body')}
        // tags={comment.get('country')}
        date={post.get('date')}
        deletePost={this.handleDeletePost}
        handleEdit={this.handleEditForm}
        showForm={this.state.showForm}
        createPost={this.handleCreatePost}
        handleCloseForm={this.handleCloseForm}

        // { ...post }
      />
    );

    const posts = this.state.posts.concat(postItem);

    this.setState({
      posts,
      postsCount: this.state.postsCount + 1,
    }, () => this.handleCloseForm());
  };

  handleShowForm = () => {
    this.setState({ showForm: true });
  };

  handleCloseForm = () => {
    this.setState({ showForm: false, postToEdit: undefined });
  };

  render() {
    console.log(this.state.showForm);
    return (
      <div>
        {this.state.posts}
        <PostForm
          showForm={this.state.showForm}
          createPost={this.handleCreatePost}
          handleCloseForm={this.handleCloseForm}
          post={this.state.postToEdit}
        />
        <IconButton
          icon="add"
          onClick={this.handleShowForm}
        />
      </div>
    );

  }

}

export default Posts;