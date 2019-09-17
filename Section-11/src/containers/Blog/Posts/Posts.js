import React, { Component } from "react";
import axios from "../../../axios";
import { Route } from "react-router-dom";

import Post from "../../../components/Post/Post";
import "./Posts.css";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        /*
            This is the original code that stores the data from the response into the state object:
            This is a promise.
            axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
                this.setState({posts: response.data});
            });
     */

        // modify the data from the JSON object to get some fields and get only certain reccords
        const internal_post_variable = response.data.slice(0, 4); // get only 4 records from the json object
        const updatedPosts = internal_post_variable.map(dummy_post_variable => {
          return {
            ...dummy_post_variable, // distribute all the properties from each part of the json object into the updatedPosts
            author: "Max" // add a hard coded property (author) into the updatedPosts variable
          };
        });
        this.setState({ posts: updatedPosts }); // change the state of the Object
      })
      .catch(error => {
        //this.setState({ error: true });
        console.log(error);
      });
  }

  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={'/posts/' + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
