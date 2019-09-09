import React, { Component } from "react";
// get the data from this specific axios file
import axios from "../../axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

/* 
    We are implementing the axios.get module in the componentDidMount() because this method is used for handling
    side effects such as fetching data. 
    When we fetch data from an HTTP request, we need to run that request inside of a promise because we do not want
    to block the JS code. Inside of the promise, we store the data in the state of the class and then we map it 

*/

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        /*
            This is the original code that stores the data from the response into the state object:

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
        this.setState({ error: true });
        //console.log(error);
      });
  }

  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => {
              this.postSelectedHandler(post.id);
            }}
          />
        );
      });
    }

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
