import React, { Component } from 'react';
import './App.scss';
import CommentList from "./CommentList";

import AdminMode from "./AdminMode";
import CommentForm from "./CommentForm";

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = { 
    comments: [  
      { id: 1,name: "JB", message: "Youhou la famille!"},
      { id: 2, name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
    ]
   }

  
  render() { 

    return ( 
      <div className="App container">

        <AdminMode />

        <CommentForm/>

        <CommentList comments={this.state.comments} />
      </div>
     );
  }
}
 
export default App;
