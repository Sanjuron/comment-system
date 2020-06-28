import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';


class CommentForm extends Component {
    state = { 
        comments: [{}],
     };


     addComment = (name, message) => {
        let newComment = {
          id: uuidv4(),
          name: name,
          message: message
        }
        this.setState({
          comments: [...this.state.comments, newComment]
        })
      }

      handleSubmit = e => {
        e.preventDefault();
        console.log(e);
        this.props.addComment(this.state);
      }

    render() { 
        return (
            <div>
                <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Input" required onChange={this.handleChange}/>
                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" id="message" placeholder="Textarea" required onChange={this.handleChange}/>
                <button>Envoyer</button>
                </form>
                
            </div>
          );
    }
}
 
export default CommentForm;