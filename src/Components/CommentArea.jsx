import React, { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentArea = ({ selectedAsin, token }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    if (!selectedAsin) return;

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${selectedAsin}`,
        {
          headers: {
            Authorization: token
          }
        }
      );
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Errore nel fetch dei commenti:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [selectedAsin]);

  return (
    <div className="p-3 border-start" data-testid="comment-area">
      <h5>Recensioni</h5>
      {selectedAsin ? (
        <>
          <CommentsList comments={comments} />
          <AddComment
            elementId={selectedAsin}
            token={token}
            onCommentAdded={fetchComments}
          />
        </>
      ) : (
        <p>Seleziona un libro per vedere le recensioni</p>
      )}
    </div>
  );
};

export default CommentArea;