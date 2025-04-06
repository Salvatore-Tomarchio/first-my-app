import React from 'react';
import { useParams } from 'react-router-dom';
import fantasy from '../data/fantasy.json';
import CommentArea from './CommentArea';

const BookDetails = ({ token }) => {
    const { asin } = useParams();
    const book = fantasy.find((b) => b.asin === asin);

    if (!book) return <div>Libro non trovato</div>;

    return (
        <div className="p-4">
            <h2>{book.title}</h2>
            <img src={book.img} alt={book.title} style={{ maxWidth: '200px' }} />
            <p><strong>Categoria:</strong> {book.category}</p>
            <p><strong>Prezzo:</strong> €{book.price}</p>
            <CommentArea selectedAsin={asin} token={token} />
        </div>
    );
};

export default BookDetails;