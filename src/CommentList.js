import React from 'react';


        const CommentList = ({comments, deleteComment}) => {
        const commentsList = comments.map(comment => {
            return <div> 
                    <li>{comment.name}: {comment.message}</li>
                    <button className="delete" onClick={() => {deleteComment(comment.id)}}>X</button>
            </div>
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

 
export default CommentList;