import React, { Component } from 'react';
import './App.scss';
import CommentList from "./CommentList";

import AdminMode from "./AdminMode";
import CommentForm from "./CommentForm";

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = { 
    comments: [  
      // { id: 1,name: "JB", message: "Youhou la famille!"},
      // { id: 2, name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
    ]
   }

     addComment = (newComment) => {
       newComment.id = uuidv4();
      let comments = [...this.state.comments, newComment];     
      this.setState({
        comments: comments
      })
      }

      deleteComment = (id) => {
        let comments = this.state.comments.filter(comment => {
          return comment.id !== id
        }); //filter est une méthode non desctructrice, elle n'altère pas le state
        this.setState({
          comments: comments 
        })
      }
  
  
  render() { 

    return ( 
      <div className="App container">

        <AdminMode deleteComment={this.deleteComment}/>
        <div className="flex">
        <CommentForm addComment={this.addComment}/>
        <CommentList comments={this.state.comments} />
        </div>
      </div>
     );
  }
}
 
export default App;
