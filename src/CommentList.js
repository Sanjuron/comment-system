import React, { Component } from 'react';

class CommentList extends Component {
    state = {  }
    render() { 
        
        let commentsList = this.props.comments.map(comment => {
            return <li>{comment.name}: {comment.message}</li>
        })

        return (
            <div className="comment-list">
                <h2>Liste des Commentaires ({commentsList.length})</h2>
            <ul className="comment-list">
                {commentsList}
            </ul>
            </div>
         );
    }
}
 
export default CommentList;