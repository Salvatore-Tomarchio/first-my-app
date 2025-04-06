import React from "react";
import Alert from 'react-bootstrap/Alert';

export default function Welcome() {
    return (
      <Alert variant="success">
        <Alert.Heading>Benvenuto su EpiBooks!</Alert.Heading>
        <h1>Scopri migliaia di libri tra cui scegliere</h1>
      </Alert>
    )
    
}