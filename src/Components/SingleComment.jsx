import React from 'react';

const SingleComment = ({ comment }) => {
    return (
        <div className="mb-2 p-2 border rounded" data-testid="single-comment">
            <div>Voto: <strong>{comment.rate}</strong></div>
            <div>Commento: <strong>{comment.comment}</strong></div>
            <div>Scritto da: <strong>{comment.author}</strong></div>
        </div>
    );
};

export default SingleComment;