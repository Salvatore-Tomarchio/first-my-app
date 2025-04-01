import React from "react";
import Alert from 'react-bootstrap/Alert';

export default function Welcome() {
    return (
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <h1>Questo è il titolo</h1>
      </Alert>
    )
}