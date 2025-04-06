import React, { useState } from 'react';

const AddComment = ({ elementId, token, onCommentAdded }) => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState('1');

  const submitComment = async () => {
    if (!elementId) {
      console.error("elementId mancante!");
      return;
    }

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token
        },
        body: JSON.stringify({
          comment,
          rate,
          elementId
        })
      });

      if (!response.ok) throw new Error("Errore HTTP: " + response.status);

      setComment('');
      setRate('1');
      onCommentAdded(); // ricarica i commenti
    } catch (error) {
      console.error("Errore nell'invio della recensione:", error);
    }
  };

  return (
    <div className="mt-3">
      <h6>Aggiungi una recensione</h6>
      <input
        type="text"
        placeholder="Scrivi una recensione"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="form-control mb-2"
      />
      <select
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        className="form-select mb-2"
      >
        {[1, 2, 3, 4, 5].map(n => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
      <button onClick={submitComment} className="btn btn-primary">Invia</button>
    </div>
  );
};

export default AddComment;
