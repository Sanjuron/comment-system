import React, { Component } from 'react';

class CommentList extends Component {
    state = {  }
    render() { 
        
        let commentsList = this.props.comments.map(comment => {
            return <li>{comment.name}: {comment.message}</li>
        })

        return (

            <ul className="comment-list">
                {commentsList}
            </ul>
         );
    }
}
 
export default CommentList;