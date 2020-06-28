import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';


class CommentForm extends Component {
    state = { 
        name: null,
        message: null,
     };

     handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value // setState permet de modifier le state
       })
      }

      handleSubmit = e => {
        e.preventDefault();
        this.props.addComment(this.state);
      }

    render() { 
        return (
            <div className="add-comment">
                <h2>Ajouter un commentaire</h2>
                <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Input" required onChange={this.handleChange}/>
                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" id="message" placeholder="Textarea" required onChange={this.handleChange}/>
                <button className="button is-primary">Envoyer</button>
                </form>
                
            </div>
          );
    }
}
 
export default CommentForm;